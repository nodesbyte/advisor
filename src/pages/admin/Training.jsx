// src/pages/admin/Training.jsx
import React, { useEffect, useState } from "react";
import DataTable from "../../components/admin/DataTable";
import ConfirmModal from "../../components/admin/ConfirmModal";
import FormModal from "../../components/admin/FormModal";
import Filter from "../../components/admin/Filter";
import LoadingSpinner from "../../components/admin/LoadingSpinner"; 
import {
  getTrainings,
  deleteTraining,
  updateTraining,
  addTraining,
} from "../../services/training";
import { uploadImageToCloudinary } from "../../services/cloudinary";

export default function Training() {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  // selection
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  // modals
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // form
  const [formData, setFormData] = useState({});

  // data
  const [filteredTrainings, setFilteredTrainings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getTrainings();
      setTrainings(data);
      setFilteredTrainings(data);
    } catch (error) {
      console.error("Failed to fetch trainings:", error);
      alert("Failed to load trainings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Apply filter when selectedTitle changes
  useEffect(() => {
    if (!selectedTitle) {
      setFilteredTrainings(trainings);
    } else {
      setFilteredTrainings(trainings.filter((t) => t.title === selectedTitle));
    }
  }, [selectedTitle, trainings]);

  // ✅ Delete training
  const handleDelete = async () => {
    if (!selectedTraining) return;
    setProcessing(true);
    try {
      await deleteTraining(selectedTraining.id);
      setIsConfirmOpen(false);
      fetchData();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete training.");
    } finally {
      setProcessing(false);
    }
  };

  // ✅ Save (Add or Update) training
  const handleSave = async () => {
    setProcessing(true);
    try {
      let payload = { ...formData };

      // Case 1: If a new file is selected → upload to Cloudinary
      if (formData.image instanceof File) {
        const url = await uploadImageToCloudinary(formData.image);
        payload.image = url;
      }

      // Case 2: Editing training → if no new file, keep the old image
      if (selectedTraining && !payload.image) {
        payload.image = selectedTraining.image;
      }

      // Case 3: Adding new training → require image
      if (!selectedTraining && !payload.image) {
        alert("Please upload an image for the training.");
        setProcessing(false);
        return;
      }

      // Remove undefined fields
      Object.keys(payload).forEach(
        (key) => payload[key] === undefined && delete payload[key]
      );

      if (selectedTraining) {
        await updateTraining(selectedTraining.id, payload);
      } else {
        await addTraining(payload);
      }

      setIsFormOpen(false);
      setSelectedTraining(null);
      setFormData({});
      fetchData();
    } catch (error) {
      console.error("Save failed:", error);
      alert(error.message || "Failed to save training.");
    } finally {
      setProcessing(false);
    }
  };

  // ✅ Table headers
  const headers = [
    { key: "image", label: "Image" },
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    { key: "duration", label: "Duration" },
    { key: "mode", label: "Mode" },
    { key: "actions", label: "Actions" },
  ];

  // ✅ Render table cells
  const renderCell = (header, rowData) => {
    if (header.key === "image") {
      return (
        <img
          src={rowData.image}
          alt={rowData.title}
          className="w-16 h-16 object-cover rounded"
        />
      );
    }
    if (header.key === "actions") {
      return (
        <div className="flex gap-2">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {
              setSelectedTraining(rowData);
              setFormData(rowData);
              setIsFormOpen(true);
            }}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              setSelectedTraining(rowData);
              setIsConfirmOpen(true);
            }}
          >
            Delete
          </button>
        </div>
      );
    }
    return rowData[header.key];
  };

  // ✅ Fields for modal
  const fields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter training title",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter description",
    },
    {
      name: "duration",
      label: "Duration",
      type: "select",
      options: [
        { value: "", label: "Select Duration" },
        { value: "1 day", label: "1 Day" },
        { value: "2 days", label: "2 Days" },
        { value: "3 days", label: "3 Days" },
        { value: "1 week", label: "1 Week" },
        { value: "2 weeks", label: "2 Weeks" },
      ],
    },
    {
      name: "mode",
      label: "Mode",
      type: "select",
      options: [
        { value: "", label: "Select Mode" },
        { value: "Virtual", label: "Virtual" },
        { value: "On-site", label: "On-site" },
        { value: "Hybrid", label: "Hybrid" },
      ],
    },
    { name: "image", label: "Upload Image", type: "file" },
  ];

  return (
    <div className="p-6">
      {/* ✅ Loading spinner */}
      <LoadingSpinner isVisible={loading} />

      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <Filter
          categories={trainings.map((t) => t.title)}
          selected={selectedTitle}
          onSelect={setSelectedTitle}
        />
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          onClick={() => {
            setSelectedTraining(null);
            setFormData({});
            setIsFormOpen(true);
          }}
          disabled={loading}
        >
          + Add Training
        </button>
      </div>

      {/* Info message */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> You can filter trainings by title or add new
          trainings here. Images are stored in Cloudinary and their URLs saved
          in Firestore.
        </p>
      </div>

      {/* Data table */}
      <DataTable
        headers={headers}
        data={filteredTrainings}
        renderCell={renderCell}
        loading={loading}
        emptyMessage="No trainings available"
      />

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Training"
        message="Are you sure you want to delete"
        itemName={selectedTraining?.title}
        loading={processing}
        confirmText="Delete"
      />

      {/* Add/Edit Form Modal */}
      <FormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        title={selectedTraining ? "Edit Training" : "Add Training"}
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        loading={processing}
        saveText={selectedTraining ? "Update" : "Save"}
      />
    </div>
  );
}
