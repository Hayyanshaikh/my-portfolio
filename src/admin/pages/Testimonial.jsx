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
import { selectLoading, selectTestimonials } from "../../redux/slices/testimonialSlice.jsx";
import {
  addTestimonial,
  fetchTestimonials,
  updateTestimonial,
  deleteTestimonial,
} from "../../redux/actions/testimonialAction.jsx";

const Testimonials = () => {
  useTitle("All Testimonials");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const testimonials = useSelector(selectTestimonials);
  const testimonial = testimonials.find(testimonial => testimonial.id === id);
  const [selected, setSelected] = useState(Array(testimonials.length).fill(false));
  const [selectedAll, setSelectedAll] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
	  customerName: "",
	  title: "",
	  quote: "",
	  featured: false,
	  featureImage: "",
	  createdAt: "",
	});


  useEffect(() => {
  	dispatch(fetchTestimonials());
  }, []);

  useEffect(() => {
  if (testimonial) {
    setFormData({
      customerName: testimonial.customerName || "",
      title: testimonial.title || "",
      quote: testimonial.quote || "",
      featured: testimonial.featured || false,
      featureImage: testimonial.featureImage || "",
      createdAt: testimonial.createdAt || "",
    });
  } 
}, [testimonial]);


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
    const updatedSelected = Array(testimonials.length).fill(e.target.checked);
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

  const handleAddTestimonial = async (e) => {
  e.preventDefault();
  if (!testimonial) {
    await dispatch(addTestimonial(formData));
    setFormData({
      customerName: "",
      title: "",
      quote: "",
      featured: false,
      featureImage: "",
      createdAt: "",
    });
  } else {
    await dispatch(updateTestimonial(id, formData));
  }
};


  const handleDeleteTestimonial = async (id) => {
    await dispatch(deleteTestimonial(id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTestimonials = testimonials.filter(testimonial =>
    testimonial.customerName && testimonial.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
        <Media getFile={getTransferedFile} />
      </Modal>
      <div className="admin_head">
        <h4>all Testimonials</h4>
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
          <form onSubmit={handleAddTestimonial} className="sidebar_item">
            <h4 className="sidebar_heading center">Upload Customer image</h4>
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
					    label="Customer Name"
					    id="customerName"
					    name="customerName"
					    placeholder="Enter customer name"
					    className="w-full"
					    type="text"
					    value={formData.customerName}
					    onChange={handleInputChange}
					  />
					  <Input
					    label="Company Name"
					    id="title"
					    name="title"
					    placeholder="Enter company name"
					    className="w-full"
					    type="text"
					    value={formData.title}
					    onChange={handleInputChange}
					  />
					  <Input
					    label="Quote"
					    id="message"
					    name="quote"
					    placeholder="Enter quote"
					    className="w-full"
					    value={formData.quote}
					    onChange={handleInputChange}
					  />
					  <Checkbox
					    checked={formData.featured}
					    onChange={handleIsConstruction}
					    label="Featured Testimonial"
					  />
					  <div className="form_action_buttons">
					    <Button type="button" className="btn outline">
					      <span>Discard</span>
					    </Button>
					    <Button type="submit" disabled={loading ? true : false}>
					      <span>{loading ? "Loading..." : testimonial ? "Update" : "Save"}</span>
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
                    <span>Customer Name</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Company</span>
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
              {filteredTestimonials.map((testimonial, index) => (
                <tr key={testimonial.id}>
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
                        <img src={testimonial.featureImage} alt="" />
                      </figure>
                      <span>{testimonial.customerName}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{testimonial.title}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{testimonial.createdAt}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>
                        {testimonial.featured ? "Featured" : "Not Featured"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="action_button">
                      <Link to={`/hs-admin/testimonial/${testimonial.id}`} className="edit">
                        <Tabler.TbEdit />
                      </Link>
                      <button onClick={() => handleDeleteTestimonial(testimonial.id)} className="delete">
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

export default Testimonials;
