import React from "react";
import { useAuth } from "../../context/AuthContext"; // ✅ use context, not service

export default function Header() {
  const { user } = useAuth(); // get logged-in user from context

  return (
    <header className="flex items-center justify-between p-6 border-b border-irthBrown-200 bg-white shadow-brown">
      {/* Left: Title */}
      <div>
        <h1 className="text-xl font-bold text-irthBrown-800">
          Welcome to IrthAdvisor Dashboard
        </h1>
        <p className="text-sm text-irthBrown-600">
          Manage your data and settings here
        </p>
      </div>

      {/* Right: Status + Profile */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <div className="text-right hidden md:block">
            <div className="text-sm font-semibold text-irthBrown-800">
              {user?.email ? user.email : "Guest"}
            </div>
            <div className="text-xs text-green-600">
              {user ? "Active" : "Not logged in"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
