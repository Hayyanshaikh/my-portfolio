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

const resumes = [
  {
    id: 1,
    resumeName: "Updated Resume - HTML",
    createdAt: "2024-04-30",
    resumeFile: "https://img.icons8.com/color/100/html-5.png",
    isActive: true,
  },
  {
    id: 2,
    resumeName: "Updated Resume - CSS",
    createdAt: "2024-04-29",
    resumeFile: "https://img.icons8.com/color/100/css3.png",
    isActive: false,
  },
  {
    id: 3,
    resumeName: "Updated Resume - JavaScript",
    createdAt: "2024-04-28",
    resumeFile: "https://img.icons8.com/color/100/javascript.png",
    isActive: false,
  },
  {
    id: 4,
    resumeName: "Updated Resume - Figma",
    createdAt: "2024-04-27",
    resumeFile: "https://img.icons8.com/color/100/figma.png",
    isActive: false,
  },
];

const Resumes = () => {
  useTitle("All Resumes");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [selected, setSelected] = useState(Array(resumes.length).fill(false));

	const handleSelectAll = (e) => {
	  const updatedSelected = Array(resumes.length).fill(e.target.checked);
	  setSelected(updatedSelected);
	};

	const handleSelect = (index) => {
	  setSelected(prevSelected => {
	    const updatedSelected = [...prevSelected];
	    updatedSelected[index] = !updatedSelected[index];
	    return updatedSelected;
	  });
	};
	return (
		<>
			<div className="admin_head">
				<h4>all Resumes</h4>
				<div className="admin_head_actions">
					<Input
	          icon={<Tabler.TbSearch />}
	          id="searchResumes"
	          name="searchResumes"
	          placeholder="Search Resume"
	        />
				</div>
			</div>
			<div className="wrapper">
				<div className="wrapper_sidebar">
					<div className="sidebar_item">
						<h4 className="sidebar_heading center">Upload Resume</h4>
						<div className="image_thumbnail">
							<Tabler.TbFileTypePdf/>
							{/*<figure>
								<img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt=""/>
							</figure>*/}
						</div>
		        <Button onClick={openModal}>
		        	<span>Upload Resume</span>
		        </Button>
						<Modal className="media_modal" isOpen={isOpen} onClose={closeModal}>
			        <Media/>
			      </Modal>
					  <Input
					    icon={<Tabler.TbFileDescription />}
					    label="Title"
					    id="title"
					    name="title"
					    placeholder="Enter your title"
					    className="w-full"
					    type="text"
					  />
						<Checkbox label="Active resume"/>
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
				<div className="wrapper_content">
					<table>
					  <thead>
					    <tr>
					      <th>
					        <div>
					          <Checkbox onChange={handleSelectAll} />
					        </div>
					      </th>
					      <th>
					        <div>
					          <span>Resume Name</span>
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
					          <span>Active</span>
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
					    {resumes.map((resume, index) => (
					      <tr key={resume.id}>
					        <td>
					          <div>
					            <Checkbox checked={selected[index]} onChange={() => handleSelect(index)} />
					          </div>
					        </td>
					        <td>
					          <div>
					          	<Tabler.TbFileTypePdf/>
					            <span>{resume.resumeName}</span>
					          </div>
					        </td>
					        <td>
					          <div>
					            <span>{resume.createdAt}</span>
					          </div>
					        </td>
					        <td>
					          <div>
					            <span>{resume.isActive ? "Active" : "Inactive"}</span>
					          </div>
					        </td>
					        <td>
					          <div className="action_button">
					            <Link className="edit">
					              <Tabler.TbEdit />
					            </Link>
					            <Link className="delete">
					              <Tabler.TbTrash />
					            </Link>
					          </div>
					        </td>
					      </tr>
					    ))}
					  </tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Resumes