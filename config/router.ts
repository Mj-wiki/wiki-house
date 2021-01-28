const Router = [
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
        path:
          '/table/checkConceptDetail/:appId/:itemId/:conceptName/:projectId/:code/:name',
        component: '@/pages/table/application/checkConceptDetail',
        title: '应用概念详情页',
      },
      {
        path: '/table/projectDetail/:ID',
        component: '@/pages/table/projectDetail/projectDetail',
        title: '概念详情页',
      },
    ],
  },
];

export default Router;
