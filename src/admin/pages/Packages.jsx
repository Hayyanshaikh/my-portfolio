import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';
import {selectPackages} from '../../redux/slices/packageSlice.jsx';
import {fetchPackages, deletePackage} from '../../redux/actions/packageAction.jsx';

const Packages = () => {
  useTitle("all Packages");
  const dispatch = useDispatch();
  const packages = useSelector(selectPackages);
  const [selected, setSelected] = useState(false);
  const [selectedAll, setSelectedAll] = useState('');

  useEffect(() => {
  	dispatch(fetchPackages());
  }, []);

	const handleSelectAll = (e) => {
		setSelectedAll(!selectedAll);
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

	const handleDeletePackage = (projectId) => {
		dispatch(deletePackage(projectId));
  	dispatch(fetchPackages());
	}

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
									checked={selectedAll}
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
				      	<span>Featured</span>
				      	<button>
				      		<Tabler.TbSelector/>
				      	</button>
			      	</div>
			      </th>
			      <th>
			      	<div>
				      	<span>Created at</span>
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
						        <span>{pkg.title}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{pkg.description}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{pkg.featured ? "Featured" : "Not Featured"}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{pkg.createdAt}</span>
						      </div>
						    </td>
						    <td>
						      <div className="action_button">
						        <Link to={pkg.id} className="edit">
						          <Tabler.TbEdit />
						        </Link>
						        <button className="delete" onClick={() => handleDeletePackage(pkg.id)}>
						          <Tabler.TbTrash />
						        </button>
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