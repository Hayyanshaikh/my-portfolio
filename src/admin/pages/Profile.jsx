import Media from './Media.jsx';
import * as Tabler from "react-icons/tb";
import Modal from '../components/Modal.jsx';
import { NavLink, Outlet } from "react-router-dom";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';
import QuillEditor from '../../website/components/QuillEditor.jsx';

const Profile = () => {
  useTitle("Profile General");

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
	return (
		<>
			<div className="wrapper">
				<div className="wrapper_sidebar">
					<div className="sidebar_item">
					<h4 className="sidebar_heading center">Profile picture</h4>
						<div className="image_thumbnail">
							<Tabler.TbPhotoScan/>
							{/*<figure>
								<img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt=""/>
							</figure>*/}
						</div>
		        <Button onClick={openModal}>
		        	<span>Upload Image</span>
		        </Button>
						<Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
			        <Media/>
			      </Modal>
					</div>
				</div>
				
				<div className="wrapper_content">
				  <Input
				    icon={<Tabler.TbUserCircle />}
				    label="First Name"
				    id="firstName"
				    name="firstName"
				    placeholder="First name"
				    className="w-half"
				    type="text"
				  />
				  <Input
				    icon={<Tabler.TbUserCircle />}
				    label="Last Name"
				    id="lastName"
				    name="lastName"
				    placeholder="Last name"
				    className="w-half"
				    type="text"
				  />
				  <Input
					  icon={<Tabler.TbPhone />}
					  label="Phone Number"
					  id="phoneNumber"
					  name="phoneNumber"
					  placeholder="Phone number"
					  className="w-half"
					  type="tel"
					/>
					<Input
					  icon={<Tabler.TbMail />}
					  label="Email"
					  id="email"
					  name="email"
					  placeholder="Email"
					  className="w-half"
					  type="email"
					/>
				  <Input
				    icon={<Tabler.TbBriefcase />}
				    label="Job title"
				    id="jobTitle"
				    name="jobTitle"
				    placeholder="Job title"
				    className="w-full"
				    type="text"
				  />
				  <Input
				    icon={<Tabler.TbMapPin />}
				    label="Location"
				    id="location"
				    name="location"
				    placeholder="Location"
				    className="w-full"
				    type="text"
				  />
				  <Input
				    label="About you / Short bio..."
				    id="message"
				    name="message"
				    placeholder="About you / Short bio..."
				    className="w-full"
				    type="text"
				  />
				  <QuillEditor
				    label="More About"
				    id="message"
				    name="message"
				    placeholder="Enter long description"
				    className="w-full"
				  />
				  <div className="form_action_buttons">
				  	<Button className="btn outline">
				  		<span>Discard</span>
				  	</Button>
				  	<Button>
				  		<span>Save</span>
				  	</Button>
				  </div>
				</div>
			</div>
		</>
	)
}

export default Profile