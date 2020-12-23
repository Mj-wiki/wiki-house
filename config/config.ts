import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  dva: {},
  dynamicImport: {},
  routes: [
    {
      path: '/login',
      component: '@/pages/login/index',
      title: '登录',
    },
    {
      path: '/',
      wrappers: ['@/wrappers/auth'],
      component: '@/pages/table/_layout',
      routes: [
        { exact: true, path: '/', redirect: '/login' },
        {
          path: '/table/homePage',
          component: '@/pages/table/homePage/homePage',
          title: '首页',
        },
        {
          path: '/table/projectManagement',
          component: '@/pages/table/projectManagement/projectManagement',
          title: '项目管理页',
        },
        {
          path: '/table/application',
          component: '@/pages/table/application/application',
          title: '应用页',
        },
        {
          path: '/table/checkAppDetail/:appId',
          component: '@/pages/table/application/checkAppDetail',
          title: '查询页',
        },
        {
          path: '/table/checkConceptDetail/:appId',
          component: '@/pages/table/application/checkConceptDetail',
          title: '概念详情页',
        },
        {
          path: '/table/projectDetail',
          component: '@/pages/table/projectDetail/projectDetail',
          title: '概念详情页',
        },
      ],
    },
  ],
  proxy: {
    '/api': {
      target: 'http://120.221.160.106:8000',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '/api'
      // }
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    assets: path.resolve(__dirname, 'src/assets'),
    services: path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'src/utils'),
  },
});
