import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layout').default,
    routes: [
      {
        path: '/',
        component: require('../Helloworld').default,
        exact: true,
      },
      {
        path: '/helloworld',
        component: require('../Helloworld').default,
        exact: true,
      },
      {
        path: '/dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            component: require('../Dashboard/Ady').default,
            exact: true,
          },
          {
            path: '/dashboard/monitor',
            component: require('../Dashboard/Monitor').default,
            exact: true,
          },
          {
            path: '/dashboard/workplace',
            component: require('../Dashboard/Workplace').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/Administrator/Desktop/antd-bz/001/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/page', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator/Desktop/antd-bz/001/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/page', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Administrator/Desktop/antd-bz/001/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/page', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
