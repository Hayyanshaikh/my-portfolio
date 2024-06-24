import Media from "./Media.jsx";
import * as Tabler from "react-icons/tb";
import Modal from "../components/Modal.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import Checkbox from "../components/Checkbox.jsx";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../website/components/Input.jsx";
import Button from "../../website/components/Button.jsx";
import { selectLoading, selectSkills } from "../../redux/slices/skillSlice.jsx";
import {
  addSkill,
  fetchSkills,
  updateSkill,
  deleteSkill,
} from "../../redux/actions/skillAction.jsx";

const Skills = () => {
  useTitle("All Skills");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const skills = useSelector(selectSkills);
  const skill = skills.find(skill => skill.id === id);
  const [selected, setSelected] = useState(Array(skills.length).fill(false));
  const [selectedAll, setSelectedAll] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    featured: false,
    featureImage: "",
    createdAt: "",
  });

  useEffect(() => {
  	dispatch(fetchSkills());
  }, []);

  useEffect(() => {
    if (skill) {
      setFormData({
        title: skill.title || "",
        description: skill.description || "",
        featured: skill.featured || false,
        featureImage: skill.featureImage || "",
        createdAt: skill.createdAt || "",
      });
    }
  }, [skill])

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleIsConstruction = (e) => {
    setFormData((prev) => ({ ...prev, featured: e.target.checked }));
  };

  const handleSelectAll = (e) => {
    setSelectedAll(!selectedAll);
    const updatedSelected = Array(skills.length).fill(e.target.checked);
    setSelected(updatedSelected);
  };

  const handleSelect = (index) => {
    setSelected((prevSelected) => {
      const updatedSelected = [...prevSelected];
      updatedSelected[index] = !updatedSelected[index];
      return updatedSelected;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getTransferedFile = (file) => {
    setFormData({ ...formData, featureImage: file.imageUrl });
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (!skill) {
      await dispatch(addSkill(formData));
      setFormData({
        title: "",
        description: "",
        featured: false,
        featureImage: "",
        createdAt: "",
      });
    }
    else{
      await dispatch(updateSkill(id, formData));
    }
  };

  const handleDeleteSkill = async (id) => {
    await dispatch(deleteSkill(id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSkills = skills.filter(skill =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
        <Media getFile={getTransferedFile} />
      </Modal>
      <div className="admin_head">
        <h4>all Skills</h4>
        <div className="admin_head_actions">
          <Input
            icon={<Tabler.TbSearch />}
            id="searchPackage"
            name="searchPackage"
            placeholder="Search package"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper_sidebar">
          <form onSubmit={handleAddSkill} className="sidebar_item">
            <h4 className="sidebar_heading center">Upload featured image</h4>
            <div className="image_thumbnail">
              {formData.featureImage ? (
                <figure>
                  <img src={formData.featureImage} alt="" />
                </figure>
              ) : (
                <Tabler.TbPhotoScan />
              )}
            </div>
            <Button type="button" onClick={openModal}>
              <span>Upload Image</span>
            </Button>
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
              name="description"
              placeholder="Enter short description"
              className="w-full"
              type="text"
              value={formData.description}
              onChange={handleInputChange}
            />
            <Checkbox
              checked={formData.featured}
              onChange={handleIsConstruction}
              label="Featured Skill"
            />
            <div className="form_action_buttons">
              <Button type="button" className="btn outline">
                <span>Discard</span>
              </Button>
              <Button type="submit" disabled={loading ? true : false}>
                <span>{loading ? "Loading..." : skills ? "Update" : "Save"}</span>
              </Button>
            </div>
          </form>
        </div>
        <div className="wrapper_content">
          <table>
            <thead>
              <tr>
                <th>
                  <div>
                    <Checkbox
                      checked={selectedAll}
                      onChange={handleSelectAll}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <span>Skill Name</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Created At</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Featured</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Actions</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSkills.map((skill, index) => (
                <tr key={skill.id}>
                  <td>
                    <div>
                      <Checkbox
                        checked={selected[index]}
                        onChange={() => handleSelect(index)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <figure>
                        <img src={skill.featureImage} alt="" />
                      </figure>
                      <span>{skill.title}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{skill.createdAt}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>
                        {skill.featured ? "Featured" : "Not Featured"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="action_button">
                      <Link to={`/hs-admin/skills/${skill.id}`} className="edit">
                        <Tabler.TbEdit />
                      </Link>
                      <button onClick={() => handleDeleteSkill(skill.id)} className="delete">
                        <Tabler.TbTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Skills;
