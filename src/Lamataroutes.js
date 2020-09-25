import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard/LamataDashboard'));
const Drivers = React.lazy(() => import('./views/Drivers/Drivers'));

const Driver = React.lazy(() => import('./views/Drivers/Driver'));









// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/lamata', exact: true, name: 'Home' },
  { path: '/lamata/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/lamata/drivers/:id', name: 'Driver Details', component: Driver },
  { path: '/lamata/drivers', exact: true, name: 'Drivers', component: Drivers },
];

export default routes;
