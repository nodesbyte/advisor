
import React from "react";
import Navbar from "../components/client/Navbar";
import Footer from "../components/client/Footer";
import ScrollToTop from "../components/client/ScrollToTop";
import WhatsAppButton from "../components/client/WhatsAppButton";
import { Outlet } from "react-router-dom";
export default function Clientlayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
     <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
