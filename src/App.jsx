import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Typography } from "@mui/material";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import TrainingDetail from "./pages/TrainingDetail";
import TrainingPage from "./pages/TrainingPage";
// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<TeamPage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

        {/* Trainings */}
        <Route path="/trainings" element={<TrainingPage />} />
        <Route path="/trainings/:slug" element={<TrainingDetail />} />

        {/* Insights */}
        <Route path="/:category/:postTitle" element={<Insights />} />
        <Route path="/featured" element={<Insights />} />

     
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
