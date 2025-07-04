import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/my-profile-site/",
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
            interval: 500,
        },
    },
});
