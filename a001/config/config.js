export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva:true
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
              { path: '/dashboard/analysis', component: 'Dashboard/Ady' },
              { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
              { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
            ]
          },
        ]
        
      }],

};