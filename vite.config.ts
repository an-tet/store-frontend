import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ mode }: { mode: string }) => {
  const env = loadEnv(mode, '', '');
  return {
    server: {
      host: true,
      strictPort: true,
      port: parseInt(env.VITE_SERVER_PORT),
    },
    plugins: [react()],
  };
});
