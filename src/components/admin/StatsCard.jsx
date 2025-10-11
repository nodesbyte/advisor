// src/components/admin/StatsCard.jsx
import React from "react";

/**
 * StatsCard
 * props:
 *  - title: string
 *  - value: number | string
 *  - subtitle: string (optional)
 *  - icon: ReactNode (optional)
 */
export default function StatsCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center">
      <div className="flex-1">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl md:text-3xl font-bold mt-1">{value ?? 0}</div>
        {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
      </div>

      {icon && (
        <div className="ml-4 text-gray-400" aria-hidden>
          {icon}
        </div>
      )}
    </div>
  );
}
