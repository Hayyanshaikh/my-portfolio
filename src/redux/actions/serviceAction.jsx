import {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
  addServiceStart,
  addServiceSuccess,
  addServiceFailure,
  deleteServiceStart,
  deleteServiceSuccess,
  deleteServiceFailure,
  updateServiceStart,
  updateServiceSuccess,
  updateServiceFailure,
} from '../slices/serviceSlice.jsx';
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


// async fetch service data from firebase firestore
export const fetchServices = () => async (dispatch) => {
  try {
    dispatch(fetchServicesStart());
    const services = [];
    await database.collection("services").orderBy("createdAt", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const serviceData = doc.data();
        // Convert Firestore timestamp to string
        serviceData.createdAt = serviceData.createdAt;
        services.push({ id: doc.id, ...serviceData });
      });
    });
    dispatch(fetchServicesSuccess(services));
  } catch (error) {
    dispatch(fetchServicesFailure(error.message));
  }
}


// async add service data to firebase firestore
export const addService = (serviceData) => async (dispatch) => {
  try {
    dispatch(addServiceStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    serviceData.createdAt = formattedDate;

    const docRef = await database.collection("services").add(serviceData);
    const addedService = { id: docRef.id, ...serviceData };
    dispatch(addServiceSuccess(addedService));
  } catch (error) {
    dispatch(addServiceFailure(error.message));
  }
}

// async delete service data from firebase firestore
export const deleteService = (serviceId) => async (dispatch) => {
  try {
    dispatch(deleteServiceStart());
    await database.collection("services").doc(serviceId).delete();
    dispatch(deleteServiceSuccess(serviceId));
  } catch (error) {
    dispatch(deleteServiceFailure(error.message));
  }
}

// async update service data to firebase firestore
export const updateService = (serviceId, updatedServiceData) => async (dispatch) => {
  try {
    dispatch(updateServiceStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    updatedServiceData.createdAt = formattedDate;

    await database.collection("services").doc(serviceId).update(updatedServiceData);
    
    const updatedService = { id: serviceId, ...updatedServiceData };
    dispatch(updateServiceSuccess(updatedService));
  } catch (error) {
    dispatch(updateServiceFailure(error.message));
  }
}