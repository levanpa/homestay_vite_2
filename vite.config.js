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
        home: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'detail/index.html'),
        style: resolve(__dirname, 'src/style.sass'),
        script: resolve(__dirname, 'main.js'),
      },
      // output: {
      //   assetFileNames: (assetInfo) => {
      //     let extType = assetInfo.name.split('.').at(1);
      //     if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
      //       extType = 'img';
      //     }
      //     return `assets/${extType}/[name]-[hash][extname]`;
      //   },
      // },
    },
    // resolve: {
    //   alias: {
    //     '/src/img': resolve(__dirname, '/assets/'),
    //   },
    // },
  },
})
