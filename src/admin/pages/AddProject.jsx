import { Link, useNavigate } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import Dropzone from '../components/Dropzone.jsx';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';
import QuillEditor from '../../website/components/QuillEditor.jsx';

const AddProject = () => {
  useTitle("Add New Project");
  const navigate = useNavigate();

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
				  <Input
				    icon={<Tabler.TbClock />}
				    label="Time"
				    id="time"
				    name="time"
				    placeholder="Enter time"
				    className="w-one-third"
				    type="time"
				  />
				  <Input
				    icon={<Tabler.TbCalendar />}
				    label="Date"
				    id="date"
				    name="date"
				    placeholder="Enter date"
				    className="w-one-third"
				    type="date"
				  />
				  <Input
				    icon={<Tabler.TbPackage />}
				    label="Project Version"
				    id="project-version"
				    name="project-version"
				    placeholder="Enter project version"
				    className="w-one-third"
				    type="text"
				  />
				</div>
				<div className="wrapper_sidebar"></div>
			</div>
		</>
	)
}

export default AddProject


/*
	
title ok
featured image ok
highlights -- list ok
price ok
live preview link -- if website ok
short description ok
long description ok
Screenshots ok
Changelog 
	- time / date / project version
	- template link if any website (live preview)

*/