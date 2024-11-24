import { rwIndirect } from 'vite-plugin-rw-indirect-compiler';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [rwIndirect()],
    server: {
        host: '0.0.0.0',
    },
});
