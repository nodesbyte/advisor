import React, { useState } from "react";
import { loginUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👈 import icons
import {Link} from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 state for toggling password

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const user = await loginUser(email, password);
      console.log("✅ Logged in:", user);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("⚠️ Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="h-screen flex flex-col md:flex-row bg-warm-gradient overflow-hidden">
      {/* Left: Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white shadow-brown-xl p-6 md:p-12 relative h-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-20 w-32 h-32 bg-irthBrown-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-irthBrown-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-irthBrown-400 rounded-full blur-xl"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Logo */}
          <div className="text-center md:text-left mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              <span className="text-irthBrown-800 animate-pulse">IRTH</span>
              <span className="text-irthBrown-600"> Advisors</span>
            </h1>
            <p className="text-irthBrown-500 text-sm font-medium">
              Admin Dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-xl border-2 border-irthBrown-200 focus:border-irthBrown-600 focus:ring-4 focus:ring-irthBrown-100 focus:outline-none transition-all duration-300 bg-warmWhite-100 focus:bg-white"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"} // 👈 toggle visibility
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border-2 border-irthBrown-200 focus:border-irthBrown-600 focus:ring-4 focus:ring-irthBrown-100 focus:outline-none transition-all duration-300 bg-warmWhite-100 focus:bg-white pr-12"
                  placeholder="Enter your password"
                  required
                />

                {/* 👁 Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-irthBrown-500 hover:text-irthBrown-700 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative"
                role="alert"
              >
                <span className="block sm:inline font-medium">{error}</span>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-400 text-white rounded-xl font-bold shadow-brown-lg transition-all duration-300 bg-brown-gradient hover:shadow-brown-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-irthBrown-200"
            >
              Sign In to Dashboard
            </button> 

            {/* Forgot Password */}
       <div className="text-center">
  <Link
    to="/admin/forgot-password"
    className="text-sm text-irthBrown-600 hover:text-irthBrown-800 font-medium transition-colors duration-200"
  >
    Forgot your password?
  </Link>
</div>

          </form>
        </div>
      </div>
    </div>
  );
}
