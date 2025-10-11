import { serverTimestamp } from "firebase/firestore";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig";

export const firestore = getFirestore(firebaseApp);
const servicesCollection = collection(firestore, "services");

// Helper function to create a valid document ID from category name
const createDocId = (categoryName) => {
  return categoryName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

// Helper function to delete empty categories
const deleteEmptyCategory = async (serviceId) => {
  try {
    const serviceRef = doc(firestore, "services", serviceId);
    const serviceSnap = await getDoc(serviceRef);
    
    if (serviceSnap.exists()) {
      const serviceData = serviceSnap.data();
      // If no sublinks or empty sublinks array, delete the category
      if (!serviceData.sublinks || serviceData.sublinks.length === 0) {
        await deleteDoc(serviceRef);
        console.log(`Empty category ${serviceId} deleted automatically`);
        return true; // Category was deleted
      }
    }
    return false; // Category was not deleted
  } catch (error) {
    console.error("Error deleting empty category:", error);
    // Don't throw error here to avoid breaking the main operation
    return false;
  }
};

// ✅ Get all categories (with sublinks)
export const getServices = async () => {
  try {
    const snapshot = await getDocs(servicesCollection);
    return snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
  } catch (error) {
    console.error("Error getting services:", error);
    throw error;
  }
};

// ✅ Add a new category with one sublink (using category name as document ID)
export const addServiceWithSublink = async (categoryName, sublink) => {
  try {
    const docId = createDocId(categoryName);
    const serviceRef = doc(firestore, "services", docId);
    const existingDoc = await getDoc(serviceRef);

    if (existingDoc.exists()) {
      throw new Error(`Category "${categoryName}" already exists`);
    }

    const newService = {
      label: categoryName,
      sublinks: [sublink],
      createdAt: serverTimestamp(), // ⏰ Add this
      updatedAt: serverTimestamp(), // ⏰ Add this
    };

    await setDoc(serviceRef, newService);
    return docId;
  } catch (error) {
    console.error("Error adding service with sublink:", error);
    throw error;
  }
};


// ✅ Add sublink into an existing category
export const addSublink = async (serviceId, sublink) => {
  try {
    const serviceRef = doc(firestore, "services", serviceId);
    const serviceSnap = await getDoc(serviceRef);
    
    if (!serviceSnap.exists()) {
      throw new Error("Service not found");
    }
    
    const serviceData = serviceSnap.data();
    const updatedSublinks = [...(serviceData.sublinks || []), sublink];
    await updateDoc(serviceRef, { sublinks: updatedSublinks, updatedAt: serverTimestamp(),  });
  } catch (error) {
    console.error("Error adding sublink:", error);
    throw error;
  }
};

// ✅ Update a sublink
export const updateSublink = async (serviceId, index, updatedData) => {
  try {
    const serviceRef = doc(firestore, "services", serviceId);
    const serviceSnap = await getDoc(serviceRef);
    
    if (!serviceSnap.exists()) {
      throw new Error("Service not found");
    }
    
    const serviceData = serviceSnap.data();
    const updatedSublinks = [...serviceData.sublinks];
    updatedSublinks[index] = { ...updatedSublinks[index], ...updatedData };
    await updateDoc(serviceRef, { sublinks: updatedSublinks,updatedAt: serverTimestamp(),});
  } catch (error) {
    console.error("Error updating sublink:", error);
    throw error;
  }
};

// ✅ Delete a sublink (with auto-delete empty category)
export const deleteSublink = async (serviceId, index) => {
  try {
    const serviceRef = doc(firestore, "services", serviceId);
    const serviceSnap = await getDoc(serviceRef);
    
    if (!serviceSnap.exists()) {
      throw new Error("Service not found");
    }
    
    const serviceData = serviceSnap.data();
    const updatedSublinks = serviceData.sublinks.filter(
      (_, i) => i !== index
    );
    
    // If no sublinks remain, delete the entire category
    if (updatedSublinks.length === 0) {
      await deleteDoc(serviceRef);
      console.log(`Category ${serviceId} deleted because no sublinks remain`);
      return { categoryDeleted: true };
    } else {
      // Update with remaining sublinks
      await updateDoc(serviceRef, { sublinks: updatedSublinks,updatedAt: serverTimestamp(), });
      return { categoryDeleted: false };
    }
  } catch (error) {
    console.error("Error deleting sublink:", error);
    throw error;
  }
};

// ✅ Check if category name already exists
export const checkCategoryExists = async (categoryName) => {
  try {
    const docId = createDocId(categoryName);
    const serviceRef = doc(firestore, "services", docId);
    const docSnap = await getDoc(serviceRef);
    return docSnap.exists();
  } catch (error) {
    console.error("Error checking category existence:", error);
    throw error;
  }
};

// ✅ Clean up all empty categories (utility function)
export const cleanupEmptyCategories = async () => {
  try {
    const snapshot = await getDocs(servicesCollection);
    const deletePromises = [];
    
    snapshot.docs.forEach((docSnap) => {
      const data = docSnap.data();
      if (!data.sublinks || data.sublinks.length === 0) {
        deletePromises.push(deleteDoc(doc(firestore, "services", docSnap.id)));
      }
    });
    
    await Promise.all(deletePromises);
    console.log(`Cleaned up ${deletePromises.length} empty categories`);
    return deletePromises.length;
  } catch (error) {
    console.error("Error cleaning up empty categories:", error);
    throw error;
  }
};


