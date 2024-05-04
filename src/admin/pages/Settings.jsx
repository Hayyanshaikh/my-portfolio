import { useNavigate } from "react-router-dom";
import Media from './Media.jsx';
import * as Tabler from "react-icons/tb";
import Modal from '../components/Modal.jsx';
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';
import QuillEditor from '../../website/components/QuillEditor.jsx';

const Settings = () => {
  useTitle("Settings");
  const navigate = useNavigate();
	return (
		<>
			<div className="admin_head">
				<h4>Settings</h4>
				<div className="admin_head_actions">
					<Button onClick={() => navigate(-1)}>
						<Tabler.TbArrowLeft/>
						<span>go Back</span>
					</Button>
				</div>
			</div>
			<div className="wrapper">
				<div className="wrapper_content">
					<h3 className="sub_heading">General Settings</h3>
				  <Input
				    icon={<Tabler.TbAppWindow />}
				    label="Website Title"
				    id="Website title"
				    name="Website title"
				    placeholder="Enter your Website title"
				    className="w-half"
				    type="text"
				  />
				  <Input
				    icon={<Tabler.TbLink />}
				    label="Site Address"
				    id="siteAddress"
				    name="siteAddress"
				    placeholder="Enter site address"
				    className="w-half"
				    type="url"
				  />
				  <QuillEditor
				    label="Long Description"
				    id="message"
				    name="message"
				    placeholder="Enter long description"
				    className="w-full"
				  />
					<h3 className="sub_heading">Social Links</h3>
				  <Input
					  icon={<Tabler.TbBrandWhatsapp />}
					  label="WhatsApp"
					  id="whatsapp"
					  name="whatsapp"
					  placeholder="Enter your WhatsApp number"
					  className="w-one-third"
					  type="text"
					/>
					<Input
					  icon={<Tabler.TbBrandInstagram />}
					  label="Instagram"
					  id="instagram"
					  name="instagram"
					  placeholder="Enter your Instagram username"
					  className="w-one-third"
					  type="text"
					/>
					<Input
					  icon={<Tabler.TbBrandLinkedin />}
					  label="LinkedIn"
					  id="linkedin"
					  name="linkedin"
					  placeholder="Enter your LinkedIn profile URL"
					  className="w-one-third"
					  type="text"
					/>
					<Input
					  icon={<Tabler.TbBrandTwitter />}
					  label="Twitter"
					  id="twitter"
					  name="twitter"
					  placeholder="Enter your Twitter username"
					  className="w-one-third"
					  type="text"
					/>
					<Input
					  icon={<Tabler.TbBrandTelegram />}
					  label="Telegram"
					  id="telegram"
					  name="telegram"
					  placeholder="Enter your Telegram username"
					  className="w-one-third"
					  type="text"
					/>
					<Input
					  icon={<Tabler.TbBrandGithub />}
					  label="GitHub"
					  id="github"
					  name="github"
					  placeholder="Enter your GitHub username"
					  className="w-one-third"
					  type="text"
					/>
					<h3 className="sub_heading">Security Settings</h3>

					<Input
					  icon={<Tabler.TbKey />}
					  label="Current Password"
					  id="currentPassword"
					  name="currentPassword"
					  placeholder="Enter your current password"
					  className="w-one-third"
					  type="password"
					/>

					<Input
					  icon={<Tabler.TbLock />}
					  label="New Password"
					  id="newPassword"
					  name="newPassword"
					  placeholder="Enter your new password"
					  className="w-one-third"
					  type="password"
					/>

					<Input
					  icon={<Tabler.TbLock />}
					  label="Confirm Password"
					  id="confirmPassword"
					  name="confirmPassword"
					  placeholder="Confirm your new password"
					  className="w-one-third"
					  type="password"
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

export default Settings;