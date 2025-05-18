import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Typography } from "@mui/material";
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/600.css';

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import PageTop from "./components/PageTop";
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

        {/* 404 Not Found */}
        <Route
          path="*"
          element={
            <Box sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h4" gutterBottom>
                404 - Page Not Found
              </Typography>
              <Typography variant="body1">
                Sorry, the page you are looking for does not exist.
              </Typography>
            </Box>
          }
        />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
