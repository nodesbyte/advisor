import React from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Header({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between p-4 md:p-6 border-b bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        {/* ✅ Hamburger visible only on mobile */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-gray-100 md:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-lg md:text-xl font-bold text-irthBrown-800">
            IrthAdvisor Dashboard
          </h1>
          <p className="text-xs md:text-sm text-irthBrown-600">
            Manage your data and settings here
          </p>
        </div>
      </div>

      {/* User Info (desktop only) */}
      <div className="hidden md:flex items-center space-x-3">
        <div className="text-right">
          <div className="text-sm font-semibold text-irthBrown-800">
            {user?.email ? user.email : "Guest"}
          </div>
          <div className="text-xs text-green-600">
            {user ? "Active" : "Not logged in"}
          </div>
        </div>
      </div>
    </header>
  );
}
