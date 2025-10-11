// src/pages/admin/Services.jsx
import React, { useEffect, useState } from "react";
import {
  getServices,
  deleteSublink,
  updateSublink,
  addServiceWithSublink,
  addSublink,
  checkCategoryExists,
} from "../../services/firestore";

// Reusable Components
import Filter from "../../components/admin/Filter";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import ConfirmModal from "../../components/admin/ConfirmModal";
import FormModal from "../../components/admin/FormModal";
import DataTable from "../../components/admin/DataTable";
import ActionButtons from "../../components/admin/ActionButtons";

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Modal states
  const [editing, setEditing] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  
  // Form data
  const [editFormData, setEditFormData] = useState({ title: "", details: "" });
  const [addFormData, setAddFormData] = useState({
    category: "",
    newCategoryName: "",
    title: "",
    details: "",
  });

  // Table configuration
  const tableHeaders = [
    { key: "label", label: "Category" },
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    { key: "actions", label: "Actions" }
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.error("Failed to fetch services:", error);
      alert("Failed to load services. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Prepare table data
  const prepareTableData = () => {
    const filteredServices = selectedCategory 
      ? services.filter((s) => s.label === selectedCategory)
      : services;

    return filteredServices.flatMap((service) =>
      service.sublinks?.map((sub, index) => ({
        key: `${service.id}-${index}`,
        serviceId: service.id,
        index,
        label: service.label,
        title: sub.title,
        details: sub.details,
        sublink: sub
      })) || []
    );
  };

  // Cell renderer for table
  const renderTableCell = (header, rowData) => {
    switch (header.key) {
      case "label":
        return rowData.label;
      case "title":
        return rowData.title;
      case "description":
        return rowData.details.length > 100 ? (
          <div>{rowData.details.substring(0, 100)}...</div>
        ) : (
          rowData.details.split("\n").map((line, i) => (
            <div key={i}>{line}</div>
          ))
        );
      case "actions":
        return (
          <ActionButtons
            onEdit={() => handleEdit(rowData)}
            onDelete={() => handleDeleteClick(rowData)}
            disabled={loading}
          />
        );
      default:
        return rowData[header.key] || "-";
    }
  };

  // CRUD Operations
  const handleEdit = (rowData) => {
    setEditing({ serviceId: rowData.serviceId, index: rowData.index });
    setEditFormData({
      title: rowData.title,
      details: rowData.details
    });
  };

  const handleSaveEdit = async () => {
    try {
      setLoading(true);
      await updateSublink(editing.serviceId, editing.index, editFormData);
      setEditing(null);
      fetchServices();
    } catch (error) {
      console.error("Failed to update sublink:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (rowData) => {
    setDeleteConfirm({
      serviceId: rowData.serviceId,
      index: rowData.index,
      title: rowData.title
    });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteConfirm) return;
    
    try {
      setLoading(true);
      const result = await deleteSublink(deleteConfirm.serviceId, deleteConfirm.index);
      
      if (result?.categoryDeleted) {
        alert("Item deleted successfully. The category was also removed because it had no remaining items.");
        if (selectedCategory && services.find(s => s.id === deleteConfirm.serviceId)?.label === selectedCategory) {
          setSelectedCategory(null);
        }
      }
      
      setDeleteConfirm(null);
      fetchServices();
    } catch (error) {
      console.error("Failed to delete sublink:", error);
      alert("Failed to delete item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!addFormData.title) {
      alert("Please enter a title");
      return;
    }

    const sublink = {
      title: addFormData.title,
      slug: addFormData.title.toLowerCase().replace(/\s+/g, "-"),
      details: addFormData.details,
    };

    try {
      setLoading(true);
      
      if (addFormData.category === "new") {
        if (!addFormData.newCategoryName) {
          alert("Enter new category name!");
          return;
        }
        
        const categoryExists = await checkCategoryExists(addFormData.newCategoryName);
        if (categoryExists) {
          alert(`Category "${addFormData.newCategoryName}" already exists. Please choose a different name.`);
          return;
        }
        
        await addServiceWithSublink(addFormData.newCategoryName, sublink);
      } else {
        if (!addFormData.category) {
          alert("Please select a category");
          return;
        }
        await addSublink(addFormData.category, sublink);
      }

      setShowAddForm(false);
      setAddFormData({ category: "", newCategoryName: "", title: "", details: "" });
      fetchServices();
    } catch (error) {
      console.error("Failed to add content:", error);
      alert(error.message.includes("already exists") ? error.message : "Failed to add content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Form field configurations
  const editFormFields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter title"
    },
    {
      name: "details",
      label: "Details",
      type: "textarea",
      placeholder: "Enter details",
      rows: 4
    }
  ];

  const getAddFormFields = () => {
    const fields = [
      {
        name: "category",
        label: "Category",
        type: "select",
        options: [
          { value: "", label: "-- Select Category --" },
          ...services.map(s => ({ value: s.id, label: s.label })),
          { value: "new", label: "+ New Category" }
        ]
      }
    ];

    if (addFormData.category === "new") {
      fields.push({
        name: "newCategoryName",
        label: "New Category Name",
        type: "text",
        placeholder: "Enter New Category Name",
        hint: `Document ID will be: ${addFormData.newCategoryName ? 
          addFormData.newCategoryName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') 
          : 'category-name'}`
      });
    }

    fields.push(
      {
        name: "title",
        label: "Service Title",
        type: "text",
        placeholder: "Enter service title"
      },
      {
        name: "details",
        label: "Service Details",
        type: "textarea",
        placeholder: "Enter service details",
        rows: 4
      }
    );

    return fields;
  };

  const tableData = prepareTableData();

  return (
    <div className="p-6">
      <LoadingSpinner isVisible={loading} />

      {/* Header */}
      <div className="flex justify-between items-center">
        <Filter
          categories={services.map((s) => s.label)}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <button
          onClick={() => setShowAddForm(true)}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          + Add Content
        </button>
      </div>

      {/* Info message */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> Categories will be automatically deleted when they have no remaining items.
        </p>
      </div>

      {/* Data Table */}
      <DataTable
        headers={tableHeaders}
        data={tableData}
        renderCell={renderTableCell}
        loading={loading}
        emptyMessage="No services found"
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={handleDeleteConfirm}
        title="Confirm Delete"
        message="Are you sure you want to delete"
        itemName={deleteConfirm?.title}
        confirmText="Delete"
        loading={loading}
        additionalInfo="This action cannot be undone. If this is the last item in the category, the entire category will also be deleted automatically."
      />

      {/* Edit Modal */}
      <FormModal
        isOpen={!!editing}
        onClose={() => setEditing(null)}
        onSave={handleSaveEdit}
        title="Edit Service"
        fields={editFormFields}
        formData={editFormData}
        setFormData={setEditFormData}
        loading={loading}
      />

      {/* Add Modal */}
      <FormModal
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onSave={handleAdd}
        title="Add New Service"
        fields={getAddFormFields()}
        formData={addFormData}
        setFormData={setAddFormData}
        loading={loading}
        saveText="Add"
      />
    </div>
  );
};

export default Services;