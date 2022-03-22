import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

const aliases = {
  '@': path.resolve(__dirname, './src'),
  '@components': path.resolve(__dirname, './src/components'),
  '@pages': path.resolve(__dirname, './src/pages'),
  '@config': path.resolve(__dirname, './src/config'),
  '@store': path.resolve(__dirname, './src/store'),
  '@router': path.resolve(__dirname, './src/router'),
  '@utils': path.resolve(__dirname, './src/utils'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: aliases,
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
});
