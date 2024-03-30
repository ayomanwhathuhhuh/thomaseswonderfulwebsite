import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    base: '/thomaseswonderfulwebsite/', // best not to ask why this works i really do not know
    plugins: [],
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'nested/index.html'),
          },
        },
      },
})

