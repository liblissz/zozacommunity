import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // bind to 0.0.0.0
    port: parseInt(process.env.PORT) || 4173,
    strictPort: false,
    allowedHosts: ["zozacommunity.onrender.com"]
  }
});
