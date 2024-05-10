import Media from './Media.jsx';
import * as Tabler from "react-icons/tb";
import Modal from '../components/Modal.jsx';
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Input from '../../website/components/Input.jsx';
import Button from '../../website/components/Button.jsx';
import { selectUser, selectLoading } from "../../redux/slices/userSlice.jsx";
import { getUserAsync, updateUserAsync } from "../../redux/actions/userAction.jsx";
import QuillEditor from '../../website/components/QuillEditor.jsx';

const Profile = () => {
  useTitle("Profile General");
  const dispatch = useDispatch();  
  const user = useSelector(selectUser);
  const userLoading = useSelector(selectLoading);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    jobTitle: '',
    location: '',
    about: '',
    moreAbout: '',
    imageUrl: '',
  });

  useEffect(() => {
  	dispatch(getUserAsync());
  }, [])

  useEffect(() => {
    if (user && user.length > 0) {
      setFormData({
        firstName: user[0].firstName || "",
        lastName: user[0].lastName || "",
        phoneNumber: user[0].phoneNumber || "",
        email: user[0].email || "",
        jobTitle: user[0].jobTitle || "",
        location: user[0].location || "",
        about: user[0].about || "",
        moreAbout: user[0].moreAbout || "",
        imageUrl: user[0].imageUrl || "",
      });
    }
  }, [user]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      moreAbout: value,
    }));
  }

  const getTransferedFile = (file) => {
  	setFormData({...formData, imageUrl: file.imageUrl})
  }

  const handleSubmit = (e) => {
  	e.preventDefault();
  	dispatch(updateUserAsync(user && user[0].id, formData));
  }

	return (
		<>

			<Modal className="media_modal" isOpen={isOpen} onClose={closeModal} >
        <Media getFile={getTransferedFile}/>
      </Modal>
			<div className="wrapper">
				<div className="wrapper_sidebar">
					<div className="sidebar_item">
					<h4 className="sidebar_heading center">Profile picture</h4>
						<div className="image_thumbnail">
							{
								formData.imageUrl ? (
									<figure>
										<img src={formData.imageUrl} alt=""/>
									</figure>
								) : <Tabler.TbPhotoScan/>
							}
							
						</div>
		        <Button onClick={openModal}>
		        	<span>Upload Image</span>
		        </Button>
					</div>
				</div>
				
				<form onSubmit={handleSubmit} className="wrapper_content">
		      <Input
		        icon={<Tabler.TbUserCircle />}
		        label="First Name"
		        id="firstName"
		        name="firstName"
		        placeholder="First name"
		        className="w-half"
		        type="text"
		        value={formData.firstName}
		        onChange={handleChange}
		      />
		      <Input
		        icon={<Tabler.TbUserCircle />}
		        label="Last Name"
		        id="lastName"
		        name="lastName"
		        placeholder="Last name"
		        className="w-half"
		        type="text"
		        value={formData.lastName}
		        onChange={handleChange}
		      />
		      <Input
		        icon={<Tabler.TbPhone />}
		        label="Phone Number"
		        id="phoneNumber"
		        name="phoneNumber"
		        placeholder="Phone number"
		        className="w-half"
		        type="tel"
		        value={formData.phoneNumber}
		        onChange={handleChange}
		      />
		      <Input
		        icon={<Tabler.TbMail />}
		        label="Email"
		        id="email"
		        name="email"
		        placeholder="Email"
		        className="w-half"
		        type="email"
		        value={formData.email}
		        onChange={handleChange}
		      />
		      <Input
		        icon={<Tabler.TbBriefcase />}
		        label="Job title"
		        id="jobTitle"
		        name="jobTitle"
		        placeholder="Job title"
		        className="w-full"
		        type="text"
		        value={formData.jobTitle}
		        onChange={handleChange}
		      />
		      <Input
		        icon={<Tabler.TbMapPin />}
		        label="Location"
		        id="location"
		        name="location"
		        placeholder="Location"
		        className="w-full"
		        type="text"
		        value={formData.location}
		        onChange={handleChange}
		      />
		      <Input
		        label="About you / Short bio..."
		        id="about"
		        name="about"
		        placeholder="About you / Short bio..."
		        className="w-full"
		        type="text"
		        value={formData.about}
		        onChange={handleChange}
		      />
		      <QuillEditor
		        label="More About"
		        id="moreAbout"
		        className="w-full"
		        value={formData.moreAbout}
		        onChange={handleEditorChange}
		      />
		      <div className="form_action_buttons">
		        <Button type="button" className="btn outline">
		          <span>Discard</span>
		        </Button>
		        <Button type="submit" disabled={userLoading ? true : false}>
		          <span>{userLoading ? "Loading..." : "Save"}</span>
		        </Button>
		      </div>
		    </form>
			</div>
		</>
	)
}

export default Profile