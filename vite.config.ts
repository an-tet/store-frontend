import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ mode }: { mode: string }) => {
  const env = loadEnv(mode, '', '');
  return {
    hmr: false,
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      host: true,
      strictPort: true,
      port: parseInt(env.VITE_SERVER_PORT),
    },
    plugins: [react()],
  };
});
