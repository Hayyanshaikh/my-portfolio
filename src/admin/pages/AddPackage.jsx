import Media from './Media.jsx';
import * as Tabler from "react-icons/tb";
import Modal from '../components/Modal.jsx';
import Select from '../components/Select.jsx';
import { useNavigate, useParams } from "react-router-dom";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import Input from '../../website/components/Input.jsx';
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import {addPackage, fetchPackages, updatePackage} from "../../redux/actions/packageAction.jsx";
import QuillEditor from '../../website/components/QuillEditor.jsx';
import {fetchServices} from "../../redux/actions/serviceAction.jsx";
import { selectLoading, selectPackages } from "../../redux/slices/packageSlice.jsx";
import { selectServices } from "../../redux/slices/serviceSlice.jsx";

const AddPackage = () => {
  useTitle("Add New Package");
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const packagesData = useSelector(selectPackages);
  const selectedPkg = packagesData.find(pkg => pkg.id === id);
  const servicesData = useSelector(selectServices);
  const [hightlightField, setHightlightField] = useState("");
  const loading = useSelector(selectLoading);
  const [formData, setFormData] = useState({
  	title: "",
  	service: "",
  	description: "",
  	featured: false,
  	features:[],
  });

  useEffect(() => {
    if (selectedPkg) {
      setFormData({
		  	title: selectedPkg.title || "",
		  	service: selectedPkg.service || "",
		  	description: selectedPkg.description || "",
		  	featured: selectedPkg.featured || "",
		  	features: selectedPkg.features || "",
      });
    }
  }, [selectedPkg]);

  useEffect(() => {
  	dispatch(fetchServices());
  	dispatch(fetchPackages());
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const services = servicesData.map(service => ({
    value: service.title,
    label: service.title
  }));

  const handleSelect = (value) => {
    setFormData({
    	...formData,
    	service: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
		setFormData((prev) => ({ ...prev, featured: e.target.checked }));
  };

  const highlightChange = (e) => {
    const { value } = e.target;
    setHightlightField(value);
  };

  const handleAddfeatures = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...formData.features, hightlightField],
    }));
    setHightlightField("");
  };

  const deleteFeature = (index) => {
    setFormData(prevFormData => {
      const updatedFeatures = [...prevFormData.features];
      updatedFeatures.splice(index, 1);
      return { ...prevFormData, features: updatedFeatures };
    });
  };

  const handleAddpackge = async (e) => {
  	e.preventDefault();

  	if (!selectedPkg) {
  		await dispatch(addPackage(formData));
    }
    else{
  		await dispatch(updatePackage(id, formData));
    }
  }

	return (
		<>
			<div className="admin_head">
				<h4>add new Package</h4>
				<div className="admin_head_actions">
					<Button onClick={() => navigate(-1)}>
						<Tabler.TbArrowLeft/>
						<span>go Back</span>
					</Button>
				</div>
			</div>
			<form onSubmit={handleAddpackge} className="wrapper add_package">
				<div className="wrapper_content">
				  <Input
				    label="Package Title"
				    id="title"
				    name="title"
				    placeholder="Enter Package title"
				    className="w-full"
				    type="text"
				    value={formData.title}
				    onChange={handleInputChange}
				  />
				  <Select
		        id="serviceSelect"
		        label="Select Service"
		        name="serviceSelect"
		        selected={formData.service}
		        options={services}
		        className="custom-select"
		        onSelect={handleSelect}
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
		        id="featuredPackage"
		        checked={formData.featured}
		        onChange={handleCheckboxChange}
		        label="Featured Package"
		      />
				  <div className="form_action_buttons">
				  	<Button type="button" className="btn outline">
				  		<span>Discard</span>
				  	</Button>
				  	<Button type="submit" disabled={loading ? true : false}>
				  		<span>{loading ? "Loading..." : selectedPkg ? "Update" : "Save"}</span>
				  	</Button>
				  </div>
				</div>
				<div className="wrapper_sidebar">
					<div className="sidebar_item">
						<h4 className="sidebar_heading">Features</h4>
					  <div className="highlight_input">
					  	<Input
						    type="text"
						    id="add-features"
						    name="add-features"
						    placeholder="Add Feature"
						    value={hightlightField}
                onChange={highlightChange}
						  />
						  <Button type="button" onClick={handleAddfeatures}>
                <Tabler.TbPlus />
              </Button>
					  </div>
					  <ul className="highlight_list">
              {formData.features.map((feature, index) => (
                <li key={index}>
                  <span>{feature}</span>
                  <button type="button" onClick={() => deleteFeature(index)}>
                    <Tabler.TbTrash />
                  </button>
                </li>
              ))}
            </ul>
					</div>
				</div>
			</form>
		</>
	)
}

export default AddPackage;