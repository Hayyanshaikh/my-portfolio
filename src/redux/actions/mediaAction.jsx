import {
  uploadMediaStart,
  uploadMediaSuccess,
  uploadMediaFailure,
  deleteMediaStart,
  deleteMediaSuccess,
  deleteMediaFailure,
  getMediaStart,
  getMediaSuccess,
  getMediaFailure
} from '../slices/mediaSlice.jsx';
import { storage, database } from '../../firebase/firebaseUtils.js';

export const getMedia = () => async (dispatch) => {
  try {
    dispatch(getMediaStart());

    const mediaRef = database.collection('media');

    const images = [];

    await mediaRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        images.push({
          id: doc.id,
          ...data,
          uploadedAt: data.uploadedAt.toMillis(), // Convert Timestamp to milliseconds
        });
      });
    });

    dispatch(getMediaSuccess(images));
  } catch (error) {
    console.error(error);
    dispatch(getMediaFailure(error.message));
  }
}

export const uploadMedia = (file) => async (dispatch) => {
  try {
    dispatch(uploadMediaStart());

    const storageRef = storage.ref();
    const imagesRef = storageRef.child('images/');

    const fileRef = imagesRef.child(file.name);

    const snapshot = await fileRef.put(file);

    const downloadURL = await snapshot.ref.getDownloadURL();

    const mediaData = {
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      imageUrl: downloadURL,
      uploadedAt: new Date(),
      storagePath: snapshot.ref.fullPath,
    }

    const mediaDocRef = await database.collection('media').add(mediaData);
    dispatch(uploadMediaSuccess(mediaData));
  } catch (error) {
    console.error(error);
    dispatch(uploadMediaFailure(error.message));
  }
}

export const deleteFile = (fileId) => async (dispatch) => {
  try {
    dispatch(deleteMediaStart());

    const docRef = await database.collection('media').doc(fileId).get();
    const fileData = docRef.data();

    if (!fileData) {
      throw new Error('File not found');
    }

    // Get a reference to the file in Firebase Storage using the storagePath from fileData
    const storageRef = storage.ref();
    const fileRef = storageRef.child(fileData.storagePath);

    // Delete the file from Firebase Storage
    await fileRef.delete();

    // Delete the file data from Firebase Firestore
    await docRef.ref.delete();
    
    dispatch(deleteMediaSuccess());
  } catch (err) {
    dispatch(deleteMediaFailure());
    console.error(err);
  }
}