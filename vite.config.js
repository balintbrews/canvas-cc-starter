import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const DIR = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@/lib/utils",
        replacement: path.resolve(DIR, "./src/lib/utils.ts"),
      },
      {
        find: "@/lib/FormattedText",
        replacement: path.resolve(DIR, "./src/lib/FormattedText.jsx"),
      },
      {
        // Make sure we don't resolve nested folder structures under
        // `@/components/`, like `@/components/atoms/button`.
        // Those are not (yet) supported in Drupal Canvas.
        find: /^@\/components\/([a-z_-]+)$/,
        replacement: path.resolve(DIR, "./src/components/$1"),
      },
    ],
  },
});
