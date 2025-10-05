import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modulePath = id.split('node_modules/')[1];

            const topLevelFolder = modulePath?.split('/')[0];

            if (!topLevelFolder) {
              const scopedPackageName = modulePath?.split('/')[1];
              return scopedPackageName?.split('@')[
                scopedPackageName.startsWith('@') ? 1 : 0
              ];
            }

            return topLevelFolder;
          }

          return null;
        },
      },
    },
    minify: 'esbuild',
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
      include: ['src/**/*.js', 'src/**/*.mjs', 'src/**/*.cjs', 'src/**/*.ts'],
      exclude: ['node_modules', 'dist', 'build'],
    }),
  ],
});
