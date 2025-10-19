import React, { useEffect, useState } from "react";
import DataTable from "../../components/admin/DataTable";
import ConfirmModal from "../../components/admin/ConfirmModal";
import FormModal from "../../components/admin/FormModal";
import Filter from "../../components/admin/Filter";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import CustomPopup from "../../components/admin/CustomPopup";

import {
  getInsights,
  addInsight,
  updateInsight,
  deleteInsight,
} from "../../services/insights";
import { uploadImageToCloudinary } from "../../services/cloudinary";
import { uploadPDFToSupabase, deletePDFFromSupabase } from "../../services/supabasePDF";

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
  const [popup, setPopup] = useState({ isOpen: false, title: "", message: "" });

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
      if (selectedInsight.pdfs && selectedInsight.pdfs.length > 0) {
        await Promise.all(
          selectedInsight.pdfs.map((pdfUrl) =>
            deletePDFFromSupabase(pdfUrl).catch((err) =>
              console.warn("Failed to delete PDF:", err)
            )
          )
        );
      }

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
      } else if (selectedInsight && typeof payload.image === "string") {
        payload.image = selectedInsight.image;
      }

      let newPDFUrls = [];
      let existingPDFUrls = [];

      if (Array.isArray(formData.pdfs)) {
        const newFiles = formData.pdfs.filter((p) => p instanceof File);
        existingPDFUrls = formData.pdfs.filter((p) => typeof p === "string");

        for (let file of newFiles) {
          if (file.size > 50 * 1024 * 1024) {
            setPopup({
              isOpen: true,
              title: "File Size Error",
              message: `${file.name} exceeds the 50MB limit. Please choose a smaller file.`,
            });
            setProcessing(false);
            return;
          }
        }

        if (newFiles.length > 0) {
          newPDFUrls = await Promise.all(
            newFiles.map(async (file) => {
              try {
                const url = await uploadPDFToSupabase(file);
                return url;
              } catch (err) {
                console.error(`Failed to upload ${file.name}:`, err);
                throw err;
              }
            })
          );
        }
      }

      payload.pdfs = [...(existingPDFUrls || []), ...(newPDFUrls || [])];

      if (!selectedInsight && !payload.image) {
        setPopup({
          isOpen: true,
          title: "Validation Error",
          message: "Please upload an image for the insight.",
        });
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
      setPopup({
        isOpen: true,
        title: "Save Error",
        message: err.message || "Failed to save insight.",
      });
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
        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
          No image
        </div>
      );
    }

    if (header.key === "actions") {
      return (
        <div className="flex gap-2 flex-wrap">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            onClick={() => {
              setSelectedInsight(row);
              setFormData({
                title: row.title || "",
                time: row.time || "",
                category: row.category || "",
                label: row.label || "",
                content: row.content || "",
                link: row.link || "",
                reference: row.reference || "",
                image: row.image || "",
                pdfs: row.pdfs || [],
              });
              setIsFormOpen(true);
            }}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
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

  const categories = Array.from(new Set(insights.map((i) => i.category).filter(Boolean)));

  const fields = [
    { name: "title", label: "Title", type: "text", placeholder: "Enter title" },
    { name: "time", label: "Time", type: "date" },
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
    { name: "content", label: "Content", type: "textarea", placeholder: "Enter full content or summary", rows: 8 },
    { name: "link", label: "External Link", type: "text", placeholder: "https://..." },
    { name: "reference", label: "Reference", type: "text", placeholder: "Authors / Reference" },
    { name: "image", label: "Upload Image", type: "file" },
    { name: "pdfs", label: "Upload PDFs", type: "file", multiple: true, accept: ".pdf" },
  ];

  return (
    <div className="p-6">
      <LoadingSpinner isVisible={loading} />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <Filter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
        <button
          className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
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

   

      {/* Responsive view */}
      <div className="hidden md:block">
        <DataTable
          headers={headers}
          data={filtered}
          renderCell={renderCell}
          loading={loading}
          emptyMessage="No insights found"
        />
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center">No insights found</p>
        ) : (
          filtered.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                ) : (
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
                    No image
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category || "Uncategorized"}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2"><strong>Label:</strong> {item.label || "-"}</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Time:</strong> {item.time || "-"}</p>
              <div className="flex gap-2 mt-3">
                <button
                  className="flex-1 bg-blue-500 text-white rounded py-1 text-sm hover:bg-blue-600"
                  onClick={() => {
                    setSelectedInsight(item);
                    setFormData({
                      title: item.title || "",
                      time: item.time || "",
                      category: item.category || "",
                      label: item.label || "",
                      content: item.content || "",
                      link: item.link || "",
                      reference: item.reference || "",
                      image: item.image || "",
                      pdfs: item.pdfs || [],
                    });
                    setIsFormOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="flex-1 bg-red-500 text-white rounded py-1 text-sm hover:bg-red-600"
                  onClick={() => {
                    setSelectedInsight(item);
                    setIsConfirmOpen(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

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

      <CustomPopup
        isOpen={popup.isOpen}
        onClose={() => setPopup({ ...popup, isOpen: false })}
        title={popup.title}
        message={popup.message}
      />
    </div>
  );
}
