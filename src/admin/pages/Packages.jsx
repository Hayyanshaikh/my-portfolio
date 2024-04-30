import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';

const packages = [
  {
    id: 1,
    image: "https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg",
    name: "Package A",
    description: "This is a brief description of Package A.",
    status: "In Progress",
    startDate: "2024-04-01",
    endDate: "2024-05-31"
  },
  {
    id: 2,
    image: "https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg",
    name: "Package A",
    description: "This is a brief description of Package A.",
    status: "In Progress",
    startDate: "2024-04-01",
    endDate: "2024-05-31"
  },
];

const Packages = () => {
  useTitle("all Packages");
  const [selected, setSelected] = useState(Array(packages.length).fill(false));

	const handleSelectAll = (e) => {
	  const updatedSelected = Array(packages.length).fill(e.target.checked);
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
				<h4>all Packages</h4>
				<div className="admin_head_actions">
					<Input
	          icon={<Tabler.TbSearch />}
	          id="searchPackage"
	          name="searchPackage"
	          placeholder="Search package"
	        />
					<Button to="add">
						<Tabler.TbPlus/>
						<span>Add package</span>
					</Button>
				</div>
			</div>
			<table>
			  <thead>
			    <tr>
			    	<th>
			    		<div>
			    			<Checkbox
								  onChange={handleSelectAll}
								/>

			    		</div>
			    	</th>
			      <th>
			      	<div>
				      	<span>Package Name</span>
				      	<button>
				      		<Tabler.TbSelector/>
				      	</button>
			      	</div>
			      </th>
			      <th>
			      	<div>
				      	<span>Description</span>
				      	<button>
				      		<Tabler.TbSelector/>
				      	</button>
			      	</div>
			      </th>
			      <th>
			      	<div>
				      	<span>Status</span>
				      	<button>
				      		<Tabler.TbSelector/>
				      	</button>
			      	</div>
			      </th>
			      <th>
			      	<div>
				      	<span>Start Date</span>
				      	<button>
				      		<Tabler.TbSelector/>
				      	</button>
			      	</div>
			      </th>
			      <th>
			      	<div>
				      	<span>End Date</span>
				      	<button>
				      		<Tabler.TbSelector/>
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
			    {
			    	packages.map((pkg, index) => (
						  <tr key={pkg.id}>
						    <td>
						      <div>
						        <Checkbox
										  checked={selected[index]}
										  onChange={() => handleSelect(index)}
										/>

						      </div>
						    </td>
						    <td>
						      <div>
						        <figure>
						          <img src={pkg.image} alt=""/>
						        </figure>
						        <span>{pkg.name}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{pkg.description}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{pkg.status}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{pkg.startDate}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{pkg.endDate}</span>
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
						))
			    }
			  </tbody>
			</table>
		</>
	)
}

export default Packages