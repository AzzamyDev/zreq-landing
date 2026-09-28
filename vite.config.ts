import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site (github.io/zreq-landing/).
// Override with VITE_BASE env var for custom domain (e.g. VITE_BASE=/).
const base = process.env.VITE_BASE ?? '/zreq-landing/'

export default defineConfig({
  plugins: [react()],
  base,
})
