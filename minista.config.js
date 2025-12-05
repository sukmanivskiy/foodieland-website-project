import { defineConfig } from 'minista'
import path from 'path'

/**
 * @see https://minista.qranoko.jp/docs/config-file
 */


export default defineConfig({
  root: '',
  base: '/',
  public: 'public',
  out: 'dist',

  assets: {
    outDir: 'assets',
    outName: '[name]',

    images: {
      outDir: 'assets/images',
      outName: '[name]',
      remoteName: 'remote',
      optimize: {
        layout: 'constrained',
        breakpoints: [
          360, 400, 640, 800, 1024, 1280, 1440, 1920,
        ],
        resolution: [1, 2],
        format: 'webp',
        formatOptions: {
          webp: {
            quality: 30,
            alphaQuality: 100,
            lossless: false,
          },
        },
        fit:'cover',
        background: undefined,
      },
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp'],
    },

    svgr: {
      svgrOptions: {},
    },

    icons: {
      srcDir: 'src/assets/icons',
      outDir: 'assets/images',
      outName: '[dirname]',
      svgstoreOptions: {
        cleanSymbols: ['fill', 'stroke'],
      },
    },


    fonts: {
      outDir: 'assets/fonts',
      outName: '[name]',
    },

    bundle: {
      outName: 'bundle',
    },
  },

  resolve: {
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },

  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {},
      stylus: {},
    },
  },

  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/bundle.css'
            }
            return 'assets/[name].[ext]'
          }
        }
      }
    }
  },
})
