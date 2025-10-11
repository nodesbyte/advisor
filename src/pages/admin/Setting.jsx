import React, { useState } from "react";
import { useAuth } from "../../context/authcontext";
import { Eye, EyeOff, LogOut, X } from "lucide-react";
import { resetPassword, reauthenticateUser, updateUserEmail } from "../../services/auth";

const Setting = () => {
  const { user, logout } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showUpdateEmailModal, setShowUpdateEmailModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [step, setStep] = useState(1); // 👈 step 1 = verify password, step 2 = update email

  const handleLogout = async () => {
    try {
      await logout();
      setMessage("Logged out successfully!");
      setMessageType("success");
    } catch (err) {
      setMessage("Logout failed. Try again.");
      setMessageType("error");
    }
  };

  // 🔐 Send Password Reset Link
  const handleSendResetLink = async () => {
    if (!user?.email) return;
    setLoading(true);
    setMessage("");
    try {
      await resetPassword(user.email);
      setMessage(`Reset link sent to ${user.email}. Check inbox or spam folder.`);
      setMessageType("success");
    } catch (err) {
      setMessage("❌ " + err.message);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 1: Verify Password
  const handleVerifyPassword = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    if (!password) {
      setMessage("Please enter your password.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await reauthenticateUser(user.email, password);
      setStep(2); // move to next step
      setMessage("✅ Password verified! Enter your new email below.");
      setMessageType("success");
    } catch (err) {
      setMessage("❌ " + err.message);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2: Update Email
  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    const newEmail = e.target.newEmail.value;

    if (!newEmail) {
      setMessage("Please enter new email.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await updateUserEmail(newEmail);
      setMessage("✅ Email updated successfully!");
      setMessageType("success");
      setStep(1); // reset steps
    } catch (err) {
      setMessage("❌ " + err.message);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mt-10 relative">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Settings</h1>

      {/* Email Display */}
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <div>
          <span className="block text-gray-700 font-medium">Email</span>
          <span className="text-gray-900">{user?.email || "No email found"}</span>
        </div>
        <button
          onClick={() => {
            setShowUpdateEmailModal(true);
            setMessage("");
            setStep(1);
          }}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Update Email
        </button>
      </div>

      {/* Password Display */}
      <div className="flex items-center justify-between mb-6 border-b pb-2">
        <div>
          <span className="block text-gray-700 font-medium">Password</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-900">
              {showPassword ? "********123" : "********"}
            </span>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setShowResetModal(true);
            setMessage("");
          }}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Update Password
        </button>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
      >
        <LogOut size={18} />
        Logout
      </button>

      {/* 🔐 Reset Password Modal */}
      {showResetModal && (
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-xl shadow-xl p-6 w-[400px] z-50">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => setShowResetModal(false)}
          >
            <X size={20} />
          </button>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Send Password Reset Link
          </h2>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          {message && (
            <p
              className={`mt-4 text-sm ${
                messageType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setShowResetModal(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              Close
            </button>
            {!message && (
              <button
                onClick={handleSendResetLink}
                disabled={loading}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* 📧 Update Email Modal */}
      {showUpdateEmailModal && (
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-xl shadow-xl p-6 w-[400px] z-50">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => setShowUpdateEmailModal(false)}
          >
            <X size={20} />
          </button>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {step === 1 ? "Verify Password" : "Update Email"}
          </h2>

          {step === 1 ? (
            <form onSubmit={handleVerifyPassword}>
              <div className="mb-3">
                <label className="text-sm text-gray-600">Current Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg"
                />
              </div>

              {message && (
                <p
                  className={`mt-4 text-sm ${
                    messageType === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowUpdateEmailModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:opacity-60"
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleUpdateEmail}>
              <div>
                <label className="text-sm text-gray-600">New Email</label>
                <input
                  type="email"
                  name="newEmail"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg"
                />
              </div>

              {message && (
                <p
                  className={`mt-4 text-sm ${
                    messageType === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowUpdateEmailModal(false);
                    setStep(1);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:opacity-60"
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Setting;
