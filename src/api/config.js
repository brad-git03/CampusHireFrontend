import axios from 'axios';

// ----------------------------------------------------
// 1. PRODUCTION (Vercel)
// ----------------------------------------------------
// This pulls the URL you set in Vercel Environment Variables.
// If this exists, it uses it. If not, it falls back to the others.
const ENV_URL = process.env.EXPO_PUBLIC_API_URL;

// ----------------------------------------------------
// 2. LOCAL DEVELOPMENT (Fallbacks)
// ----------------------------------------------------
// OPTION 1: Android Emulator (default fallback)
const LOCAL_URL = 'http://10.0.2.2:8000'; 

// OPTION 2: Physical Device (Uncomment if needed for local testing)
// const LOCAL_URL = 'http://192.168.1.5:8000';

// LOGIC: Use Vercel URL first; if not found, use Local URL
const BASE_URL = ENV_URL || LOCAL_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});

export default api;