export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
      ],
      routes: [{
        path: '/',
        component: '../layout',
        routes: [
          {
            path: '/',
            component: 'Helloworld',
          },
          {
            path: '/helloworld',
            component: 'Helloworld'
          },
          {
            path: '/dashboard',
            routes: [
              { path: '/dashboard/明白卡', component: 'Dashboard/明白卡' },
              { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
              { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
            ]
          },
        ]
      }],

};