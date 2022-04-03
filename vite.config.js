// vite.config.(js|ts)
// config for pug
import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

// config for multi-page
import { resolve } from 'path'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: 'My Pug' }

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'detail/index.html'),
      },
    },
  },
})
