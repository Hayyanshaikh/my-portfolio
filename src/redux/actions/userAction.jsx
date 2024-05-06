import { database } from '../../firebase/firebaseUtils.js';
import { setUserSlice,  } from '../slices/userSlice.jsx';

// get user detail async
export const getUserAsync = () => async (dispatch) => {
  try {
    const users = [];
    await database.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        users.push({id: doc.id, ...doc.data() });
      });
    });
    dispatch(setUserSlice(users));
  } catch (error) {
    console.error(error);
  }
}

// Update user detail async
export const updateUserAsync = (id, userData) => async (dispatch) => {
  try {
    const users = [];
    await database.collection("users").doc(id).update(userData);
    const updatedUserData = await database.collection("users").doc(id).get();
    dispatch(setUserSlice([{ id: updatedUserData.id, ...updatedUserData.data() }]));
  } catch (error) {
    console.error(error);
  }
}