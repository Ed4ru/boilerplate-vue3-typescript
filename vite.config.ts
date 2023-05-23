import { defineConfig, loadEnv } from 'vite';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '#': resolve(__dirname, './src/components')
      }
    },
    plugins: [
      vue({ reactivityTransform: true }),
      vueI18n({ include: resolve(__dirname, './src/assets/i18n/**') }),
      eslintPlugin()
    ],
    server: {
      port: parseInt(process.env.VITE_PORT) || 3333
    }
  });
};
