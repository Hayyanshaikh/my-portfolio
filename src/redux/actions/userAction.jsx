import { database } from '../../firebase/firebaseUtils.js';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../slices/userSlice.jsx';

// get user detail async
export const getUserAsync = () => async (dispatch) => {
  try {
    dispatch(fetchUserStart()); // Start fetching user data
    const users = [];
    await database.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        users.push({id: doc.id, ...doc.data() });
      });
    });
    dispatch(fetchUserSuccess(users)); // Fetching user data successful
  } catch (error) {
    console.error(error);
    dispatch(fetchUserFailure(error.message)); // Fetching user data failed
  }
}

// Update user detail async
export const updateUserAsync = (id, userData) => async (dispatch) => {
  try {
    dispatch(fetchUserStart()); // Start updating user data
    const users = [];
    await database.collection("users").doc(id).update(userData);
    const updatedUserData = await database.collection("users").doc(id).get();
    dispatch(fetchUserSuccess([{ id: updatedUserData.id, ...updatedUserData.data() }])); // Updating user data successful
  } catch (error) {
    console.error(error);
    dispatch(fetchUserFailure(error.message)); // Updating user data failed
  }
}
