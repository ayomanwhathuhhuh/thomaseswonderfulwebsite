import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    base: '/thomaseswonderfulwebsite/', // best not to ask why this works i really do not know
    plugins: [],
    build: {
        rollupOptions: { // dawg this gets worse the more i know
          input: {
            main: resolve(__dirname, 'index.html'),
            otherpage: resolve(__dirname, 'otherpage.html'),
          },
        },
      },
})

