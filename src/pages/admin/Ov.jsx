import React from "react";
import StatsCard from "../../components/admin/StatsCard";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

export default function Overview() {
    // Mock data for dashboard stats
    const stats = [
        { title: "Total Services", value: "24", subtitle: "+3 this month" },
        { title: "Active Training", value: "12", subtitle: "8 in progress" },
        { title: "Team Members", value: "18", subtitle: "2 new this week" },
        { title: "Upcoming Events", value: "7", subtitle: "Next: Advisory Workshop" },
    ];

    const recentActivities = [
        { id: 1, action: "New service added", item: "Financial Planning Workshop", time: "2 hours ago" },
        { id: 2, action: "Training completed", item: "Investment Strategies", time: "4 hours ago" },
        { id: 3, action: "Team member joined", item: "Sarah Johnson", time: "1 day ago" },
        { id: 4, action: "Event scheduled", item: "Client Consultation", time: "2 days ago" },
    ];

    return (
        <div >
       

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatsCard
                            key={index}
                            title={stat.title}
                            value={stat.value}
                            subtitle={stat.subtitle}
                        />
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-6">
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
                </div>
          
        </div>
    );
}
