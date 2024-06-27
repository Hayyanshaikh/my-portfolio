import {
  fetchTestimonialStart,
  fetchTestimonialSuccess,
  fetchTestimonialFailure,
  addTestimonialStart,
  addTestimonialSuccess,
  addTestimonialFailure,
  deleteTestimonialStart,
  deleteTestimonialSuccess,
  deleteTestimonialFailure,
  updateTestimonialStart,
  updateTestimonialSuccess,
  updateTestimonialFailure,
} from '../slices/testimonialSlice.jsx';
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


// async fetch testimonial data from firebase firestore
export const fetchTestimonials = () => async (dispatch) => {
  try {
    dispatch(fetchTestimonialStart());
    const testimonials = [];
    await database.collection("testimonials").orderBy("createdAt", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const testimonialData = doc.data();
        // Convert Firestore timestamp to string
        testimonialData.createdAt = testimonialData.createdAt;
        testimonials.push({ id: doc.id, ...testimonialData });
      });
    });
    dispatch(fetchTestimonialSuccess(testimonials));
  } catch (error) {
    dispatch(fetchTestimonialFailure(error.message));
  }
}


// async add testimonial data to firebase firestore
export const addTestimonial = (testimonialData) => async (dispatch) => {
  try {
    dispatch(addTestimonialStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    testimonialData.createdAt = formattedDate;

    const docRef = await database.collection("testimonials").add(testimonialData);
    const addedTestimonial = { id: docRef.id, ...testimonialData };
    dispatch(addTestimonialSuccess(addedTestimonial));
  } catch (error) {
    dispatch(addTestimonialFailure(error.message));
  }
}

// async delete testimonial data from firebase firestore
export const deleteTestimonial = (testimonialId) => async (dispatch) => {
  try {
    dispatch(deleteTestimonialStart());
    await database.collection("testimonials").doc(testimonialId).delete();
    dispatch(deleteTestimonialSuccess(testimonialId));
  } catch (error) {
    dispatch(deleteTestimonialFailure(error.message));
  }
}

// async update testimonial data to firebase firestore
export const updateTestimonial = (testimonialId, updatedTestimonialData) => async (dispatch) => {
  try {
    dispatch(updateTestimonialStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    updatedTestimonialData.createdAt = formattedDate;

    await database.collection("testimonials").doc(testimonialId).update(updatedTestimonialData);
    
    const updatedTestimonial = { id: testimonialId, ...updatedTestimonialData };
    dispatch(updateTestimonialSuccess(updatedTestimonial));
  } catch (error) {
    dispatch(updateTestimonialFailure(error.message));
  }
}