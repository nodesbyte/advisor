// src/services/supabasePDF.js
import { supabase } from './supabaseClient';

const BUCKET_NAME = 'pdfs';
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

/**
 * Upload PDF to Supabase Storage
 * @param {File} file - PDF file to upload
 * @returns {Promise<string>} - Public URL of uploaded PDF
 */
export const uploadPDFToSupabase = async (file) => {
  // Validate file
  if (!file || !(file instanceof File)) {
    throw new Error('Invalid file object. Make sure you select a file.');
  }

  if (!file.type.includes('pdf')) {
    throw new Error('Only PDF files are allowed.');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`File size exceeds 50MB limit. Your file is ${(file.size / 1024 / 1024).toFixed(2)}MB`);
  }

  // Create unique filename - sanitize special characters
  const sanitizedName = file.name
    .replace(/[^a-zA-Z0-9.-]/g, '_') // Replace special chars with underscore
    .replace(/\.pdf$/i, ''); // Remove .pdf extension
  
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}_${sanitizedName}.pdf`;
  const filePath = `insights/${fileName}`; // Keep consistent folder structure

  try {
    console.log('Uploading file:', fileName, 'to path:', filePath);

    // Upload file
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false, // Set to true only if you want to overwrite existing files
      });

    if (error) {
      console.error('Supabase upload error:', error);
      throw error;
    }

    console.log('Upload successful:', data);

    // Get public URL
    const { data: publicData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    console.log('Public URL:', publicData.publicUrl);
    return publicData.publicUrl;
  } catch (err) {
    console.error('PDF upload error:', err);
    throw new Error(`Failed to upload PDF: ${err.message || 'Unknown error'}`);
  }
};

/**
 * Delete PDF from Supabase Storage
 * @param {string} publicUrl - Public URL of the PDF to delete
 */
export const deletePDFFromSupabase = async (publicUrl) => {
  try {
    // Extract file path from public URL
    // URL format: https://cazraydvxaqbneylvyse.supabase.co/storage/v1/object/public/pdfs/insights/filename.pdf
    const urlParts = publicUrl.split('/storage/v1/object/public/')[1];
    if (!urlParts) throw new Error('Invalid PDF URL format');

    const filePath = decodeURIComponent(urlParts.split(`${BUCKET_NAME}/`)[1]);
    
    console.log('Deleting file at path:', filePath);

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) throw error;
    
    console.log('File deleted successfully');
  } catch (err) {
    console.error('PDF deletion error:', err);
    throw new Error(`Failed to delete PDF: ${err.message || 'Unknown error'}`);
  }
};