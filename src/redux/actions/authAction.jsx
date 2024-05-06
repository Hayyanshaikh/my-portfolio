import { auth } from '../../firebase/firebaseUtils.js';
import { setUserSlice } from '../slices/userSlice.jsx';
import { setUser, setError, clearUser, setLoading } from '../slices/authSlice.jsx';

// Async action to sign in
export const signInAsync = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    const serializedUser = {
      uid: user.uid,
      email: user.email,
    };

    dispatch(setUserSlice(serializedUser));
    dispatch(setUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Async action to sign out
export const signOutAsync = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    await auth.signOut();
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Async action to check signin status
export const checkSignInStatusAsync = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    // Use async/await to wait for onAuthStateChanged response
    await auth.onAuthStateChanged((user) => {
      if (user) {
        const serializedUser = {
          uid: user.uid,
          email: user.email,
        };
        dispatch(setUserSlice(serializedUser));
        dispatch(setUser());
      } else {
        dispatch(clearUser());
      }
    });
  } catch (error) {
    dispatch(setError(error.message));
  }
};
