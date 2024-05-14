import {
  fetchSkillsStart,
  fetchSkillsSuccess,
  fetchSkillsFailure,
  addSkillStart,
  addSkillSuccess,
  addSkillFailure,
  deleteSkillStart,
  deleteSkillSuccess,
  deleteSkillFailure,
  updateSkillStart,
  updateSkillSuccess,
  updateSkillFailure,
} from '../slices/skillSlice.jsx';
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


// async fetch skill data from firebase firestore
export const fetchSkills = () => async (dispatch) => {
  try {
    dispatch(fetchSkillsStart());
    const skills = [];
    await database.collection("skills").orderBy("createdAt", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const skillData = doc.data();
        // Convert Firestore timestamp to string
        skillData.createdAt = skillData.createdAt;
        skills.push({ id: doc.id, ...skillData });
      });
    });
    dispatch(fetchSkillsSuccess(skills));
  } catch (error) {
    dispatch(fetchSkillsFailure(error.message));
  }
}


// async add skill data to firebase firestore
export const addSkill = (skillData) => async (dispatch) => {
  try {
    dispatch(addSkillStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    skillData.createdAt = formattedDate;

    const docRef = await database.collection("skills").add(skillData);
    const addedSkill = { id: docRef.id, ...skillData };
    dispatch(addSkillSuccess(addedSkill));
  } catch (error) {
    dispatch(addSkillFailure(error.message));
  }
}

// async delete skill data from firebase firestore
export const deleteSkill = (skillId) => async (dispatch) => {
  try {
    dispatch(deleteSkillStart());
    await database.collection("skills").doc(skillId).delete();
    dispatch(deleteSkillSuccess(skillId));
  } catch (error) {
    dispatch(deleteSkillFailure(error.message));
  }
}

// async update skill data to firebase firestore
export const updateSkill = (skillId, updatedSkillData) => async (dispatch) => {
  try {
    dispatch(updateSkillStart());

    const today = new Date();
    const formattedDate = formatDate(today);

    updatedSkillData.createdAt = formattedDate;

    await database.collection("skills").doc(skillId).update(updatedSkillData);
    
    const updatedSkill = { id: skillId, ...updatedSkillData };
    dispatch(updateSkillSuccess(updatedSkill));
  } catch (error) {
    dispatch(updateSkillFailure(error.message));
  }
}