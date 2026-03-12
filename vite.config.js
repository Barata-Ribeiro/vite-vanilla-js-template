import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import eslint from 'vite-plugin-eslint2';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
    rolldownOptions: {
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
        minify: true,
      },
    },
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
