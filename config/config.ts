import { defineConfig } from 'umi';
import path from 'path';
import Router from './router';
export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  dva: {},
  dynamicImport: {},
  routes: Router,
  proxy: {
    '/apl': {
      target: 'http://120.221.160.106:8000/apl',
      changeOrigin: true,
      pathRewrite: { '^/apl': '' },
    },
    '/apc': {
      target: 'http://120.221.160.5:9002',
      changeOrigin: true,
      pathRewrite: { '^/apc': '' },
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    assets: path.resolve(__dirname, 'src/assets'),
    services: path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'src/utils'),
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'gzip',
  },
  links: [{ rel: 'icon', href: 'img/favicon.ico' }],
});
