// services/training.js
import { 
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig";

const firestore = getFirestore(firebaseApp);
const trainingsCollection = collection(firestore, "trainings");

// Helper: create docId from title (for Firestore document ID)
const createDocId = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/-+/g, "-") // multiple hyphens → single
    .replace(/^-|-$/g, ""); // trim hyphens
};

// Helper: create slug from title (for frontend routing)
const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/-+/g, "-") // multiple hyphens → single
    .replace(/^-|-$/g, ""); // trim hyphens
};

// Normalize createdAt for old docs
const normalizeCreatedAt = (data) => {
  if (!data.createdAt) return { seconds: 0, nanoseconds: 0 }; // fallback
  return data.createdAt;
};

// ✅ Get all trainings (sorted newest → oldest)
export const getTrainings = async () => {
  const snapshot = await getDocs(trainingsCollection);
  return snapshot.docs
    .map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: normalizeCreatedAt(data),
      };
    })
    .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
};

// ✅ Delete training
export const deleteTraining = async (id) => {
  const docRef = doc(firestore, "trainings", id);
  await deleteDoc(docRef);
};

// ✅ Update existing training (with updatedAt)
export const updateTraining = async (id, data) => {
  const docRef = doc(firestore, "trainings", id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(), // track edits
  });
};

// ✅ Add a new training (with slug and createdAt)
export const addTraining = async (data) => {
  if (!data.title) throw new Error("Training title is required");

  const docId = createDocId(data.title); // doc ID
  const docRef = doc(firestore, "trainings", docId);

  const existing = await getDoc(docRef);
  if (existing.exists()) {
    throw new Error(`Training "${data.title}" already exists`);
  }

  // Generate slug automatically
  const slug = createSlug(data.title);

  await setDoc(docRef, {
    ...data,
    slug,             // ✅ store slug for frontend
    createdAt: serverTimestamp(), // timestamp
  });

  return docId;
};
