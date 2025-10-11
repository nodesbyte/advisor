import React from "react";

const Filter = ({ categories, selected, onSelect }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Filter by Category</label>
      <select
        value={selected || "all"}
        onChange={(e) => onSelect(e.target.value === "all" ? null : e.target.value)}
        className="border rounded-md px-4 py-2 w-64"
      >
        <option value="all">All Categories</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;