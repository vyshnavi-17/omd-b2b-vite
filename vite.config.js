import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ This is all you need
export default defineConfig({
  plugins: [react()],
});
