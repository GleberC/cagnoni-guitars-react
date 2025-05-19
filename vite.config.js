// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cagnoni_guitars_react/', // ← EXATAMENTE como o nome do repo
  plugins: [react()],
});
