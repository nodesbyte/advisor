
// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cazraydvxaqbneylvyse.supabase.co';

// IMPORTANT: For client-side file uploads, use the anon key from API Keys page
// Go to Settings > API > Under "anon public" section
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhenJheWR2eGFxYm5leWx2eXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3ODgzODEsImV4cCI6MjA3NjM2NDM4MX0.beS1HcoPzTsyoAUcIDC-03ByvffYmMZGYEORik_0BP0'; // Replace with actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);