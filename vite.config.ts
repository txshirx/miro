import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPatns from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPatns(), tailwindcss()],
});
