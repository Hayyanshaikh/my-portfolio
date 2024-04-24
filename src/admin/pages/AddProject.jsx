import { Link, useNavigate } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';

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
						<span>Back</span>
					</Button>
				</div>
			</div>
		</>
	)
}

export default AddProject