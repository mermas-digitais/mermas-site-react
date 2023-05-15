import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '',
  //   port: 3333,
  //   strictPort: true,
  //   proxy: {
  //     '/api': {
  //       target: 'https://api-mermas.onrender.com/api',
  //       changeOrigin: true,
  //       secure: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
