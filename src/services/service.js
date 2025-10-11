// import { db } from "./firebaseConfig";
// import { doc, getDoc, updateDoc } from "firebase/firestore";

// // Fetch all services
// export const getAllServices = async () => {
//   const snapshot = await getDocs(collection(db, "services"));
//   return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

// // Delete a sub-service
// export const deleteService = async (categoryId, subSlug) => {
//   try {
//     const categoryRef = doc(db, "services", categoryId);
//     const categorySnap = await getDoc(categoryRef);

//     if (!categorySnap.exists()) {
//       console.log("Category not found!");
//       return;
//     }

//     const categoryData = categorySnap.data();
//     const updatedSublinks = categoryData.sublinks.filter(
//       (sub) => sub.slug !== subSlug
//     );

//     await updateDoc(categoryRef, { sublinks: updatedSublinks });
//     console.log("Sub-service deleted successfully!");
//   } catch (error) {
//     console.error("Error deleting sub-service:", error.message);
//   }
// };