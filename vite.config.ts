import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import StylelintPlugin from 'vite-plugin-stylelint';

const config = {
    plugins: [
        react(),
        svgr(),
        eslint(),
        StylelintPlugin({
            fix: true,
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/configs/SetupTests.ts',
        coverage: {
            provider: 'istanbul',
            perFile: true,
        },
    },
};

// https://vitejs.dev/config/
export default defineConfig(config);
