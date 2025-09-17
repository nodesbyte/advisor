import React from "react";

export default function Sidebar({ onSignOut, active, setActive }) {
    const items = [
        { 
            key: "overview", 
            label: "Overview", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                </svg>
            )
        },
        { 
            key: "services", 
            label: "Services", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        { 
            key: "training", 
            label: "Training", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        { 
            key: "insights", 
            label: "Insights", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        { 
            key: "team", 
            label: "Team", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
            )
        },
        { 
            key: "events", 
            label: "Events", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        { 
            key: "settings", 
            label: "Settings", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
    ];

    return (
        <aside className="w-64 bg-warm-gradient min-h-screen p-6 flex flex-col shadow-brown-xl border-r border-irthBrown-200">
            {/* Logo Section */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-brown-gradient rounded-xl flex items-center justify-center shadow-brown">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-irthBrown-800">IRTH Admin</h2>
                        <div className="text-xs text-irthBrown-600 font-medium">Control Panel</div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2 flex-1">
                {items.map((item) => (
                    <button
                        key={item.key}
                        onClick={() => setActive(item.key)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                            active === item.key 
                                ? "bg-white text-irthBrown-800 font-semibold shadow-brown transform scale-105 border border-irthBrown-200" 
                                : "text-irthBrown-700 hover:bg-white hover:text-irthBrown-800 hover:shadow-brown hover:transform hover:scale-102 hover:border hover:border-irthBrown-100"
                        }`}
                    >
                        <span className={`transition-colors duration-200 ${
                            active === item.key ? "text-irthBrown-700" : "text-irthBrown-600 group-hover:text-irthBrown-700"
                        }`}>
                            {item.icon}
                        </span>
                        <span className="text-sm font-medium">{item.label}</span>
                        {active === item.key && (
                            <div className="ml-auto w-2 h-2 bg-irthBrown-600 rounded-full animate-pulse"></div>
                        )}
                    </button>
                ))}
            </nav>

            {/* User Section */}
            <div className="pt-6 border-t border-irthBrown-200">
                <div className="flex items-center space-x-3 mb-4 p-3 bg-white rounded-xl shadow-brown border border-irthBrown-100">
                    <div className="w-10 h-10 bg-brown-gradient rounded-full flex items-center justify-center shadow-brown">
                        <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-semibold text-irthBrown-800">Admin User</div>
                        <div className="text-xs text-irthBrown-600">admin@irthadvisors.com</div>
                    </div>
                </div>
                
                <button
                    onClick={onSignOut}
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-white border-2 border-irthBrown-200 text-irthBrown-700 hover:bg-warmWhite-100 hover:border-irthBrown-300 hover:text-irthBrown-800 transition-all duration-200 font-medium shadow-brown hover:shadow-brown-lg"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
