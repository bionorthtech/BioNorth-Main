import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project is served from a GitHub Pages project path:
//   https://bionorthtech.github.io/Bionorth-Website/
// If you move to the custom domain bionorth.us, set base to "/" and add
// public/CNAME containing "bionorth.us".
export default defineConfig({
  plugins: [react()],
  base: "/Bionorth-Website/",
});
