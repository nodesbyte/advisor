// src/services/insights.js
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig";

const firestore = getFirestore(firebaseApp);
const insightsCollection = collection(firestore, "insights");

// helper to create slug (stores in doc but doc id remains auto)
const createSlug = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

// ✅ Normalize createdAt for old docs
const normalizeCreatedAt = (data) => {
  if (!data.createdAt) return { seconds: 0, nanoseconds: 0 };
  return data.createdAt;
};

// ✅ Get all insights
export const getInsights = async () => {
  const snapshot = await getDocs(insightsCollection);
  return snapshot.docs
    .map((docSnap) => {
      const d = docSnap.data();
      return {
        id: docSnap.id,
        title: d.title || "",
        time: d.time || "",
        category: d.category || "",
        label: d.label || "",
        slug: d.slug || createSlug(d.title || ""),
        image: d.image || "",
        pdfs: d.pdfs || [], // ✅ include PDFs
        content: d.content || d.description || "",
        link: d.link || "",
        reference: d.reference || "",
        createdAt: normalizeCreatedAt(d),
      };
    })
    .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
};

// ✅ Add new insight
export const addInsight = async (data) => {
  const payload = {
    ...data,
    slug: data.slug || (data.title ? createSlug(data.title) : ""),
    createdAt: serverTimestamp(),
  };

  Object.keys(payload).forEach(
    (k) => payload[k] === undefined && delete payload[k]
  );

  const ref = await addDoc(insightsCollection, payload);
  return ref.id;
};

// ✅ Update insight
export const updateInsight = async (id, data) => {
  const docRef = doc(firestore, "insights", id);
  const payload = {
    ...data,
    updatedAt: serverTimestamp(),
  };

  if (payload.title && !payload.slug) payload.slug = createSlug(payload.title);

  Object.keys(payload).forEach(
    (k) => payload[k] === undefined && delete payload[k]
  );

  await updateDoc(docRef, payload);
  return id;
};

// ✅ Delete insight
export const deleteInsight = async (id) => {
  const docRef = doc(firestore, "insights", id);
  await deleteDoc(docRef);
  return id;
};
