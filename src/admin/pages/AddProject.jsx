import { Link, useNavigate } from "react-router-dom";
import Media from './Media.jsx';
import * as Tabler from "react-icons/tb";
import Modal from '../components/Modal.jsx';
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';
import QuillEditor from '../../website/components/QuillEditor.jsx';

const AddProject = () => {
  useTitle("Add New Project");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
	return (
		<>
			<div className="admin_head">
				<h4>add new project</h4>
				<div className="admin_head_actions">
					<Button onClick={() => navigate(-1)}>
						<Tabler.TbArrowLeft/>
						<span>go Back</span>
					</Button>
				</div>
			</div>
			<div className="wrapper add_project">
				<div className="wrapper_content">
				  <Input
				    icon={<Tabler.TbFileDescription />}
				    label="Title"
				    id="title"
				    name="title"
				    placeholder="Enter your title"
				    className="w-full"
				    type="text"
				  />
				  <Input
				    label="Short Description"
				    id="message"
				    name="message"
				    placeholder="Enter short description"
				    className="w-full"
				    type="text"
				  />
				  <Input
				    icon={<Tabler.TbLink />}
				    label="Live Preview Link"
				    id="live-preview"
				    name="live-preview"
				    placeholder="Enter live preview link"
				    className="w-full"
				    type="url"
				  />
				  <QuillEditor
				    label="Long Description"
				    id="message"
				    name="message"
				    placeholder="Enter long description"
				    className="w-full"
				  />
				  <div className="screen_shots">
				  	<div className="screen_shots_upload">
					  	<div className="input_group">
					  		<label>Screen shots</label>
					  	</div>
							<Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
				        <Media/>
				      </Modal>
			        <Button onClick={openModal}>
			        	<span>Upload Image</span>
			        </Button>
				  	</div>
				  	<div className="screen_shots_imgs">
				  		<figure>
				  			<img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt=""/>
				  			<Tabler.TbTrash/>
				  		</figure>
				  	</div>
				  </div>
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
						<h4 className="sidebar_heading">Upload featured image</h4>
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
					<div className="sidebar_item">
						<h4 className="sidebar_heading">Add Highlights</h4>
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
					<div className="sidebar_item">
						<h4 className="sidebar_heading">Changelog</h4>
					  <Input
					    icon={<Tabler.TbClock />}
					    label="Time"
					    id="time"
					    name="time"
					    placeholder="Enter time"
					    type="time"
					  />
					  <Input
					    icon={<Tabler.TbCalendar />}
					    label="Date"
					    id="date"
					    name="date"
					    placeholder="Enter date"
					    type="date"
					  />
					  <Input
					    icon={<Tabler.TbPackage />}
					    label="Project Version"
					    id="project-version"
					    name="project-version"
					    placeholder="Enter project version"
					    type="text"
					  />
					</div>
				</div>
			</div>
		</>
	)
}

export default AddProject;