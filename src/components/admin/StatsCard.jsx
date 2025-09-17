import React from "react";

export default function StatsCard({ title, value, subtitle }) {
    return (
        <div className="group relative overflow-hidden bg-card-gradient rounded-2xl p-6 shadow-brown hover:shadow-brown-xl transition-all duration-300 border border-irthBrown-100 hover:border-irthBrown-200 transform hover:-translate-y-2">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-warm-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-xs uppercase text-irthBrown-600 font-semibold tracking-wider">{title}</div>
                    <div className="w-8 h-8 bg-brown-gradient rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-brown">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>
                
                <div className="text-4xl font-bold text-irthBrown-800 mb-2 group-hover:text-irthBrown-900 transition-colors duration-300">{value}</div>
                
                {subtitle && (
                    <div className="flex items-center space-x-2">
                        <div className="text-sm text-irthBrown-600 group-hover:text-irthBrown-700 transition-colors duration-300">{subtitle}</div>
                        <div className="w-2 h-2 bg-irthBrown-500 rounded-full animate-pulse"></div>
                    </div>
                )}
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brown-gradient rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
    );
}
