import { defineConfig } from "vite";
import { resolve } from "path";
import sitemap from 'vite-plugin-sitemap';


export default defineConfig({
  preview: {
    port: 3000, // Imposta la porta 3000 per la preview
  },
  server: {
    port: 3000,
  },
  base: '/',  // Aggiungi questa configurazione per definire il percorso base
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        retrieveReservation: resolve(__dirname, "src/Pages/retrieveReservation/retrieve-reservation.html"),
        updateBooking: resolve(__dirname, "src/Pages/updateBooking/update-booking.html"),
        privacyPolicy: resolve(__dirname, "src/Pages/privacyPolicy.html"),
        backofficeIndex: resolve(__dirname, "src/backoffice/index.html"),
        backOfficeDashboard: resolve(__dirname, "src/backoffice/Pages/dashboard.html"),
        backofficeLogin: resolve(__dirname, "src/backoffice/Pages/login.html"),
        backofficeLogout: resolve(__dirname, "src/backoffice/Pages/logout.html"),
        backOfficeRegistrationMail: resolve(__dirname, "src/backoffice/Pages/registrationMail.html"),
        backOfficeRegistrationUser: resolve(__dirname, "src/backoffice/Pages/registrationUser.html"),
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
        entryFileNames: ({ name }) => {
          if (name && name.includes("backoffice")) {
            return "backoffice/js/[name].[hash].js";
          }
          return "js/[name].[hash].js";
        },
      },
    },

    cssCodeSplit: true, // Divides css files separately
    outDir: "dist", // main output folder
  },
  plugins: [
    sitemap({
      hostname: 'https://cascinacaccia.com',
      routes: [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/src/Pages/retrieveReservation/retrieve-reservation.html', changefreq: 'weekly', priority: 0.8 },
        { url: '/src/Pages/updateBooking/update-booking.html', changefreq: 'monthly', priority: 0.6 },
        { url: '/src/Pages/privacyPolicy.html', changefreq: 'yearly', priority: 0.5 },
      ],
    }),
  ],
});
