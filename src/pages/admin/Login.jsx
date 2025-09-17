import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Valid credentials (in a real app, this would be handled by a backend)
    const VALID_CREDENTIALS = {
        email: "admin@irthadvisors.com",
        password: "irth2024"
    };

    // Load saved credentials and check if already authenticated
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("irth-user"));
        const isAuthenticated = localStorage.getItem("irth-auth") === "true";
        const isValidated = localStorage.getItem("irth-validated") === "true";

        // If already authenticated with valid credentials, redirect to dashboard
        if (isAuthenticated && isValidated && saved) {
            const VALID_CREDENTIALS = {
                email: "admin@irthadvisors.com",
                password: "irth2024"
            };

            if (saved.email === VALID_CREDENTIALS.email &&
                saved.password === VALID_CREDENTIALS.password &&
                saved.loginTime && (Date.now() - saved.loginTime) < (24 * 60 * 60 * 1000)) {
                navigate("/dashboard");
                return;
            }
        }

        // Load saved credentials for form
        if (saved) {
            setEmail(saved.email);
            setPassword(saved.password);
        }
    }, [navigate]);

    function handleLogin(e) {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate loading delay
        setTimeout(() => {
            if (!email || !password) {
                setError("Email and password are required.");
                setIsLoading(false);
                return;
            }

            // Validate credentials
            if (email.toLowerCase() !== VALID_CREDENTIALS.email.toLowerCase() ||
                password !== VALID_CREDENTIALS.password) {
                setError("Invalid email or password. Please check your credentials and try again.");
                setIsLoading(false);
                return;
            }

            // Save valid credentials
            localStorage.setItem("irth-user", JSON.stringify({
                email: email.toLowerCase(),
                password: password,
                loginTime: Date.now()
            }));
            // Set authentication flag
            localStorage.setItem("irth-auth", "true");
            localStorage.setItem("irth-validated", "true");

            setIsLoading(false);
            // ✅ Redirect to dashboard
            navigate("/dashboard");
        }, 1000);
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
        <p className="text-irthBrown-500 text-sm font-medium">Admin Dashboard</p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-4 rounded-xl border-2 border-irthBrown-200 focus:border-irthBrown-600 focus:ring-4 focus:ring-irthBrown-100 focus:outline-none transition-all duration-300 bg-warmWhite-100 focus:bg-white"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 animate-pulse">
            <p className="text-sm text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 rounded-xl font-bold shadow-brown-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-irthBrown-200 ${
            isLoading
              ? "bg-irthBrown-400 cursor-not-allowed"
              : "bg-brown-gradient hover:shadow-brown-xl transform hover:-translate-y-1"
          }`}
        >
          {isLoading ? "Authenticating..." : "Sign In to Dashboard"}
        </button>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="#" className="text-sm text-irthBrown-600 hover:text-irthBrown-800 font-medium transition-colors duration-200">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  </div>

  {/* Right: Random Image */}
  <div className="flex-1 flex items-center justify-center h-full p-6 bg-transparent">
    <img
      src="https://picsum.photos/600/400?random=1"
      alt="Random Image"
      className="max-h-[70%] w-auto object-contain rounded-lg shadow-lg"
    />
  </div>
</div>
    );
}
