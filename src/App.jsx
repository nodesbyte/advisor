import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Page Sections
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedInsights";
import ServicesSection from "./components/ServicesSection";
import TrainingServices from "./components/TrainingServices";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";
import PageTop from './components/PageTop';
// Pages
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import TrainingPage from "./pages/TrainingPage";
// import TrainingDetail from "./pages/TrainingDetail"; // Import TrainingDetail Page

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageTop/>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedSection />
              <ServicesSection />
              <TrainingServices />
              <AboutSection />
              <TeamSection />
              <TestimonialSection />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/trainings" element={<TrainingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/featured" element={<Insights />} />
        {/* <Route path="/trainings/:slug" element={<TrainingDetail />} /> Update the path for training detail */}
      </Routes>
      <Footer />

    </ThemeProvider>
  );
}

export default App;
