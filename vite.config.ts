import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const slug = process.env.REPO_SLUG;
if (!slug) {
  throw new Error('REPO_SLUG is not set');
}

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${slug}/`,
  plugins: [react()],
})
