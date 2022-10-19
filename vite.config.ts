import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "#": path.resolve(__dirname, "./src/components"),
      },
    },
    plugins: [vue({ reactivityTransform: true }), vueI18n()],
    server: {
      port: parseInt(env.VITE_PORT) || 3333,
    },
  };
});
