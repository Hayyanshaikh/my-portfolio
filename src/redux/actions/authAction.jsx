import { auth } from '../../firebase/firebaseUtils.js';
import { fetchUserSuccess } from '../slices/userSlice.jsx';
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


    dispatch(fetchUserSuccess(serializedUser));
    dispatch(setUser(serializedUser));
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

// Async action to check sign-in status
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
        dispatch(fetchUserSuccess(serializedUser));
        dispatch(setUser(serializedUser));
      } else {
        dispatch(clearUser());
      }
    });
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Async action to handle forgot password
export const forgotPasswordAsync = (email) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await auth.sendPasswordResetEmail(email);
    // Password reset email sent successfully
  } catch (error) {
    dispatch(setError(error.message));
  }
};
