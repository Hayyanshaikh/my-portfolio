import { database } from '../../firebase/firebaseUtils.js';
import { fetchSettingStart, fetchSettingSuccess, fetchSettingFailure } from '../slices/settingSlice.jsx';

export const getSettingsAsync = () => async (dispatch) => {
  try {
    dispatch(fetchSettingStart());
    const settings = [];
    await database.collection("settings").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        settings.push({id: doc.id, ...doc.data() });
      });
    });
    dispatch(fetchSettingSuccess(settings));
  } catch (error) {
    console.error(error);
    dispatch(fetchSettingFailure(error.message));
  }
}

export const updateSettingsAsync = (id, settingData) => async (dispatch) => {
  try {
    dispatch(fetchSettingStart());
    await database.collection("settings").doc(id).update(settingData);
    const updatedSettingData = await database.collection("settings").doc(id).get();
    dispatch(fetchSettingSuccess([{ id: updatedSettingData.id, ...updatedSettingData.data() }]));
  } catch (error) {
    console.error(error);
    dispatch(fetchSettingFailure(error.message));
  }
}
