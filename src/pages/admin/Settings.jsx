import React, { useState } from "react";

export default function Settings() {
    const [settings, setSettings] = useState({
        companyName: "IRTH Advisors",
        email: "admin@irthadvisors.com",
        notifications: true,
        theme: "light"
    });

    const handleSave = (e) => {
        e.preventDefault();
        // Here you would typically save to Firebase or your backend
        console.log("Settings saved:", settings);
        alert("Settings saved successfully!");
    };

    const handleChange = (field, value) => {
        setSettings(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="space-y-6">
            <div className="card">
                <h2 className="text-xl font-semibold mb-6">Settings</h2>
                
                <form onSubmit={handleSave} className="space-y-6">
                    {/* Company Information */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Company Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={settings.companyName}
                                    onChange={(e) => handleChange('companyName', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-irthBrown-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Admin Email
                                </label>
                                <input
                                    type="email"
                                    value={settings.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-irthBrown-500 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Preferences</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Email Notifications
                                    </label>
                                    <p className="text-xs text-gray-500">Receive updates about system activities</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={settings.notifications}
                                    onChange={(e) => handleChange('notifications', e.target.checked)}
                                    className="h-4 w-4 text-irthBrown-600 focus:ring-irthBrown-500 border-gray-300 rounded"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Theme
                                </label>
                                <select
                                    value={settings.theme}
                                    onChange={(e) => handleChange('theme', e.target.value)}
                                    className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-irthBrown-500 focus:outline-none"
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                    <option value="auto">Auto</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="btn-primary px-6 py-2"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>

            {/* System Information */}
            <div className="card">
                <h3 className="text-lg font-medium mb-4">System Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-600">Version:</span>
                        <span className="ml-2 font-medium">1.0.0</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Last Updated:</span>
                        <span className="ml-2 font-medium">Today</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Database:</span>
                        <span className="ml-2 font-medium">Firebase (Mock)</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Status:</span>
                        <span className="ml-2 font-medium text-green-600">Online</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
