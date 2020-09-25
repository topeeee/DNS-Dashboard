import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Drivers = React.lazy(() => import('./views/Drivers/Drivers'));
const Driver = React.lazy(() => import('./views/Drivers/Driver'));






// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/drivers/:id', name: 'Driver Details', component: Driver },
  { path: '/drivers', exact: true, name: 'Drivers', component: Drivers },

];

export default routes;
