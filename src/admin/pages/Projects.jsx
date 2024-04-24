import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import useTitle from '../../hooks/useTitle.jsx';
import Checkbox from '../components/Checkbox.jsx';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';
import Input from '../../website/components/Input.jsx';

const Projects = () => {
  useTitle("Admin all Projects");
	
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
			    			<Checkbox/>
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
				      	<button>
				      		<Tabler.TbSelector/>
				      	</button>
			      	</div>
			      </th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			    	<td>
			    		<div>
			    			<Checkbox/>
			    		</div>
			    	</td>
			      <td>
			      	<div>
			      		<figure>
			      			<img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt=""/>
			      		</figure>
			      		<span>Project A</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>This is a brief description of Project A.</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>In Progress</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>2024-04-01</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>2024-05-31</span>
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
			    <tr>
			    	<td>
			    		
			    		<div>
			    			<Checkbox/>
			    		</div>
			    	</td>
			      <td>
			      	<div>
			      		<figure>
			      			<img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt=""/>
			      		</figure>
			      		<span>Project B</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>This is a brief description of Project B.</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>In Progress</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>2024-04-01</span>
			      	</div>
			      </td>
			      <td>
			      	<div>
			      		<span>2024-05-31</span>
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
			  </tbody>
			</table>
		</>
	)
}

export default Projects