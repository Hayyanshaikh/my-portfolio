import React, { useState, useEffect } from "react";
import Button from "../components/Button.jsx";
import * as Tabler from "react-icons/tb";
import Banner from "../components/Banner.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useParams } from "react-router-dom";
import {selectProjects} from '../../redux/slices/projectSlice.jsx';
import {fetchProjects, deleteProject} from '../../redux/actions/projectAction.jsx';

const SingleProject = () => {
  let { projectId } = useParams();
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const project = projects.find(project => project.id === projectId);
  const [activeTab, setActiveTab] = useState("overview");
  const pageTitle = project && project.title;
  useTitle(pageTitle);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  if (!project) {
    return <div>Loadding...</div>
  }

  return (
    <>
      <Banner>
        {project.title}
      </Banner>

      {/* Overview */}
      <section className="bg">
        <div className="single_product_overview">
          <div className="container">
            <div className="single_project_overview_wrapper">
              <figure className="image_of_project">
                <img
                  src={project.featureImage}
                  alt=""
                />
              </figure>
              <div className="content_of_project">
                <span className="highlight_text">highlights</span>
                <ul>
                  {
                    project.highlights.map((highlight, key) => (
                      <li key={key}>{highlight}</li>
                    ))
                  }
                </ul>
                <hr />
                <div className="cta">
                  <span className="price">$20</span>
                  <Button>
                    <span>purchase Now</span>
                  </Button>
                  <Button to={project.liveLink} className="btn outline">
                    <span>Live Preview</span>
                    <Tabler.TbExternalLink />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* project detail */}
      <section className="project_detail">
        <div className="container">
          <div className="project_detail_wrapper">
            <div className="project_detail_content">
              <div className="filter_buttons">
                <Button
                  className={`btn ${activeTab === "overview" ? "active" : ""}`}
                  onClick={() => setActiveTab("overview")}
                >
                  <span>Product Overview</span>
                </Button>
                <Button
                  className={`btn ${
                    activeTab === "screenshots" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("screenshots")}
                >
                  <span>Screenshots</span>
                </Button>
                <Button
                  className={`btn ${activeTab === "changelog" ? "active" : ""}`}
                  onClick={() => setActiveTab("changelog")}
                >
                  <span>Changelog</span>
                </Button>
              </div>
              <hr />
              {activeTab === "overview" && (
                <div className="content" dangerouslySetInnerHTML={{ __html: project.longDescription }}>
	                
	              </div>
              )}
              {activeTab === "screenshots" && (
                <div className="content">
                  {
                    project.galleryImages.map((image, key) => (
                      <figure className="project_screenshots">
                        <img src={image} alt="" />
                      </figure>
                    ))
                  }
                </div>
              )}
              {activeTab === "changelog" && (
                <div className="content">
                	<div className="">
                		<p>{project.version} - {project.date}</p>
                		<p>Initial Release of the Template</p>
                	</div>
                </div>
              )}
            </div>
            <div className="small_overview">
              <figure className="image_of_project">
                <img
                  src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg"
                  alt=""
                />
              </figure>
              <div className="small_overview_content">
                <div className="small_overview_content_head">
                  <h4>modern title</h4>
                  <p className="price">$20</p>
                </div>
                <Button>
                  <span>purchase Now</span>
                </Button>
                <Button to={project.liveLink} className="btn outline">
                  <span>Live Preview</span>
                  <Tabler.TbExternalLink />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
