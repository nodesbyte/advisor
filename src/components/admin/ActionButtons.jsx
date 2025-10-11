// src/components/admin/ActionButtons.jsx
import React from 'react';

const ActionButtons = ({
  onEdit,
  onDelete,
  editText = "Edit",
  deleteText = "Delete",
  editClassName = "px-3 py-1 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600 transition-colors disabled:opacity-50",
  deleteClassName = "px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50",
  disabled = false,
  showEdit = true,
  showDelete = true
}) => {
  return (
    <div className="flex space-x-2">
      {showEdit && (
        <button
          className={editClassName}
          onClick={onEdit}
          disabled={disabled}
        >
          {editText}
        </button>
      )}
      {showDelete && (
        <button
          className={deleteClassName}
          onClick={onDelete}
          disabled={disabled}
        >
          {deleteText}
        </button>
      )}
    </div>
  );
};

export default ActionButtons;