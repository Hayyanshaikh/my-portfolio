import {
  fetchPricesStart,
  fetchPricesSuccess,
  fetchPricesFailure,
  addPriceStart,
  addPriceSuccess,
  addPriceFailure,
  deletePriceStart,
  deletePriceSuccess,
  deletePriceFailure,
  updatePriceStart,
  updatePriceSuccess,
  updatePriceFailure,
} from '../slices/priceSlice.jsx';
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


// async fetch price data from firebase firestore
export const fetchPrices = () => async (dispatch) => {
  try {
    dispatch(fetchPricesStart());
    const prices = [];
    await database.collection("prices").orderBy("createdAt", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const priceData = doc.data();
        // Convert Firestore timestamp to string
        priceData.createdAt = priceData.createdAt;
        prices.push({ id: doc.id, ...priceData });
      });
    });
    dispatch(fetchPricesSuccess(prices));
  } catch (error) {
    dispatch(fetchPricesFailure(error.message));
  }
}


// async add price data to firebase firestore
export const addPrice = (priceData) => async (dispatch) => {
  try {
    dispatch(addPriceStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    priceData.createdAt = formattedDate;

    const docRef = await database.collection("prices").add(priceData);
    const addedPrice = { id: docRef.id, ...priceData };
    dispatch(addPriceSuccess(addedPrice));
  } catch (error) {
    dispatch(addPriceFailure(error.message));
  }
}

// async delete price data from firebase firestore
export const deletePrice = (priceId) => async (dispatch) => {
  try {
    dispatch(deletePriceStart());
    await database.collection("prices").doc(priceId).delete();
    dispatch(deletePriceSuccess(priceId));
  } catch (error) {
    dispatch(deletePriceFailure(error.message));
  }
}

// async update price data to firebase firestore
export const updatePrice = (priceId, updatedPriceData) => async (dispatch) => {
  try {
    dispatch(updatePriceStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    updatedPriceData.createdAt = formattedDate;

    await database.collection("prices").doc(priceId).update(updatedPriceData);
    
    const updatedPrice = { id: priceId, ...updatedPriceData };
    dispatch(updatePriceSuccess(updatedPrice));
  } catch (error) {
    dispatch(updatePriceFailure(error.message));
  }
}