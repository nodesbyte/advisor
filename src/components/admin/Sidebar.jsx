import React from "react";
import {
  Menu,
  LayoutDashboard,
  Wrench,
  GraduationCap,
  Lightbulb,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/auth";

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const items = [
    { key: "overview", to: "/admin/dashboard", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { key: "services", to: "/admin/services", label: "Services", icon: <Wrench size={20} /> },
    { key: "training", to: "/admin/training", label: "Training", icon: <GraduationCap size={20} /> },
    { key: "insights", to: "/admin/insights", label: "Insights", icon: <Lightbulb size={20} /> },
    { key: "team", to: "/admin/team", label: "Team", icon: <Users size={20} /> },
    { key: "settings", to: "/admin/settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r shadow-lg z-30 transition-all duration-300 
      ${isOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-20"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen && <span className="font-bold text-lg">IRTH Admin</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-2">
        {items.map((item) => (
          <Link
            to={item.to}
            key={item.key}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100"
          >
            <span className="text-gray-700">{item.icon}</span>
            {isOpen && <span className="text-gray-800">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center space-x-3 px-6 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
      >
        <span className="text-gray-700">
          <LogOut size={20} />
        </span>
        {isOpen && <span className="text-gray-800">Logout</span>}
      </button>
    </aside>
  );
}
