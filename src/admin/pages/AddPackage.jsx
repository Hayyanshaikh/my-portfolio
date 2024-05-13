import Media from './Media.jsx';
import * as Tabler from "react-icons/tb";
import Modal from '../components/Modal.jsx';
import Select from '../components/Select.jsx';
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import Input from '../../website/components/Input.jsx';
import Button from '../../website/components/Button.jsx';
import QuillEditor from '../../website/components/QuillEditor.jsx';

const AddPackage = () => {
  useTitle("Add New Package");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const services = [
    { value: '1', label: 'App Development' },
    { value: '2', label: 'Web Development' },
    { value: '3', label: 'UI/UX Designing' },
  ];
  const tiers = [
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
  ];
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
			<div className="wrapper add_package">
				<div className="wrapper_content">
				  <Select
		        id="exampleSelect"
		        label="Select Service"
		        name="exampleSelect"
		        options={services}
		        className="custom-select"
		      />
				  <Input
				    label="Short Description"
				    id="message"
				    name="message"
				    placeholder="Enter short description"
				    className="w-full"
				    type="text"
				  />
					<Checkbox label="Featured Package"/>
				  <div className="form_action_buttons">
				  	<Button className="btn outline">
				  		<span>Discard</span>
				  	</Button>
				  	<Button>
				  		<span>Save</span>
				  	</Button>
				  </div>
				</div>
				<div className="wrapper_sidebar">
					<div className="sidebar_item">
						<h4 className="sidebar_heading">Features</h4>
					  <div className="highlight_input">
					  	<Input
						    type="text"
						    id="add-highlights"
						    name="add-highlights"
						    placeholder="Add Highlight"
						  />
						  <Button>
						  	<Tabler.TbPlus/>
						  </Button>
					  </div>
					  <ul className="highlight_list">
						  <li>
						    <span>Unlimited access</span>
						    <button><Tabler.TbTrash/></button>
						  </li>
						  <li>
						    <span>Collaborative diary</span>
						    <button><Tabler.TbTrash/></button>
						  </li>
						  <li>
						    <span>Confirmation & Reminders of appointments</span>
						    <button><Tabler.TbTrash/></button>
						  </li>
						  <li>
						    <span>Online appointment booking</span>
						    <button><Tabler.TbTrash/></button>
						  </li>
						  <li>
						    <span>Free reservations</span>
						    <button><Tabler.TbTrash/></button>
						  </li>
						  <li>
						    <span>Integration with the agency website</span>
						    <button><Tabler.TbTrash/></button>
						  </li>
						</ul>
					</div>
				</div>
			</div>

			<div className="tier_wrapper">
				<h4 className="sub_heading">Pricing Package</h4>
			  <div className="tier_grid">
				  <div className="tier_form">
				    <h3>Basic Package</h3>
				    <Select
				      id="selectTierBasic"
				      label="Select Tier"
				      name="selectTierBasic"
				      options={tiers}
				      className="custom-select"
				    />
				    <Input
				      icon={<Tabler.TbFileDescription />}
				      label="Package Title"
				      id="basic_package_title"
				      name="basic_package_title"
				      placeholder="Enter package title"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Price"
				      id="basic_price"
				      name="basic_price"
				      placeholder="Enter price"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Sale Price"
				      id="basic_sale_price"
				      name="basic_sale_price"
				      placeholder="Enter Sale price"
				      className="w-full"
				      type="text"
				    />
				    <h3>Select Features</h3>
				    <ul className="tier_feature_list">
				      <li>
				        <Checkbox label="Unlimited access" />
				      </li>
				      <li>
				        <Checkbox label="Collaborative diary" />
				      </li>
				      <li>
				        <Checkbox label="Confirmation & Reminders of appointments" />
				      </li>
				      <li>
				        <Checkbox label="Online appointment booking" />
				      </li>
				      <li>
				        <Checkbox label="Free reservations" />
				      </li>
				      <li>
				        <Checkbox label="Integration with the agency website" />
				      </li>
				    </ul>
				  </div>
				  <div className="tier_form">
				    <h3>Standard Package</h3>
				    <Select
				      id="selectTierStandard"
				      label="Select Tier"
				      name="selectTierStandard"
				      options={tiers}
				      className="custom-select"
				    />
				    <Input
				      icon={<Tabler.TbFileDescription />}
				      label="Package Title"
				      id="standard_package_title"
				      name="standard_package_title"
				      placeholder="Enter package title"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Price"
				      id="standard_price"
				      name="standard_price"
				      placeholder="Enter price"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Sale Price"
				      id="standard_sale_price"
				      name="standard_sale_price"
				      placeholder="Enter Sale price"
				      className="w-full"
				      type="text"
				    />
				    <h3>Select Features</h3>
				    <ul className="tier_feature_list">
				      <li>
				        <Checkbox label="Unlimited access" />
				      </li>
				      <li>
				        <Checkbox label="Collaborative diary" />
				      </li>
				      <li>
				        <Checkbox label="Confirmation & Reminders of appointments" />
				      </li>
				      <li>
				        <Checkbox label="Online appointment booking" />
				      </li>
				      <li>
				        <Checkbox label="Free reservations" />
				      </li>
				      <li>
				        <Checkbox label="Integration with the agency website" />
				      </li>
				    </ul>
				  </div>
				  <div className="tier_form">
				    <h3>Premium Package</h3>
				    <Select
				      id="selectTierPremium"
				      label="Select Tier"
				      name="selectTierPremium"
				      options={tiers}
				      className="custom-select"
				    />
				    <Input
				      icon={<Tabler.TbFileDescription />}
				      label="Package Title"
				      id="premium_package_title"
				      name="premium_package_title"
				      placeholder="Enter package title"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Price"
				      id="premium_price"
				      name="premium_price"
				      placeholder="Enter price"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Sale Price"
				      id="premium_sale_price"
				      name="premium_sale_price"
				      placeholder="Enter Sale price"
				      className="w-full"
				      type="text"
				    />
				    <h3>Select Features</h3>
				    <ul className="tier_feature_list">
				      <li>
				        <Checkbox label="Unlimited access" />
				      </li>
				      <li>
				        <Checkbox label="Collaborative diary" />
				      </li>
				      <li>
				        <Checkbox label="Confirmation & Reminders of appointments" />
				      </li>
				      <li>
				        <Checkbox label="Online appointment booking" />
				      </li>
				      <li>
				        <Checkbox label="Free reservations" />
				      </li>
				      <li>
				        <Checkbox label="Integration with the agency website" />
				      </li>
				    </ul>
				  </div>
				</div>
			</div>
		</>
	)
}

export default AddPackage;