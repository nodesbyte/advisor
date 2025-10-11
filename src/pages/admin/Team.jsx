import React, { useEffect, useState } from "react";
import DataTable from "../../components/admin/DataTable";
import ConfirmModal from "../../components/admin/ConfirmModal";
import FormModal from "../../components/admin/FormModal";
import Filter from "../../components/admin/Filter";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import { uploadImageToCloudinary } from "../../services/cloudinary";
import {
  getTeam,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../../services/team";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [selectedMember, setSelectedMember] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // Filter by title (role)
  const [selectedTitle, setSelectedTitle] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getTeam();
      setTeam(data);
      setFilteredTeam(data);
    } catch (err) {
      console.error("Failed to fetch team:", err);
      alert("Failed to load team. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedTitle) {
      setFilteredTeam(team);
    } else {
      setFilteredTeam(team.filter((m) => m.title === selectedTitle));
    }
  }, [selectedTitle, team]);

  const handleDelete = async () => {
    if (!selectedMember) return;
    setProcessing(true);
    try {
      await deleteTeamMember(selectedMember.id);
      setIsConfirmOpen(false);
      // If the selected title no longer exists, clear filter
      setSelectedTitle((prev) => {
        const remaining = team
          .filter((t) => t.id !== selectedMember.id)
          .map((t) => t.title);
        return remaining.includes(prev) ? prev : null;
      });
      fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete member.");
    } finally {
      setProcessing(false);
    }
  };

  const handleSave = async () => {
    setProcessing(true);
    try {
      let payload = { ...formData };

      // If a new file is selected, upload to Cloudinary
      if (formData.image instanceof File) {
        const url = await uploadImageToCloudinary(formData.image);
        payload.image = url;
      } else if (selectedMember && !payload.image) {
        // keep existing image when editing and no new upload
        payload.image = selectedMember.image;
      }

      // remove undefineds
      Object.keys(payload).forEach(
        (k) => payload[k] === undefined && delete payload[k]
      );

      if (selectedMember) {
        await updateTeamMember(selectedMember.id, payload);
      } else {
        await addTeamMember(payload);
      }

      setIsFormOpen(false);
      setSelectedMember(null);
      setFormData({});
      fetchData();
    } catch (err) {
      console.error("Save failed:", err);
      alert(err.message || "Failed to save member.");
    } finally {
      setProcessing(false);
    }
  };

  const headers = [
    { key: "image", label: "Image" },
    { key: "name", label: "Name" },
    { key: "title", label: "Title" },
    { key: "email", label: "Email" },
    { key: "actions", label: "Actions" },
  ];

  const renderCell = (header, rowData) => {
    if (header.key === "image") {
      return rowData.image ? (
        <img
          src={rowData.image}
          alt={rowData.name}
          className="w-16 h-16 object-cover rounded"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
          No image
        </div>
      );
    }

    if (header.key === "actions") {
      return (
        <div className="flex gap-2">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {
              setSelectedMember(rowData);
              setFormData(rowData);
              setIsFormOpen(true);
            }}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              setSelectedMember(rowData);
              setIsConfirmOpen(true);
            }}
          >
            Delete
          </button>
        </div>
      );
    }

    // default cell
    return rowData[header.key] || "-";
  };

  // ✅ Updated field: experience changed from textarea → text input
  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Enter name" },
    { name: "title", label: "Title", type: "text", placeholder: "Enter title/role" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter email" },
    { name: "bio", label: "Bio", type: "textarea", placeholder: "Enter bio" },
    { name: "experience", label: "Experience", type: "text", placeholder: "Enter experience" },
    { name: "image", label: "Profile Image", type: "file" },
  ];

  // unique titles for filter dropdown
  const titles = Array.from(new Set(team.map((t) => t.title).filter(Boolean)));

  return (
    <div className="p-6">
      <LoadingSpinner isVisible={loading} />

      <div className="flex justify-between items-center mb-4">
        <Filter
          categories={titles}
          selected={selectedTitle}
          onSelect={setSelectedTitle}
        />
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          onClick={() => {
            setSelectedMember(null);
            setFormData({});
            setIsFormOpen(true);
          }}
          disabled={loading}
        >
          + Add Member
        </button>
      </div>

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> You can filter team members by role/title or
          add/edit members here. Images upload to Cloudinary and the returned
          URL is stored in Firestore.
        </p>
      </div>

      <DataTable
        headers={headers}
        data={filteredTeam}
        renderCell={renderCell}
        loading={loading}
        emptyMessage="No team members found"
      />

      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Member"
        message="Are you sure you want to delete"
        itemName={selectedMember?.name}
        loading={processing}
        confirmText="Delete"
      />

      <FormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        title={selectedMember ? "Edit Member" : "Add Member"}
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        loading={processing}
        saveText={selectedMember ? "Update" : "Save"}
      />
    </div>
  );
}
