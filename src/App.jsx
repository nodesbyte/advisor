import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline
} from "@mui/material";

// Layout Components
import Navbar from "./components/client/Navbar";
import Footer from "./components/client/Footer";
import ScrollToTop from "./components/client/ScrollToTop";
import WhatsAppButton from "./components/client/WhatsAppButton";

// Admin Components
import Sidebar from "./components/admin/Sidebar";
import Header from "./components/admin/Header";
import ProtectedRoute from "./components/admin/ProtectedRoute";

// Client Pages
import Home from "./pages/client/Home";
import About from "./pages/client/About";
import Contact from "./pages/client/Contact";
import Insights from "./pages/client/Insights";
import InsightDetailPage from "./pages/client/InsightDetailPage";
import ServiceDetail from "./pages/client/ServiceDetail";
import ServicesPage from "./pages/client/ServicesPage";
import TeamPage from "./pages/client/TeamPage";
import TrainingDetail from "./pages/client/TrainingDetail";
import TrainingPage from "./pages/client/TrainingPage";
import Events from "./pages/client/Events";

// Admin Pages
import Login from "./pages/admin/Login";
import Overview from "./pages/admin/Overview";
import CrudPage from "./pages/admin/CrudPage";
import Settings from "./pages/admin/Settings";


// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function App() {
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");

  // Sign out function with proper cleanup
  async function signOut() {
    console.log("Signing out...");
    // Clear all authentication data
    localStorage.removeItem("irth-auth");
    localStorage.removeItem("irth-validated");
    localStorage.removeItem("irth-user");
    // Redirect to login
    navigate("/login");
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      
      <Routes>
        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="min-h-screen flex">
                <Sidebar
                  onSignOut={signOut}
                  active={active}
                  setActive={setActive}
                />
                <div className="flex-1 min-h-screen flex flex-col bg-gray-50">
                  <Header
                    title={active.charAt(0).toUpperCase() + active.slice(1)}
                  />
                  <main className="p-6 flex-1 overflow-auto">
                    {active === "overview" && <Overview />}
                    {active === "services" && (
                      <CrudPage collectionName="services" />
                    )}
                    {active === "training" && (
                      <CrudPage collectionName="training" />
                    )}
                    {active === "insights" && (
                      <CrudPage collectionName="insights" />
                    )}
                    {active === "team" && <CrudPage collectionName="team" />}
                    {active === "events" && <CrudPage collectionName="events" />}
                    {active === "settings" && <Settings />}
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Client Routes */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        
        <Route path="/about" element={
          <>
            <Navbar />
            <About />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        
        <Route path="/team" element={
          <>
            <Navbar />
            <TeamPage />
            <Footer />
            <WhatsAppButton />
          </>
        } />

        {/* Services */}
        <Route path="/services" element={
          <>
            <Navbar />
            <ServicesPage />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/services/:slug" element={
          <>
            <Navbar />
            <ServiceDetail />
            <Footer />
            <WhatsAppButton />
          </>
        } />

        {/* Trainings */}
        <Route path="/trainings" element={
          <>
            <Navbar />
            <TrainingPage />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/trainings/:slug" element={
          <>
            <Navbar />
            <TrainingDetail />
            <Footer />
            <WhatsAppButton />
          </>
        } />

        {/* Insights */}
        <Route path="/insights" element={
          <>
            <Navbar />
            <Insights />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/insight/:slug" element={
          <>
            <Navbar />
            <InsightDetailPage />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/featured" element={
          <>
            <Navbar />
            <Insights />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/events" element={
          <>
            <Navbar />
            <Events />
            <Footer />
            <WhatsAppButton />
          </>
        } />

        {/* Default redirect for admin */}
        <Route path="/admin" element={<Navigate to="/login" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
