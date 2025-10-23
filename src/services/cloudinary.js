


export const uploadImageToCloudinary = async (file) => {
  const cloudName = "huzaimaikram"; 
  const uploadPreset = "agency_data";

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


