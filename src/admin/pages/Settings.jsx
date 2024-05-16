import Modal from '../components/Modal.jsx';
import * as Tabler from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle.jsx';
import React, { useState, useEffect } from "react";
import Input from '../../website/components/Input.jsx';
import Button from '../../website/components/Button.jsx';
import { useSelector, useDispatch } from "react-redux";
import QuillEditor from '../../website/components/QuillEditor.jsx';
import { selectSettings, selectLoading } from "../../redux/slices/settingSlice.jsx";
import { updateSettingsAsync, getSettingsAsync } from "../../redux/actions/settingAction.jsx";

const Settings = () => {
  useTitle("Settings");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const settings = useSelector(selectSettings);
  const loading = useSelector(selectLoading);
  const [formData, setFormData] = useState({
    websiteTitle: "",
    siteAddress: "",
    longDescription: "",
    whatsapp: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    telegram: "",
    github: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    dispatch(getSettingsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (settings) {
      setFormData({
        websiteTitle: settings[0].websiteTitle || "",
        siteAddress: settings[0].siteAddress || "",
        longDescription: settings[0].longDescription || "",
        whatsapp: settings[0].whatsapp || "",
        instagram: settings[0].instagram || "",
        linkedin: settings[0].linkedin || "",
        twitter: settings[0].twitter || "",
        telegram: settings[0].telegram || "",
        github: settings[0].github || "",
      });
    }
  }, [settings]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (value, name) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSettingsAsync(settings[0].id, formData));
  }

  return (
    <>
      <div className="admin_head">
        <h4>Settings</h4>
        <div className="admin_head_actions">
          <Button onClick={() => navigate(-1)}>
            <Tabler.TbArrowLeft/>
            <span>Go Back</span>
          </Button>
        </div>
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="wrapper_content">
          <h3 className="sub_heading">General Settings</h3>
          <Input
            icon={<Tabler.TbAppWindow />}
            label="Website Title"
            id="websiteTitle"
            name="websiteTitle"
            placeholder="Enter your Website title"
            className="w-half"
            type="text"
            value={formData.websiteTitle}
            onChange={handleChange}
          />
          <Input
            icon={<Tabler.TbLink />}
            label="Site Address"
            id="siteAddress"
            name="siteAddress"
            placeholder="Enter site address"
            className="w-half"
            type="url"
            value={formData.siteAddress}
            onChange={handleChange}
          />
          <QuillEditor
            label="Long Description"
            id="longDescription"
            name="longDescription"
            placeholder="Enter long description"
            className="w-full"
            value={formData.longDescription}
            onChange={(value) => handleEditorChange(value, "longDescription")}
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
            value={formData.whatsapp}
            onChange={handleChange}
          />
          <Input
            icon={<Tabler.TbBrandInstagram />}
            label="Instagram"
            id="instagram"
            name="instagram"
            placeholder="Enter your Instagram username"
            className="w-one-third"
            type="text"
            value={formData.instagram}
            onChange={handleChange}
          />
          <Input
            icon={<Tabler.TbBrandLinkedin />}
            label="LinkedIn"
            id="linkedin"
            name="linkedin"
            placeholder="Enter your LinkedIn profile URL"
            className="w-one-third"
            type="text"
            value={formData.linkedin}
            onChange={handleChange}
          />
          <Input
            icon={<Tabler.TbBrandTwitter />}
            label="Twitter"
            id="twitter"
            name="twitter"
            placeholder="Enter your Twitter username"
            className="w-one-third"
            type="text"
            value={formData.twitter}
            onChange={handleChange}
          />
          <Input
            icon={<Tabler.TbBrandTelegram />}
            label="Telegram"
            id="telegram"
            name="telegram"
            placeholder="Enter your Telegram username"
            className="w-one-third"
            type="text"
            value={formData.telegram}
            onChange={handleChange}
          />
          <Input
            icon={<Tabler.TbBrandGithub />}
            label="GitHub"
            id="github"
            name="github"
            placeholder="Enter your GitHub username"
            className="w-one-third"
            type="text"
            value={formData.github}
            onChange={handleChange}
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
    </>
  )
}

export default Settings;