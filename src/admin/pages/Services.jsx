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

const services = [
  {
    id: 1,
    serviceName: "App Development",
    createdAt: "2024-04-30",
    image: "https://img.icons8.com/color/100/smartphone.png",
    featured: true,
  },
  {
    id: 2,
    serviceName: "Web Development",
    createdAt: "2024-04-29",
    image: "https://img.icons8.com/color/100/web.png",
    featured: false,
  },
  {
    id: 3,
    serviceName: "UI/UX Designing",
    createdAt: "2024-04-28",
    image: "https://img.icons8.com/fluency/100/wacom-tablet.png",
    featured: true,
  },
  // Add more services as needed
];



const Services = () => {
  useTitle("All Services");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [selected, setSelected] = useState(Array(services.length).fill(false));

	const handleSelectAll = (e) => {
	  const updatedSelected = Array(services.length).fill(e.target.checked);
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
				<h4>all Services</h4>
				<div className="admin_head_actions">
					<Input
	          icon={<Tabler.TbSearch />}
	          id="searchServices"
	          name="searchServices"
	          placeholder="Search Service"
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
						<Checkbox label="Featured Service"/>
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
					          <span>Service Name</span>
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
					    {services.map((service, index) => (
					      <tr key={service.id}>
					        <td>
					          <div>
					            <Checkbox checked={selected[index]} onChange={() => handleSelect(index)} />
					          </div>
					        </td>
					        <td>
					          <div>
					          	<figure>
					          		<img src={service.image} alt=""/>
					          	</figure>
					            <span>{service.serviceName}</span>
					          </div>
					        </td>
					        <td>
					          <div>
					            <span>{service.createdAt}</span>
					          </div>
					        </td>
					        <td>
					          <div>
					            <span>{service.featured ? "is Featured" : "Not"}</span>
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

export default Services