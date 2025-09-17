import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Check if user is authenticated and has valid credentials
  const isAuthenticated = localStorage.getItem("irth-auth") === "true";
  const isValidated = localStorage.getItem("irth-validated") === "true";
  const userData = JSON.parse(localStorage.getItem("irth-user") || "{}");
  
  // Valid credentials for verification
  const VALID_CREDENTIALS = {
    email: "admin@irthadvisors.com",
    password: "irth2024"
  };

  // Check if user has valid credentials
  const hasValidCredentials = userData.email === VALID_CREDENTIALS.email && 
                             userData.password === VALID_CREDENTIALS.password;

  // Check if login is not too old (24 hours)
  const loginTime = userData.loginTime;
  const isLoginValid = loginTime && (Date.now() - loginTime) < (24 * 60 * 60 * 1000);

  if (!isAuthenticated || !isValidated || !hasValidCredentials || !isLoginValid) {
    // Clear invalid authentication data
    localStorage.removeItem("irth-auth");
    localStorage.removeItem("irth-validated");
    localStorage.removeItem("irth-user");
    return <Navigate to="/login" replace />;
  }

  return children;
}
