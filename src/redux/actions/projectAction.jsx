import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  addProjectStart,
  addProjectSuccess,
  addProjectFailure,
  deleteProjectStart,
  deleteProjectSuccess,
  deleteProjectFailure,
  updateProjectStart,
  updateProjectSuccess,
  updateProjectFailure,
} from '../slices/projectSlice.jsx';
import { database, storage } from '../../firebase/firebaseUtils.js';

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// async fetch project data from firebase firestore
export const fetchProjects = () => async (dispatch) => {
  try {
    dispatch(fetchProjectsStart());
    const projects = [];
    await database.collection("projects").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const projectData = doc.data();
        // Convert Firestore timestamp to string
        projectData.createdAt = projectData.createdAt;
        projects.push({ id: doc.id, ...projectData });
      });
    });
    dispatch(fetchProjectsSuccess(projects));
  } catch (error) {
    dispatch(fetchProjectsFailure(error.message));
  }
}

// async add project data to firebase firestore
export const addProject = (projectData) => async (dispatch) => {
  try {
    dispatch(addProjectStart());


    const today = new Date();
    const formattedDate = formatDate(today);

    projectData.createdAt = formattedDate;

    const docRef = await database.collection("projects").add(projectData);
    const addedProject = { id: docRef.id, ...projectData };
    dispatch(addProjectSuccess(addedProject));
  } catch (error) {
    dispatch(addProjectFailure(error.message));
  }
}

// async delete project data to firebase firestore
export const deleteProject = (projectId) => async (dispatch) => {
  try {
    dispatch(deleteProjectStart());
    await database.collection("projects").doc(projectId).delete();
    dispatch(deleteProjectSuccess(projects));
  } catch (error) {
    dispatch(deleteProjectFailure(error.message));
  }
}

// async update project data to firebase firestore
export const updateProject = (projectId, updatedProjectData) => async (dispatch) => {
  try {
    dispatch(updateProjectStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    updatedProjectData.createdAt = formattedDate;

    await database.collection("projects").doc(projectId).update(updatedProjectData);
    
    const updatedProject = { id: projectId, ...updatedProjectData };
    dispatch(updateProjectSuccess(updatedProject));
  } catch (error) {
    dispatch(updateProjectFailure(error.message));
  }
}
