import Button from "../components/Button.jsx";
import Banner from '../components/Banner.jsx';
import useTitle from '../../hooks/useTitle.jsx';
import React, { useState, useEffect } from "react";
import WorkCardV2 from "../components/WorkCardV2.jsx";
import { useSelector, useDispatch } from "react-redux";
import {selectProjects} from '../../redux/slices/projectSlice.jsx';
import {fetchProjects, deleteProject} from '../../redux/actions/projectAction.jsx';


const Projects = () => {
  useTitle("All Projects");
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const [selectedService, setSelectedService] = useState(null);
  const uniqueCategories = [...new Set(projects.map(project => project.service))];

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const filteredProjects = selectedService ? projects.filter(project => project.service === selectedService) : projects;

  return (
    <>
      <Banner>My <span>Projects</span></Banner>
      <section className="work bg">
        <div className="container">
          <div className="filter_buttons">
            <Button 
              className={selectedService === null ? "btn active" : "btn"}
              onClick={() => setSelectedService(null)}
            >
              <span>All</span>
            </Button>
            {uniqueCategories.map((service, index) => (
              <Button 
                className={selectedService === service ? "btn active" : "btn"}
                key={index} 
                onClick={() => handleServiceClick(service)}
              >
                <span>{service}</span>
              </Button>
            ))}
          </div>
          <div className="projects_grid">
            {filteredProjects.map((project, index) => (
              <WorkCardV2
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                service={project.service}
                imageUrl={project.featureImage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
