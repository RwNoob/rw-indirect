import viteRwIndirect from 'vite-plugin-rw-indirect';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        viteRwIndirect({
            autoImports: ['render'],
        }),
    ],
    server: {
        host: '0.0.0.0',
    },
});
