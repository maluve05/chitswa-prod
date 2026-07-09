import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Order matters: TanStackRouter must come before react
    TanStackRouterVite({ autoCodeSplitting: true }),
    tanstackStart({ server: { entry: "server" } }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 8080,
    strictPort: true,
    host: true,
  },
});

