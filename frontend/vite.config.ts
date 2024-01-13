
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/myapp96a2091a4e8444c59f27ef19791bd1e8/',
    build: {
      outDir: '.output/myapp96a2091a4e8444c59f27ef19791bd1e8',
      emptyOutDir: true
    },
    server: {
      host: true,
      strictPort: true,
      port: 5173
    }
  })
