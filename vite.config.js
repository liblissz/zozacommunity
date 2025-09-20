import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT) || 4173,
    host: true,
    strictPort: false,
    allowedHosts: ["zozacommunity.onrender.com"] // ✅ add your Render domain here
  }
});
