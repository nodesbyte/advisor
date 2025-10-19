// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";
// Layouts
import Clientlayout from "./layouts/Clientlayout";
import Adminlayout from "./layouts/Adminlayout";

// Client Pages
import Home from "./pages/client/Home";
import About from "./pages/client/About";
import Contact from "./pages/client/Contact";
import TeamPage from "./pages/client/TeamPage";
import ServicesPage from "./pages/client/ServicesPage";
import ServiceDetail from "./pages/client/ServiceDetail";
import TrainingPage from "./pages/client/TrainingPage";
import TrainingDetail from "./pages/client/TrainingDetail";
import Insights from "./pages/client/Insights";
import InsightDetailPage from "./pages/client/InsightDetailPage";
import Events from "./pages/client/Events";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Overview";
import Training from "./pages/admin/Training";
import Services from "./pages/admin/Services";
import Team from "./pages/admin/Team";
import Insightdata from "./pages/admin/Insights";
import Setting from "./pages/admin/Setting";
import ForgotPassword from "./pages/admin/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Client Routes */}
        <Route element={<Clientlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/trainings" element={<TrainingPage />} />
          <Route path="/trainings/:slug" element={<TrainingDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insight/:slug" element={<InsightDetailPage />} />
          <Route path="/featured" element={<Insights />} />
          <Route path="/events" element={<Events />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route element={<Adminlayout />}>
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/training"
            element={
              <ProtectedRoute>
                <Training />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/team"
            element={
              <ProtectedRoute>
                <Team />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/insights"
            element={
              <ProtectedRoute>
                <Insightdata />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
