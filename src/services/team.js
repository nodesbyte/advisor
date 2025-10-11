import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig";

const firestore = getFirestore(firebaseApp);
const teamCollection = collection(firestore, "team");

// ✅ Normalize createdAt for old docs
const normalizeCreatedAt = (data) => {
  if (!data.createdAt) return { seconds: 0, nanoseconds: 0 }; // fallback
  return data.createdAt;
};

// ✅ Get all team members (sorted newest → oldest)
export const getTeam = async () => {
  const snapshot = await getDocs(teamCollection);
  return snapshot.docs
    .map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: normalizeCreatedAt(data),
      };
    })
    .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds); // manual sort
};

// ✅ Add a new team member (with createdAt)
export const addTeamMember = async (data) => {
  const docRef = doc(teamCollection); // auto-generate ID
  await setDoc(docRef, {
    ...data,
    createdAt: serverTimestamp(), // add timestamp
  });
};

// ✅ Update existing member
export const updateTeamMember = async (id, data) => {
  const docRef = doc(teamCollection, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(), // optional updatedAt
  });
};

// ✅ Delete member
export const deleteTeamMember = async (id) => {
  const docRef = doc(teamCollection, id);
  await deleteDoc(docRef);
};
