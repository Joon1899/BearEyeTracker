import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({ include: ['BearEyeTracker.tsx', 'src'] })
    ],
    build: {
        lib: {
            entry: 'index.ts',
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react', 'react-dom'], 
        }
    }
});