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
import { selectLoading, selectResumes } from "../../redux/slices/resumeSlice.jsx";
import {
  addResume,
  fetchResumes,
  updateResume,
  deleteResume,
} from "../../redux/actions/resumeAction.jsx";

const Resume = () => {
  useTitle("All Resumes");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const resumes = useSelector(selectResumes);
  const resume = resumes.find(resume => resume.id === id);
  const [selected, setSelected] = useState(Array(resumes.length).fill(false));
  const [selectedAll, setSelectedAll] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    active: false,
    featureImage: "",
    createdAt: "",
  });
  useEffect(() => {
  	dispatch(fetchResumes());
  }, []);

  useEffect(() => {
    if (resume) {
      setFormData({
        title: resume.title || "",
        active: resume.active || false,
        featureImage: resume.featureImage || "",
        createdAt: resume.createdAt || "",
      });
    }
  }, [resume])

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleIsConstruction = (e) => {
    setFormData((prev) => ({ ...prev, active: e.target.checked }));
  };

  const handleSelectAll = (e) => {
    setSelectedAll(!selectedAll);
    const updatedSelected = Array(resumes.length).fill(e.target.checked);
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

  const handleAddResume = async (e) => {
    e.preventDefault();
    if (!resume) {
      await dispatch(addResume(formData));
    }
    else{
      await dispatch(updateResume(id, formData));
    }
    setFormData({
      title: "",
      active: false,
      featureImage: "",
      createdAt: "",
    });
  };

  const handleDeleteResume = async (id) => {
    await dispatch(deleteResume(id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredResumes = resumes.filter(resume =>
    resume.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
        <Media limit={1} getFile={getTransferedFile} />
      </Modal>
      <div className="admin_head">
        <h4>all Resumes</h4>
        <div className="admin_head_actions">
          <Input
            icon={<Tabler.TbSearch />}
            id="searchResume"
            name="searchResume"
            placeholder="Search resume"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper_sidebar">
          <form onSubmit={handleAddResume} className="sidebar_item">
            <h4 className="sidebar_heading center">Upload active image</h4>
            <div className="image_thumbnail">
              <Tabler.TbFileTypePdf style={{stroke: formData.featureImage ? "#ef4e2c" : ""}}/>
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
            <Checkbox
              checked={formData.active}
              onChange={handleIsConstruction}
              label="Active Resume"
            />
            <div className="form_action_buttons">
              <Button type="button" className="btn outline">
                <span>Discard</span>
              </Button>
              <Button type="submit" disabled={loading ? true : false}>
                <span>{loading ? "Loading..." : resume ? "Update" : "Save"}</span>
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
                    <span>Resume Name</span>
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
                    <span>Active</span>
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
              {filteredResumes.map((resume, index) => (
                <tr key={resume.id}>
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
                      <Tabler.TbFileTypePdf/>
                      <span>{resume.title}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{resume.createdAt}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>
                        {resume.active ? "Active" : "Not Active"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="action_button">
                      <Link to={`/hs-admin/resume/${resume.id}`} className="edit">
                        <Tabler.TbEdit />
                      </Link>
                      <button onClick={() => handleDeleteResume(resume.id)} className="delete">
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

export default Resume;
