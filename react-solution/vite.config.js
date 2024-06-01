import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/company":"http://localhost:8080",
      "company/categories/productName/:productid":"http://localhost:8080"
    }
  }
})
