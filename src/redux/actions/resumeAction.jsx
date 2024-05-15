import {
  fetchResumesStart,
  fetchResumesSuccess,
  fetchResumesFailure,
  addResumeStart,
  addResumeSuccess,
  addResumeFailure,
  deleteResumeStart,
  deleteResumeSuccess,
  deleteResumeFailure,
  updateResumeStart,
  updateResumeSuccess,
  updateResumeFailure,
} from '../slices/resumeSlice.jsx';
import { database } from '../../firebase/firebaseUtils.js';

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


// async fetch resume data from firebase firestore
export const fetchResumes = () => async (dispatch) => {
  try {
    dispatch(fetchResumesStart());
    const resumes = [];
    await database.collection("resumes").orderBy("createdAt", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const resumeData = doc.data();
        // Convert Firestore timestamp to string
        resumeData.createdAt = resumeData.createdAt;
        resumes.push({ id: doc.id, ...resumeData });
      });
    });
    dispatch(fetchResumesSuccess(resumes));
  } catch (error) {
    dispatch(fetchResumesFailure(error.message));
  }
}


// async add resume data to firebase firestore
export const addResume = (resumeData) => async (dispatch) => {
  try {
    dispatch(addResumeStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    resumeData.createdAt = formattedDate;

    const docRef = await database.collection("resumes").add(resumeData);
    const addedResume = { id: docRef.id, ...resumeData };
    dispatch(addResumeSuccess(addedResume));
  } catch (error) {
    dispatch(addResumeFailure(error.message));
  }
}

// async delete resume data from firebase firestore
export const deleteResume = (resumeId) => async (dispatch) => {
  try {
    dispatch(deleteResumeStart());
    await database.collection("resumes").doc(resumeId).delete();
    dispatch(deleteResumeSuccess(resumeId));
  } catch (error) {
    dispatch(deleteResumeFailure(error.message));
  }
}

// async update resume data to firebase firestore
export const updateResume = (resumeId, updatedResumeData) => async (dispatch) => {
  try {
    dispatch(updateResumeStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    updatedResumeData.createdAt = formattedDate;

    await database.collection("resumes").doc(resumeId).update(updatedResumeData);
    
    const updatedResume = { id: resumeId, ...updatedResumeData };
    dispatch(updateResumeSuccess(updatedResume));
  } catch (error) {
    dispatch(updateResumeFailure(error.message));
  }
}