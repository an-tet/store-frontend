import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [
        'src/main.tsx',
        '**/index.ts',
        '**/constants',
        '**/types.ts',
        '**/interfaces',
      ],
      reporter: ['lcov', 'text'],
    },
  },
});
