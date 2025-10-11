// src/context/firebase.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { subscribeToAuth, logoutUser } from "../services/auth";

const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuth((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider value={{ user, loading, logout: logoutUser }}>
      {children}
    </FirebaseContext.Provider>
  );
}

// Custom hook to use Firebase context anywhere
export function useFirebase() {
  return useContext(FirebaseContext);
}
