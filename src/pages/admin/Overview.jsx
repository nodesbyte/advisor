// src/pages/admin/Overview.jsx
import React, { useEffect, useState } from "react";
import StatsCard from "../../components/admin/StatsCard";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import { getServices } from "../../services/firestore";
import { getTeam } from "../../services/team";
import { getTrainings } from "../../services/training";
import { getInsights } from "../../services/insights";

export default function Overview() {
  const [loading, setLoading] = useState(true);
  const [servicesCount, setServicesCount] = useState(0);
  const [serviceCategoriesCount, setServiceCategoriesCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [trainingsCount, setTrainingsCount] = useState(0);
  const [recentItems, setRecentItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [services, team, trainings, insights] = await Promise.all([
          getServices(),
          getTeam(),
          getTrainings(),
          getInsights(),
        ]);

        // --- Stats ---
        const categories = services || [];
        const totalCategories = categories.length;
        const totalSublinks = categories.reduce(
          (acc, cat) => acc + (cat.sublinks?.length || 0),
          0
        );
        setServiceCategoriesCount(totalCategories);
        setServicesCount(totalSublinks);
        setTeamCount(team?.length || 0);
        setTrainingsCount(trainings?.length || 0);

        // --- Recent Activity ---
        const normalize = (item, type) => ({
          id: item.id,
          type, // Service / Training / Insight / Team Member
          title: item.name || item.title || item.label || "Untitled",
          category: item.category || "",
          createdAt: item.createdAt?.seconds
            ? new Date(item.createdAt.seconds * 1000)
            : new Date(0),
        });

        const recent = [
          ...(team || []).map((t) => normalize(t, "Team Member")),
          ...(trainings || []).map((t) => normalize(t, "Training")),
          ...(insights || []).map((i) => normalize(i, "Insight")),
          ...(categories || []).map((s) => normalize(s, "Service")),
        ]
          .filter((x) => x.createdAt)
          .sort((a, b) => b.createdAt - a.createdAt)
          .slice(0, 5);

        setRecentItems(recent);
      } catch (err) {
        console.error("Overview load error:", err);
        setError(err.message || "Failed to load overview data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="p-3 md:p-6">
      <LoadingSpinner isVisible={loading} />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Admin Overview</h1>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
        <StatsCard
          title="Total Services"
          value={servicesCount}
          subtitle={`${serviceCategoriesCount} categories`}
        />
        <StatsCard
          title="Total Team Members"
          value={teamCount}
          subtitle="Active members"
        />
        <StatsCard
          title="Total Trainings"
          value={trainingsCount}
          subtitle="Published trainings"
        />
      </div>

      {/* ✅ Recent Activity - Responsive Table */}
      <div className="bg-white rounded-lg border p-3 md:p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

        {recentItems.length === 0 ? (
          <p className="text-sm text-gray-500">No recent activity yet.</p>
        ) : (
          <>
            {/* Mobile: Card View */}
            <div className="md:hidden space-y-3">
              {recentItems.map((item, index) => (
                <div
                  key={`${item.type}-${item.id}-${index}`}
                  className="border rounded p-3 bg-gray-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold text-blue-600">
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 mb-1">
                    {item.title}
                  </p>
                  {item.category && (
                    <p className="text-xs text-gray-500">{item.category}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    {item.createdAt.toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop: Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Page
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Details
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentItems.map((item, index) => (
                    <tr
                      key={`${item.type}-${item.id}-${index}`}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-2 font-medium text-gray-800">
                        {item.type}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {item.title}
                        {item.category ? ` | ${item.category}` : ""}
                      </td>
                      <td className="px-4 py-2 text-gray-500 text-xs whitespace-nowrap">
                        {item.createdAt.toLocaleDateString()}{" "}
                        {item.createdAt.toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}