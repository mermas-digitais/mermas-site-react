import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'https://mermas-api.onrender.com',
        // target:'http://localhost:8080',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, '')

      }
    }
  
  }

});
