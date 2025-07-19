import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageAltGenerator from 'image-alt-title-generator/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imageAltGenerator({
      parserOptions: {
        prefix: 'Photo of',
        suffix: 'image',
        removeNumbers: true,
        customMappings: {
          'logo': 'Company Logo',
          'avatar': 'User Avatar Image'
        }
      },
      generateTitle: true,
      generateAlt: true,
      fallbackAlt: 'Image',
      fallbackTitle: 'Image'
    })
  ],
}) 