import React from "react";

export default function Header({ title }) {
    return (
        <header className="flex items-center justify-between p-6 border-b border-irthBrown-200 bg-white shadow-brown">
            <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-bold text-irthBrown-800">{title}</h3>
                <div className="hidden md:flex items-center space-x-2 text-sm text-irthBrown-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Dashboard</span>
                </div>
            </div>
            
            <div className="flex items-center space-x-6">
                {/* Notifications */}
                <button className="relative p-2 text-irthBrown-600 hover:text-irthBrown-800 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </button>
                
                {/* Search */}
                <button className="p-2 text-irthBrown-600 hover:text-irthBrown-800 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                
                {/* User Profile */}
                <div className="flex items-center space-x-3">
                    <div className="text-right hidden md:block">
                        <div className="text-sm font-semibold text-irthBrown-800">Admin User</div>
                        <div className="text-xs text-irthBrown-600">admin@irthadvisors.com</div>
                    </div>
                    <div className="w-10 h-10 bg-brown-gradient rounded-full flex items-center justify-center shadow-brown hover:shadow-brown-lg transition-shadow duration-200">
                        <span className="text-white text-sm font-bold">A</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
