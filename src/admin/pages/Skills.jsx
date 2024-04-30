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

const skills = [
  {
    id: 1,
    skillName: "HTML",
    createdAt: "2024-04-30",
    image: "https://img.icons8.com/color/100/html-5.png",
    featured: true,
  },
  {
    id: 2,
    skillName: "CSS",
    createdAt: "2024-04-29",
    image: "https://img.icons8.com/color/100/css3.png",
    featured: true,
  },
  {
    id: 3,
    skillName: "JavaScript",
    createdAt: "2024-04-28",
    image: "https://img.icons8.com/color/100/javascript.png",
    featured: true,
  },
  {
    id: 4,
    skillName: "Figma",
    createdAt: "2024-04-27",
    image: "https://img.icons8.com/color/100/figma.png",
    featured: true,
  },
  {
    id: 5,
    skillName: "Firebase",
    createdAt: "2024-04-26",
    image: "https://img.icons8.com/color/100/firebase.png",
    featured: true,
  },
  {
    id: 6,
    skillName: "Tailwind CSS",
    createdAt: "2024-04-25",
    image: "https://img.icons8.com/color/1600/tailwindcss.png",
    featured: true,
  },
  {
    id: 7,
    skillName: "Wordpress",
    createdAt: "2024-04-24",
    image: "https://img.icons8.com/color/100/wordpress.png",
    featured: true,
  },
  {
    id: 8,
    skillName: "Bootstrap",
    createdAt: "2024-04-23",
    image: "https://img.icons8.com/color/100/bootstrap.png",
    featured: true,
  },
  {
    id: 9,
    skillName: "React JS",
    createdAt: "2024-04-22",
    image: "https://img.icons8.com/color/100/react-native.png",
    featured: true,
  },
  {
    id: 10,
    skillName: "GitHub",
    createdAt: "2024-04-21",
    image: "https://img.icons8.com/color/1600/git.png",
    featured: true,
  },
];


const Skills = () => {
  useTitle("All Skills");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [selected, setSelected] = useState(Array(skills.length).fill(false));

	const handleSelectAll = (e) => {
	  const updatedSelected = Array(skills.length).fill(e.target.checked);
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
				<h4>all Skills</h4>
				<div className="admin_head_actions">
					<Input
	          icon={<Tabler.TbSearch />}
	          id="searchSkills"
	          name="searchSkills"
	          placeholder="Search Skill"
	        />
				</div>
			</div>
			<div className="wrapper">
				<div className="wrapper_sidebar">
					<div className="sidebar_item">
						<h4 className="sidebar_heading center">Upload featured image</h4>
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
						<Checkbox label="Featured Skill"/>
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
					          <span>Skill Name</span>
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
					          <span>Featured</span>
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
					    {skills.map((skill, index) => (
					      <tr key={skill.id}>
					        <td>
					          <div>
					            <Checkbox checked={selected[index]} onChange={() => handleSelect(index)} />
					          </div>
					        </td>
					        <td>
					          <div>
					          	<figure>
					          		<img src={skill.image} alt=""/>
					          	</figure>
					            <span>{skill.skillName}</span>
					          </div>
					        </td>
					        <td>
					          <div>
					            <span>{skill.createdAt}</span>
					          </div>
					        </td>
					        <td>
					          <div>
					            <span>{skill.featured ? "is Featured" : "Not"}</span>
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

export default Skills