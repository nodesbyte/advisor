// src/pages/admin/Insights.jsx
import React, { useEffect, useState } from "react";
import DataTable from "../../components/admin/DataTable";
import ConfirmModal from "../../components/admin/ConfirmModal";
import FormModal from "../../components/admin/FormModal";
import Filter from "../../components/admin/Filter";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import {
  getInsights,
  addInsight,
  updateInsight,
  deleteInsight,
} from "../../services/insights";
import { uploadImageToCloudinary } from "../../services/cloudinary";

export default function Insights() {
  const [insights, setInsights] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getInsights();
      setInsights(data);
      setFiltered(data);
    } catch (err) {
      console.error("Failed to load insights:", err);
      alert("Failed to load insights.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedCategory) setFiltered(insights);
    else setFiltered(insights.filter((i) => i.category === selectedCategory));
  }, [selectedCategory, insights]);

  const handleDelete = async () => {
    if (!selectedInsight) return;
    setProcessing(true);
    try {
      await deleteInsight(selectedInsight.id);
      setIsConfirmOpen(false);
      setSelectedInsight(null);
      fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete insight.");
    } finally {
      setProcessing(false);
    }
  };

  const handleSave = async () => {
    setProcessing(true);
    try {
      const payload = { ...formData };

      if (formData.image instanceof File) {
        const url = await uploadImageToCloudinary(formData.image);
        payload.image = url;
      } else if (selectedInsight && !payload.image) {
        payload.image = selectedInsight.image;
      }

      Object.keys(payload).forEach((k) => payload[k] === undefined && delete payload[k]);

      if (!selectedInsight && !payload.image) {
        alert("Please upload an image for the insight.");
        setProcessing(false);
        return;
      }

      if (selectedInsight) {
        await updateInsight(selectedInsight.id, payload);
      } else {
        await addInsight(payload);
      }

      setIsFormOpen(false);
      setSelectedInsight(null);
      setFormData({});
      fetchData();
    } catch (err) {
      console.error("Save failed:", err);
      alert(err.message || "Failed to save insight.");
    } finally {
      setProcessing(false);
    }
  };

  const headers = [
    { key: "image", label: "Image" },
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "time", label: "Time" },
    { key: "label", label: "Label" },
    { key: "actions", label: "Actions" },
  ];

  const renderCell = (header, row) => {
    if (header.key === "image") {
      return row.image ? (
        <img src={row.image} alt={row.title} className="w-16 h-16 object-cover rounded" />
      ) : (
        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">No image</div>
      );
    }

    if (header.key === "actions") {
      return (
        <div className="flex gap-2">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {
              setSelectedInsight(row);
              setFormData({
                title: row.title || "",
                time: row.time || "",
                category: row.category || "",
                label: row.label || "",
                slug: row.slug || "",
                content: row.content || "",
                link: row.link || "",
                reference: row.reference || "",
                image: row.image || "",
              });
              setIsFormOpen(true);
            }}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              setSelectedInsight(row);
              setIsConfirmOpen(true);
            }}
          >
            Delete
          </button>
        </div>
      );
    }

    return row[header.key] || "-";
  };

  // ✅ Category dropdown options
  const categories = Array.from(new Set(insights.map((i) => i.category).filter(Boolean)));

  const fields = [
    { name: "title", label: "Title", type: "text", placeholder: "Enter title" },
    {
      name: "time",
      label: "Time",
      type: "date", // ✅ Calendar picker
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: [
        ...categories.map((c) => ({ label: c, value: c })),
        { label: "Other (Add new category)", value: "other" },
      ],
    },
    { name: "label", label: "Label", type: "text", placeholder: "Short label/tag" },
    { name: "slug", label: "Slug (optional)", type: "text", placeholder: "custom-slug (auto-generated)" },
    { name: "content", label: "Content", type: "textarea", placeholder: "Enter full content or summary", rows: 8 },
    { name: "link", label: "External Link", type: "text", placeholder: "https://..." },
    { name: "reference", label: "Reference", type: "text", placeholder: "Authors / Reference" },
    { name: "image", label: "Upload Image", type: "file" },
  ];

  return (
    <div className="p-6">
      <LoadingSpinner isVisible={loading} />

      <div className="flex justify-between items-center mb-4">
        <Filter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          onClick={() => {
            setSelectedInsight(null);
            setFormData({});
            setIsFormOpen(true);
          }}
          disabled={loading}
        >
          + Add Insight
        </button>
      </div>

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> You can filter insights by category or add new ones. Images are uploaded to Cloudinary.
        </p>
      </div>

      <DataTable
        headers={headers}
        data={filtered}
        renderCell={renderCell}
        loading={loading}
        emptyMessage="No insights found"
      />

      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Insight"
        message="Are you sure you want to delete"
        itemName={selectedInsight?.title}
        loading={processing}
        confirmText="Delete"
      />

      <FormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        title={selectedInsight ? "Edit Insight" : "Add Insight"}
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        loading={processing}
        saveText={selectedInsight ? "Update" : "Save"}
      />
    </div>
  );
}
