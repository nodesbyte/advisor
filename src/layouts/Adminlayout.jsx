import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

export default function Adminlayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const noLayoutRoutes = ["/admin/login"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  if (hideLayout) {
    return (
      <div className="flex px-12 items-center justify-center">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-x-hidden relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Area */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-0 md:ml-64" : "ml-0 md:ml-20"
        }`}
      >
        {/* Header (no hamburger in desktop) */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Content */}
        <main className="flex-1 overflow-y-auto  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
