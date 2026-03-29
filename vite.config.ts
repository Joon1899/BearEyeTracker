import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
         dts()
    ],
    build: {
        lib: {
            entry: 'index.ts',
            formats: ['es','cjs'],
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'], 
        }
    }
});