// src/services/cloudinary.js
export const uploadImageToCloudinary = async (file) => {
  const cloudName = "dnyiq1pbt"; // 🔹 Replace with your Cloudinary cloud name
  const uploadPreset = "ml_default"; // 🔹 Replace with your unsigned preset

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url; // ✅ This is the URL to store in Firestore
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};


