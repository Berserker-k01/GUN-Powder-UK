import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Utiliser le port 3000 pour le développement
    strictPort: true // Empêche l'utilisation d'un autre port si 3000 est occupé
  },
});
