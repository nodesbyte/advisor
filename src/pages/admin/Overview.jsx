import React from "react";
import StatsCard from "../../components/admin/StatsCard";

export default function Overview() {
    // Mock data for dashboard stats
    const stats = [
        {
            title: "Total Services",
            value: "24",
            subtitle: "+3 this month"
        },
        {
            title: "Active Training",
            value: "12",
            subtitle: "8 in progress"
        },
        {
            title: "Team Members",
            value: "18",
            subtitle: "2 new this week"
        },
        {
            title: "Upcoming Events",
            value: "7",
            subtitle: "Next: Advisory Workshop"
        }
    ];

    const recentActivities = [
        { id: 1, action: "New service added", item: "Financial Planning Workshop", time: "2 hours ago" },
        { id: 2, action: "Training completed", item: "Investment Strategies", time: "4 hours ago" },
        { id: 3, action: "Team member joined", item: "Sarah Johnson", time: "1 day ago" },
        { id: 4, action: "Event scheduled", item: "Client Consultation", time: "2 days ago" }
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="relative overflow-hidden bg-brown-gradient rounded-2xl p-8 text-white shadow-brown-xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-200 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-200 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Welcome to IRTH Advisors</h1>
                            <p className="text-irthBrown-100 text-lg">Your comprehensive admin dashboard for managing advisory services, training programs, and team operations.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>System Online</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Last updated: Just now</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="group">
                        <StatsCard
                            title={stat.title}
                            value={stat.value}
                            subtitle={stat.subtitle}
                        />
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <div className="lg:col-span-2 card hover:shadow-brown-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-irthBrown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Recent Activities
                        </h3>
                        <button className="text-sm text-irthBrown-600 hover:text-irthBrown-800 font-medium px-3 py-1 rounded-lg hover:bg-irthBrown-50 transition-colors">
                            View All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <div key={activity.id} className="flex items-center space-x-4 p-4 bg-warm-gradient rounded-xl hover:shadow-brown transition-all duration-200 group border border-irthBrown-100">
                                <div className="w-10 h-10 bg-brown-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-brown">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-900 group-hover:text-irthBrown-700 transition-colors">{activity.action}</p>
                                    <p className="text-gray-600 text-sm">{activity.item}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card hover:shadow-brown-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-irthBrown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Quick Actions
                    </h3>
                    <div className="space-y-3">
                        <button className="w-full flex items-center space-x-3 p-4 bg-brown-gradient text-white rounded-xl hover:shadow-brown-xl transition-all duration-200 shadow-brown-lg transform hover:-translate-y-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span className="font-medium">Add Service</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-4 bg-white border-2 border-irthBrown-200 text-irthBrown-700 rounded-xl hover:border-irthBrown-300 hover:text-irthBrown-800 transition-all duration-200 hover:shadow-brown">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="font-medium">Schedule Training</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-4 bg-white border-2 border-irthBrown-200 text-irthBrown-700 rounded-xl hover:border-irthBrown-300 hover:text-irthBrown-800 transition-all duration-200 hover:shadow-brown">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                            <span className="font-medium">Add Team Member</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-4 bg-white border-2 border-irthBrown-200 text-irthBrown-700 rounded-xl hover:border-irthBrown-300 hover:text-irthBrown-800 transition-all duration-200 hover:shadow-brown">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">Create Event</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Performance Overview */}
            <div className="card hover:shadow-brown-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-irthBrown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Performance Overview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center group">
                        <div className="relative inline-block">
                            <div className="text-4xl font-bold text-irthBrown-700 mb-2 group-hover:scale-110 transition-transform duration-300">94%</div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                        <div className="text-xs text-green-600 mt-1">↗ +2% from last month</div>
                    </div>
                    <div className="text-center group">
                        <div className="relative inline-block">
                            <div className="text-4xl font-bold text-irthBrown-700 mb-2 group-hover:scale-110 transition-transform duration-300">87%</div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Training Completion</div>
                        <div className="text-xs text-blue-600 mt-1">↗ +5% from last month</div>
                    </div>
                    <div className="text-center group">
                        <div className="relative inline-block">
                            <div className="text-4xl font-bold text-irthBrown-700 mb-2 group-hover:scale-110 transition-transform duration-300">156</div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Active Clients</div>
                        <div className="text-xs text-purple-600 mt-1">↗ +12 this month</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
