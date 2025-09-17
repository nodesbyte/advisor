// Firebase configuration for IRTH Advisors Admin Dashboard
// Note: Replace with your actual Firebase config

// Mock Firebase API for development
export const firebaseApi = {
  // Mock collection reference
  colRef: (collectionName) => ({
    firestore: {},
    collectionName
  }),

  // Mock document reference
  doc: (firestore, collection, id) => ({
    id,
    collection,
    firestore
  }),

  // Mock onSnapshot listener
  onSnapshot: (collectionRef, onNext, onError) => {
    // Mock data for development
    const mockData = [
      { id: '1', title: 'Sample Service 1', status: 'active', createdAt: Date.now() },
      { id: '2', title: 'Sample Service 2', status: 'active', createdAt: Date.now() },
      { id: '3', title: 'Sample Training 1', status: 'active', createdAt: Date.now() }
    ];

    // Simulate async data loading
    setTimeout(() => {
      const mockSnapshot = {
        forEach: (callback) => {
          mockData.forEach(doc => {
            callback({
              id: doc.id,
              data: () => doc
            });
          });
        }
      };
      onNext(mockSnapshot);
    }, 500);

    // Return unsubscribe function
    return () => console.log('Unsubscribed from', collectionRef.collectionName);
  },

  // Mock addDoc
  addDoc: async (collectionRef, data) => {
    console.log('Adding document to', collectionRef.collectionName, data);
    return { id: Date.now().toString() };
  },

  // Mock updateDoc
  updateDoc: async (docRef, data) => {
    console.log('Updating document', docRef.id, data);
  },

  // Mock deleteDoc
  deleteDoc: async (docRef) => {
    console.log('Deleting document', docRef.id);
  }
};

// TODO: Replace with actual Firebase configuration
/*
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
*/
