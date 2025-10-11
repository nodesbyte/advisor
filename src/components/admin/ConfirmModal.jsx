// src/components/admin/ConfirmModal.jsx
import React from 'react';

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message,
  itemName,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmButtonClass = "bg-red-600 hover:bg-red-700",
  loading = false,
  additionalInfo
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-[90vw]">
        <h3 className="text-lg font-bold mb-4 text-red-600">{title}</h3>
        
        <p className="text-gray-700 mb-4">
          {message} {itemName && <strong>"{itemName}"</strong>}?
        </p>
        
        {additionalInfo && (
          <p className="text-sm text-gray-500 mb-6">
            {additionalInfo}
          </p>
        )}

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`px-4 py-2 text-white rounded transition-colors disabled:opacity-50 ${confirmButtonClass}`}
          >
            {loading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;