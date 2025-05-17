import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

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
import About from "./pages/About"; // ✅ Import the About page
import TeamPage from "./pages/TeamPage"; // ✅ Import the About page

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageTop />
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/trainings" element={<TrainingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:category/:postTitle" element={<Insights />} />
        <Route path="/featured" element={<Insights />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/team" element={<TeamPage />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
