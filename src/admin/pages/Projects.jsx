import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from '../../website/components/Input.jsx';
import Button from '../../website/components/Button.jsx';
import {selectProjects} from '../../redux/slices/projectSlice.jsx';
import {fetchProjects, deleteProject} from '../../redux/actions/projectAction.jsx';

const Projects = () => {
  useTitle("all Projects");
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const [selected, setSelected] = useState(false);
  const [selectedAll, setSelectedAll] = useState('');

  useEffect(() => {
  	dispatch(fetchProjects());
  }, [])

	const handleSelectAll = (e) => {
		setSelectedAll(!selectedAll);
	  const updatedSelected = Array(projects.length).fill(e.target.checked);
	  setSelected(updatedSelected);
	};

	const handleSelect = (index) => {
	  setSelected(prevSelected => {
	    const updatedSelected = [...prevSelected];
	    updatedSelected[index] = !updatedSelected[index];
	    return updatedSelected;
	  });
	};

	const handleDeleteProject = (projectId) => {
		dispatch(deleteProject(projectId));
  	dispatch(fetchProjects());
	}

	return (
		<>
			<div className="admin_head">
				<h4>all Projects</h4>
				<div className="admin_head_actions">
					<Input
	          icon={<Tabler.TbSearch />}
	          id="searchProject"
	          name="searchProject"
	          placeholder="Search project"
	        />
					<Button to="add">
						<Tabler.TbPlus/>
						<span>Add project</span>
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
				      	<span>Project Name</span>
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
				      	<span>Create at</span>
				      	<button>
				      		<Tabler.TbSelector/>
				      	</button>
			      	</div>
			      </th>
			      <th>
			      	<div>
				      	<span>Version</span>
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
			    	projects.map((project, index) => (
						  <tr key={project.id}>
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
						          <img src={project.featureImage} alt=""/>
						        </figure>
						        <span>{project.title}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{project.underConstruction ? "Under Construction" : "Completed"}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{project.createdAt}</span>
						      </div>
						    </td>
						    <td>
						      <div>
						        <span>{project.version}</span>
						      </div>
						    </td>
						    <td>
						      <div className="action_button">
						        <Link to={project.id} className="edit">
						          <Tabler.TbEdit />
						        </Link>
						        <button className="delete" onClick={() => handleDeleteProject(project.id)}>
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

export default Projects