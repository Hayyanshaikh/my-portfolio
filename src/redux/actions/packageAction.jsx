import {
  fetchPackagesStart,
  fetchPackagesSuccess,
  fetchPackagesFailure,
  addPackageStart,
  addPackageSuccess,
  addPackageFailure,
  deletePackageStart,
  deletePackageSuccess,
  deletePackageFailure,
  updatePackageStart,
  updatePackageSuccess,
  updatePackageFailure,
} from '../slices/packageSlice.jsx';
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


// async fetch package data from firebase firestore
export const fetchPackages = () => async (dispatch) => {
  try {
    dispatch(fetchPackagesStart());
    const packages = [];
    await database.collection("packages").orderBy("createdAt", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const packageData = doc.data();
        // Convert Firestore timestamp to string
        packageData.createdAt = packageData.createdAt;
        packages.push({ id: doc.id, ...packageData });
      });
    });
    dispatch(fetchPackagesSuccess(packages));
  } catch (error) {
    dispatch(fetchPackagesFailure(error.message));
  }
}


// async add package data to firebase firestore
export const addPackage = (packageData) => async (dispatch) => {
  try {
    dispatch(addPackageStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    packageData.createdAt = formattedDate;

    const docRef = await database.collection("packages").add(packageData);
    const addedPackage = { id: docRef.id, ...packageData };
    dispatch(addPackageSuccess(addedPackage));
  } catch (error) {
    dispatch(addPackageFailure(error.message));
  }
}

// async delete package data from firebase firestore
export const deletePackage = (packageId) => async (dispatch) => {
  try {
    dispatch(deletePackageStart());
    await database.collection("packages").doc(packageId).delete();
    dispatch(deletePackageSuccess(packageId));
  } catch (error) {
    dispatch(deletePackageFailure(error.message));
  }
}

// async update package data to firebase firestore
export const updatePackage = (packageId, updatedPackageData) => async (dispatch) => {
  try {
    dispatch(updatePackageStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    updatedPackageData.createdAt = formattedDate;

    await database.collection("packages").doc(packageId).update(updatedPackageData);
    
    const updatedPackage = { id: packageId, ...updatedPackageData };
    dispatch(updatePackageSuccess(updatedPackage));
  } catch (error) {
    dispatch(updatePackageFailure(error.message));
  }
}