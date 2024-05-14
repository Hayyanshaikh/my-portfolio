import Media from "./Media.jsx";
import * as Tabler from "react-icons/tb";
import Modal from "../components/Modal.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import Checkbox from "../components/Checkbox.jsx";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../website/components/Input.jsx";
import Button from "../../website/components/Button.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectLoading, selectServices } from "../../redux/slices/serviceSlice.jsx";
import {
  addService,
  fetchServices,
  updateService,
  deleteService,
} from "../../redux/actions/serviceAction.jsx";

const Services = () => {
  useTitle("All Services");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const services = useSelector(selectServices);
  const service = services.find(service => service.id === id);
  const [selected, setSelected] = useState(Array(services.length).fill(false));
  const [selectedAll, setSelectedAll] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    featured: false,
    featureImage: "",
    createdAt: "",
  });
  useEffect(() => {
  	dispatch(fetchServices());
  }, []);

  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title || "",
        description: service.description || "",
        featured: service.featured || false,
        featureImage: service.featureImage || "",
        createdAt: service.createdAt || "",
      });
    }
  }, [service])

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
    const updatedSelected = Array(services.length).fill(e.target.checked);
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

  const handleAddService = async (e) => {
    e.preventDefault();
    if (!service) {
      await dispatch(addService(formData));
      setFormData({
        title: "",
        description: "",
        featured: false,
        featureImage: "",
        createdAt: "",
      });
    }
    else{
      await dispatch(updateService(id, formData));
    }
  };

  const handleDeleteService = async (id) => {
    await dispatch(deleteService(id));
  };

  return (
    <>
      <Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
        <Media getFile={getTransferedFile} />
      </Modal>
      <div className="admin_head">
        <h4>all Services</h4>
        <div className="admin_head_actions">
          <Input
            icon={<Tabler.TbSearch />}
            id="searchServices"
            name="searchServices"
            placeholder="Search Service"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper_sidebar">
          <form onSubmit={handleAddService} className="sidebar_item">
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
              label="Featured Service"
            />
            <div className="form_action_buttons">
              <Button type="button" className="btn outline">
                <span>Discard</span>
              </Button>
              <Button type="submit" disabled={loading ? true : false}>
                <span>{loading ? "Loading..." : "Save"}</span>
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
                    <span>Service Name</span>
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
              {services.map((service, index) => (
                <tr key={service.id}>
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
                        <img src={service.featureImage} alt="" />
                      </figure>
                      <span>{service.title}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{service.createdAt}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>
                        {service.featured ? "Featured" : "Not Featured"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="action_button">
                      <Link to={`/hs-admin/services/${service.id}`} className="edit">
                        <Tabler.TbEdit />
                      </Link>
                      <button onClick={() => handleDeleteService(service.id)} className="delete">
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

export default Services;
