import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner"; // ✅ import spinner

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // ✅ Show spinner instead of plain text
    return <LoadingSpinner isVisible={true} message="Checking authentication..." />;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
