// src/components/admin/CustomPopup.jsx
import React, { useEffect, useState } from "react";

export default function CustomPopup({ isOpen, onClose, title, message }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setShow(true);
    else setShow(false);
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
        isOpen ? "backdrop-blur-sm opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-10"
        }`}
      >
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
