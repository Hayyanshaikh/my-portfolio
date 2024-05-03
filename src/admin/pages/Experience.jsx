import { Link, useNavigate } from "react-router-dom";
import Media from './Media.jsx';
import * as Tabler from "react-icons/tb";
import Modal from '../components/Modal.jsx';
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';

const experiences = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    startDate: "2022-01-01",
    endDate: "2024-05-01",
    company: "ABC Corp",
    featured: true,
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    startDate: "2020-06-01",
    endDate: "2021-12-31",
    company: "XYZ Inc",
    featured: true,
  },
  // Add more experiences as needed
];

const Experience = () => {
  useTitle("All Experience");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [selected, setSelected] = useState(Array(experiences.length).fill(false));

  const handleSelectAll = (e) => {
    const updatedSelected = Array(experiences.length).fill(e.target.checked);
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
        <h4>All Experience</h4>
        <div className="admin_head_actions">
          <Input
            icon={<Tabler.TbSearch />}
            id="searchExperience"
            name="searchExperience"
            placeholder="Search Experience"
          />
        </div>
      </div>
      <div className="wrapper">
      	<div className="wrapper_sidebar">
      		<div className="sidebar_item">
      		<h4 className="sidebar_heading center">Upload Company logo</h4>
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
		        	icon={<Tabler.TbBriefcase/>}
		          label="Job Title"
		          id="jobTitle"
		          name="jobTitle"
		          placeholder="Enter job title"
		          className="w-full"
		          type="text"
		        />
		        <Input
		          label="Start Date"
		          id="startDate"
		          name="startDate"
		          type="date"
		        	icon={<Tabler.TbCalendarEvent/>}
		        />
		        <Input
		          label="End Date"
		          id="endDate"
		          name="endDate"
		          type="date"
		        	icon={<Tabler.TbCalendarEvent/>}
		        />
		        <Checkbox label="Presenet"/>
		        <Input
		          label="Company"
		          id="company"
		          name="company"
		          placeholder="Enter company name"
		        	icon={<Tabler.TbBuilding/>}
		          type="text"
		        />
		        <Checkbox label="Featured Experience"/>
		        <div className="form_action_buttons">
		          <Button className="btn outline">
		            <span>Cancel</span>
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
                    <span>Job Title</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Start Date</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>End Date</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Company</span>
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
              {experiences.map((experience, index) => (
                <tr key={experience.id}>
                  <td>
                    <div>
                      <Checkbox checked={selected[index]} onChange={() => handleSelect(index)} />
                    </div>
                  </td>
                  <td>{experience.jobTitle}</td>
                  <td>{experience.startDate}</td>
                  <td>{experience.endDate}</td>
                  <td>{experience.company}</td>
                  <td>{experience.featured ? "Yes" : "No"}</td>
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
  );
}

export default Experience;
