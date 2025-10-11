import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  verifyBeforeUpdateEmail, // 👈 NEW: For email verification
} from "firebase/auth";
import { auth } from "./firebaseConfig";

// Create admin (use only once or for dev)
export async function signupUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    throw err;
  }
}

// Sign in
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    throw err;
  }
}

// 🔐 Forgot Password
export async function resetPassword(email) {
  try {
    console.log("🔄 Sending password reset to:", email);
    
    await sendPasswordResetEmail(auth, email);
    
    console.log("✅ Password reset email sent successfully!");
    console.log("📧 Check your inbox AND spam folder");
    
    return true;
  } catch (err) {
    console.error("❌ Firebase Error Code:", err.code);
    console.error("❌ Firebase Error Message:", err.message);
    throw err;
  }
}

// Sign out
export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (err) {
    throw err;
  }
}

// Subscribe to auth state (used in context)
export function subscribeToAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

// 🔐 Reauthenticate User
export async function reauthenticateUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Password verified successfully!");
    return true;
  } catch (err) {
    console.error("❌ Reauthentication failed:", err.message);
    throw new Error("Incorrect password. Please try again.");
  }
}

// 📧 Update User Email with Verification
export async function updateUserEmail(newEmail) {
  try {
    if (!auth.currentUser) throw new Error("No user logged in.");
    
    // Use verifyBeforeUpdateEmail instead of updateEmail
    // This sends a verification link to the new email before updating
    await verifyBeforeUpdateEmail(auth.currentUser, newEmail);
    
    console.log("✅ Verification email sent to:", newEmail);
    return true;
  } catch (err) {
    console.error("❌ Email update failed:", err.message);
    
    // Handle specific error cases
    if (err.code === "auth/operation-not-allowed") {
      throw new Error("Email verification is required. Please check your Firebase settings.");
    } else if (err.code === "auth/email-already-in-use") {
      throw new Error("This email is already in use by another account.");
    } else if (err.code === "auth/invalid-email") {
      throw new Error("Invalid email format.");
    } else if (err.code === "auth/requires-recent-login") {
      throw new Error("Please log out and log back in before changing your email.");
    }
    
    throw err;
  }
}

// 📧 Alternative: Direct email update (without verification)
// Use this only if you've disabled email verification in Firebase Console
export async function updateUserEmailDirect(newEmail) {
  try {
    if (!auth.currentUser) throw new Error("No user logged in.");
    
    await updateEmail(auth.currentUser, newEmail);
    
    console.log("✅ Email updated to:", newEmail);
    return true;
  } catch (err) {
    console.error("❌ Direct email update failed:", err.message);
    throw err;
  }
}