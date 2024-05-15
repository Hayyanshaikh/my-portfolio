import Media from "./Media.jsx";
import * as Tabler from "react-icons/tb";
import Modal from "../components/Modal.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import Checkbox from "../components/Checkbox.jsx";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../website/components/Input.jsx";
import Button from "../../website/components/Button.jsx";
import { useNavigate, useParams } from "react-router-dom";
import QuillEditor from "../../website/components/QuillEditor.jsx";
import {addProject, fetchProjects, updateProject } from '../../redux/actions/projectAction.jsx';
import {selectLoading, selectProjects} from '../../redux/slices/projectSlice.jsx';

const AddProject = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const projects = useSelector(selectProjects);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [hightlightField, setHightlightField] = useState("");
  const project = projects.find(project => project.id === id);
  useTitle(!project ? "Add New Project" : `Update ${project && project.title}`);
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    underConstruction: false,
    featureImage: "",
    liveLink: "",
    galleryImages: [],
    highlights: [],
    time: "",
    date: "",
    createdAt: "",
    version: "",
  });

  useEffect(() => {
    dispatch(fetchProjects());
  }, [])

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        shortDescription: project.shortDescription || "",
        longDescription: project.longDescription || "",
        underConstruction: project.underConstruction || false,
        featureImage: project.featureImage || "",
        liveLink: project.liveLink || "",
        galleryImages: project.galleryImages || [],
        highlights: project.highlights || [],
        time: project.time || "",
        date: project.date || "",
        createdAt: project.createdAt || "",
        version: project.version || "",
      });
    }
  }, [project]);

  const handleIsConstruction = (e) => {
    setFormData((prev) => ({ ...prev, underConstruction: e.target.checked }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const highlightChange = (e) => {
    const { value } = e.target;
    setHightlightField(value);
  };

  const openModal = (type) => {
  	setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getTransferedFile = (file) => {
    if (modalType === "feature") {
    	setFormData({ ...formData, featureImage: file.imageUrl });
    }
    else if(modalType === "screenShots"){
	    setFormData({
	      ...formData,
	      galleryImages: [...formData.galleryImages, file.imageUrl],
	    });
    }
  };

  const handleImageRemove = (imageId) => {
    const updatedGalleryImages = formData.galleryImages.filter(
      (image, id) => id !== imageId
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      galleryImages: updatedGalleryImages,
    }));
  };

  const handleAddhighlights = () => {
    setFormData((prev) => ({
      ...prev,
      highlights: [...formData.highlights, hightlightField],
    }));
    setHightlightField("");
  };

  const deleteHighlight = (index) => {
    setFormData(prevFormData => {
      const updatedHighlights = [...prevFormData.highlights];
      updatedHighlights.splice(index, 1);
      return { ...prevFormData, highlights: updatedHighlights };
    });
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!project) {
      await dispatch(addProject(formData));
    }
    else{
      await dispatch(updateProject(id, formData));
    }
  	if (!project) {
      setFormData({
        title: "",
        shortDescription: "",
        longDescription: "",
        underConstruction: false,
        featureImage: "",
        liveLink: "",
        galleryImages: [],
        highlights: [],
        time: "",
        date: "",
        createdAt: "",
        version: "",
      });
    }
  };

  return (
    <>
      <div className="admin_head">
        <h4>{!project ? "add new project" : "update project"}</h4>
        <div className="admin_head_actions">
          <Button onClick={() => navigate(-1)}>
            <Tabler.TbArrowLeft />
            <span>go Back</span>
          </Button>
        </div>
      </div>
      <form onSubmit={handleAddProject} className="wrapper add_project">
        <div className="wrapper_content">
          <Input
            icon={<Tabler.TbFileDescription />}
            label="Title"
            id="title"
            name="title"
            placeholder="Enter your title"
            className="w-full"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
          />
          <Input
            label="Short Description"
            id="message"
            name="shortDescription"
            placeholder="Enter short description"
            className="w-full"
            type="text"
            value={formData.shortDescription}
            onChange={handleInputChange}
          />
          <Checkbox
            checked={formData.underConstruction}
            onChange={handleIsConstruction}
            label="This Project Under construction"
          />
          <Input
            icon={<Tabler.TbLink />}
            label="Live Preview Link"
            id="liveLink"
            name="liveLink"
            placeholder="Enter live preview link"
            className="w-full"
            type="url"
            value={formData.liveLink}
            onChange={handleInputChange}
          />
          <QuillEditor
            label="Long Description"
            id="longDescription"
            name="longDescription"
            placeholder="Enter long description"
            className="w-full"
            value={formData.longDescription}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, longDescription: value }))
            }
          />
          <div className="screen_shots">
            <div className="screen_shots_upload">
              <div className="input_group">
                <label>Screen shots</label>
              </div>
              <Modal
                className="media_modal"
                isOpen={isOpen}
                onClose={closeModal}
              >
                <Media getFile={getTransferedFile} />
              </Modal>
              <Button type="button" onClick={() => openModal("screenShots")}>
                <span>Upload Image</span>
              </Button>
            </div>
            <div className="screen_shots_imgs">
              {formData.galleryImages.map((image, key) => (
                <figure key={key}>
                  <img src={image} alt="" />
                  <button type="button" onClick={() => handleImageRemove(key)}>
                    <Tabler.TbTrash />
                  </button>
                </figure>
              ))}
            </div>
          </div>
          <div className="form_action_buttons">
            <Button className="btn outline">
              <span>Discard</span>
            </Button>
            <Button disabled={loading ? true : false}>
              <span>{loading ? "Loading..." : project ? "Update" : "Save"}</span>
            </Button>
          </div>
        </div>
        <div className="wrapper_sidebar">
          <div className="sidebar_item">
            <h4 className="sidebar_heading center">Upload featured image</h4>
            <div className="image_thumbnail">
              {
              	formData.featureImage ? (
              		<figure>
										<img src={formData.featureImage} alt=""/>
									</figure>
              	) : <Tabler.TbPhotoScan />
              }
            </div>
            <Button type="button" onClick={() => openModal("feature")}>
              <span>Upload Image</span>
            </Button>
            <Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
              <Media getFile={getTransferedFile} />
            </Modal>
          </div>
          <div className="sidebar_item">
            <h4 className="sidebar_heading">Add Highlights</h4>
            <div className="highlight_input">
              <Input
                type="text"
                id="add-highlights"
                name="add-highlights"
                placeholder="Add Highlight"
                value={hightlightField}
                onChange={highlightChange}
              />
              <Button type="button" onClick={handleAddhighlights}>
                <Tabler.TbPlus />
              </Button>
            </div>
            <ul className="highlight_list">
              {formData.highlights.map((highlight, index) => (
                <li key={index}>
                  <span>{highlight}</span>
                  <button type="button" onClick={() => deleteHighlight(index)}>
                    <Tabler.TbTrash />
                  </button>
                </li>
              ))}

            </ul>
          </div>
          <div className="sidebar_item">
            <h4 className="sidebar_heading">Changelog</h4>
            <Input
              icon={<Tabler.TbClock />}
              label="Time"
              id="time"
              name="time"
              placeholder="Enter time"
              type="time"
              value={formData.time}
              onChange={handleInputChange}
            />
            <Input
              icon={<Tabler.TbCalendar />}
              label="Date"
              id="date"
              name="date"
              placeholder="Enter date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            <Input
              icon={<Tabler.TbPackage />}
              label="Project Version"
              id="version"
              name="version"
              placeholder="Enter project version"
              type="text"
              value={formData.version}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProject;
