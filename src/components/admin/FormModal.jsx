// import React, { useState, useEffect } from "react";

// const FormModal = ({
//   isOpen,
//   onClose,
//   onSave,
//   title,
//   fields,
//   formData,
//   setFormData,
//   loading = false,
//   saveText = "Save",
//   cancelText = "Cancel",
// }) => {
//   const [preview, setPreview] = useState(null);
//   const [customCategory, setCustomCategory] = useState("");

//   useEffect(() => {
//     if (formData.image && typeof formData.image === "string") {
//       setPreview(formData.image);
//     } else {
//       setPreview(null);
//     }
//   }, [formData]);

//   if (!isOpen) return null;

//   const handleInputChange = (fieldName, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [fieldName]: value,
//     }));
//   };

//   const renderField = (field) => {
//     if (field.type === "file") {
//       return (
//         <div key={field.name}>
//           <input
//             type="file"
//             accept={field.accept || "image/*"}
//             multiple={field.multiple || false}
//             onChange={(e) => {
//               if (!e.target.files) return;

//               if (field.multiple) {
//                 // For multiple files (PDFs)
//                 const filesArray = Array.from(e.target.files);
//                 handleInputChange(field.name, filesArray);
//               } else {
//                 // For single file (image)
//                 const file = e.target.files[0];
//                 if (file) {
//                   handleInputChange(field.name, file);
//                   setPreview(URL.createObjectURL(file));
//                 }
//               }
//             }}
//             className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
//             disabled={loading}
//           />

//           {/* Preview for image */}
//           {field.name === "image" && preview && (
//             <img
//               src={preview}
//               alt="Preview"
//               className="w-24 h-24 object-cover rounded mt-2"
//             />
//           )}

//           {/* List of uploaded PDFs */}
//           {field.name === "pdfs" &&
//             formData.pdfs &&
//             formData.pdfs.length > 0 && (
//               <ul className="mt-2 text-sm">
//                 {formData.pdfs.map((f, i) => (
//                   <li key={i}>{f.name || f}</li>
//                 ))}
//               </ul>
//             )}
//         </div>
//       );
//     }

//     if (field.type === "select") {
//       return (
//         <div key={field.name}>
//           <select
//             value={formData[field.name] || ""}
//             onChange={(e) => handleInputChange(field.name, e.target.value)}
//             className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 mb-2"
//             disabled={loading}
//           >
//             <option value="">Select category</option>
//             {field.options?.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//           {formData[field.name] === "other" && (
//             <input
//               type="text"
//               placeholder="Enter new category"
//               value={customCategory}
//               onChange={(e) => {
//                 setCustomCategory(e.target.value);
//                 handleInputChange("category", e.target.value);
//               }}
//               className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
//             />
//           )}
//         </div>
//       );
//     }

//     if (field.type === "textarea") {
//       return (
//         <textarea
//           key={field.name}
//           value={formData[field.name] || ""}
//           onChange={(e) => handleInputChange(field.name, e.target.value)}
//           placeholder={field.placeholder}
//           rows={field.rows || 4}
//           className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
//           disabled={loading}
//         />
//       );
//     }

//     return (
//       <input
//         key={field.name}
//         type={field.type || "text"}
//         value={formData[field.name] || ""}
//         onChange={(e) => handleInputChange(field.name, e.target.value)}
//         placeholder={field.placeholder}
//         className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
//         disabled={loading}
//       />
//     );
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-y-auto">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 my-6 max-h-[90vh] overflow-y-auto">
//         <h3 className="text-lg font-bold mb-4">{title}</h3>

//         {fields.map((field) => (
//           <div key={field.name} className="mb-3">
//             {field.label && (
//               <label className="block text-sm font-medium mb-1">
//                 {field.label}
//               </label>
//             )}
//             {renderField(field)}
//           </div>
//         ))}

//         <div className="flex justify-end space-x-2 pt-3">
//           <button
//             onClick={onClose}
//             disabled={loading}
//             className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 disabled:opacity-50"
//           >
//             {cancelText}
//           </button>
//           <button
//             onClick={onSave}
//             disabled={loading}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
//           >
//             {loading ? "Saving..." : saveText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormModal;

import React, { useState, useEffect } from "react";

const FormModal = ({
  isOpen,
  onClose,
  onSave,
  title,
  fields,
  formData,
  setFormData,
  loading = false,
  saveText = "Save",
  cancelText = "Cancel",
}) => {
  const [preview, setPreview] = useState(null);
  const [customCategory, setCustomCategory] = useState("");

  useEffect(() => {
    if (formData.image && typeof formData.image === "string") {
      setPreview(formData.image);
    } else {
      setPreview(null);
    }
  }, [formData]);

  if (!isOpen) return null;

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const renderField = (field) => {
    if (field.type === "file") {
      return (
        <div key={field.name}>
          <input
            type="file"
            accept={field.accept || "image/*"}
            multiple={field.multiple || false}
            onChange={(e) => {
              if (!e.target.files) return;

              if (field.multiple) {
                const filesArray = Array.from(e.target.files);
                handleInputChange(field.name, filesArray);
              } else {
                const file = e.target.files[0];
                if (file) {
                  handleInputChange(field.name, file);
                  setPreview(URL.createObjectURL(file));
                }
              }
            }}
            className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />

          {field.name === "image" && preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded mt-2"
            />
          )}

          {field.name === "pdfs" &&
            formData.pdfs &&
            formData.pdfs.length > 0 && (
              <ul className="mt-2 text-sm">
                {formData.pdfs.map((f, i) => (
                  <li key={i}>{f.name || f}</li>
                ))}
              </ul>
            )}
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div key={field.name}>
          <select
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 mb-2"
            disabled={loading}
          >
            <option value="">Select category</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {formData[field.name] === "other" && (
            <input
              type="text"
              placeholder="Enter new category"
              value={customCategory}
              onChange={(e) => {
                setCustomCategory(e.target.value);
                handleInputChange("category", e.target.value);
              }}
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
          )}
        </div>
      );
    }

    if (field.type === "textarea") {
      return (
        <textarea
          key={field.name}
          value={formData[field.name] || ""}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          placeholder={field.placeholder}
          rows={field.rows || 4}
          className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
      );
    }

    return (
      <input
        key={field.name}
        type={field.type || "text"}
        value={formData[field.name] || ""}
        onChange={(e) => handleInputChange(field.name, e.target.value)}
        placeholder={field.placeholder}
        className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      />
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 my-6 max-h-[90vh] overflow-y-auto relative">
        {/* Overlay while loading */}
        {loading && (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg">
            <div className="flex items-center gap-2">
              <svg
                className="animate-spin h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Uploading...
            </div>
          </div>
        )}

        <h3 className="text-lg font-bold mb-4">{title}</h3>

        {fields.map((field) => (
          <div key={field.name} className="mb-3">
            {field.label && (
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>
            )}
            {renderField(field)}
          </div>
        ))}

        <div className="flex justify-end space-x-2 pt-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            onClick={onSave}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Uploading...
              </>
            ) : (
              saveText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
