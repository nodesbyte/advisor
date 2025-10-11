import React, { useState } from "react";
import { resetPassword } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await resetPassword(email);
      setMessage("✅ Password reset email sent! Check your inbox.");
    } catch (err) {
      setError("⚠️ Unable to send reset email. Please check the email and try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-gradient p-6">
      <div className="bg-white p-8 rounded-2xl shadow-brown-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-irthBrown-800">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-4 rounded-xl border-2 border-irthBrown-200 focus:border-irthBrown-600 focus:ring-4 focus:ring-irthBrown-100 focus:outline-none transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-sm">
              {message}
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold shadow-brown-lg bg-brown-gradient hover:shadow-brown-xl transition-all"
          >
            Send Reset Link
          </button>

          <p className="text-center mt-4 text-sm">
            <button
              onClick={() => navigate("/admin/login")}
              className="text-irthBrown-600 hover:text-irthBrown-800 font-medium"
            >
              Back to Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
