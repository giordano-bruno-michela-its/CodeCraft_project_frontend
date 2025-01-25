import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        backoffice: 'src/backoffice/index.html',
        retrieveReservation: "src/Pages/retrieve-reservation.html",
      },
      output: {
        // custom output folder
        assetFileNames: ({ names }) => {
          const name = names.find((name) => name.endsWith(".css"));
          if (name && name.endsWith(".css")) {
            return "styles/[name].[ext]"; // css files in folder styles
          }
          return "assets/[name].[ext]"; // other assets
        },
        chunkFileNames: "js/[name].[hash].js", // chunk JS
        entryFileNames: "js/[name].[hash].js", // main js file
      },
    },

    cssCodeSplit: true, // Divides css files separately
    outDir: "dist", // main output folder
  },
});
