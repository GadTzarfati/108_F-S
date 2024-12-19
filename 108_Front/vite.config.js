import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // מוודא שכל הנתיבים הם יחסיים
  build: {
    outDir: 'dist', // מגדיר את תיקיית ה-build כ-dist
  },
})
