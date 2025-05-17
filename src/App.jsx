import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Typography } from "@mui/material";
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/600.css';

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTop from './components/PageTop';
import Home from "./pages/Home";

// Pages
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import TrainingPage from "./pages/TrainingPage";
import TrainingDetail from "./pages/TrainingDetail";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";

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
      <PageTop />
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/trainings" element={<TrainingPage />} />
        <Route path="/trainings/:slug" element={<TrainingDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:category/:postTitle" element={<Insights />} />
        <Route path="/featured" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        
        {/* Optional: Global 404 page */}
        <Route path="*" element={<Typography variant="h4" sx={{ p: 4 }}>404 - Page Not Found</Typography>} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
