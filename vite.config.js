import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import preload from "vite-plugin-preload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),preload()],
  server: {
    port: 3006,
  },
})

