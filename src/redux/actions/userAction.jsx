import { database } from '../../firebase/firebaseUtils.js';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../slices/userSlice.jsx';

export const getUserAsync = () => async (dispatch) => {
  try {
    dispatch(fetchUserStart());
    const users = [];
    await database.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        users.push({id: doc.id, ...doc.data() });
      });
    });
    dispatch(fetchUserSuccess(users));
  } catch (error) {
    console.error(error);
    dispatch(fetchUserFailure(error.message));
  }
}

export const updateUserAsync = (id, userData) => async (dispatch) => {
  try {
    dispatch(fetchUserStart());
    await database.collection("users").doc(id).update(userData);
    const updatedUserData = await database.collection("users").doc(id).get();
    dispatch(fetchUserSuccess([{ id: updatedUserData.id, ...updatedUserData.data() }]));
  } catch (error) {
    console.error(error);
    dispatch(fetchUserFailure(error.message));
  }
}
