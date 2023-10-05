import { defineConfig } from 'vite'

import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
      ]
    }
  }
})
