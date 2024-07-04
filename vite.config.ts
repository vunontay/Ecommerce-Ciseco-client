import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        minify: "esbuild", // Sử dụng 'esbuild' để minify JavaScript
        cssCodeSplit: true, // Tách riêng CSS thành các tệp riêng
    },
});
