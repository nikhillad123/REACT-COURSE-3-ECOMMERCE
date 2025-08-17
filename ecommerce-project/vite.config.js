import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load the environment variables from .env files
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          // Use process.env directly
          target: env.VITE_BACKEND_URL,
        },
        '/images': {
          // Use process.env directly
          target: env.VITE_BACKEND_URL,
        },
      },
    },
  };
});