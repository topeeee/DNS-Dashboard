import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard/LamataDashboard'));
const Drivers = React.lazy(() => import('./views/Drivers/Drivers'));
const TrainedDrivers = React.lazy(() => import('./views/Drivers/TrainedDrivers'));
const UntrainedDrivers = React.lazy(() => import('./views/Drivers/UntrainedDrivers'));
const CertifiedDrivers = React.lazy(() => import('./views/Drivers/CertifiedDrivers'));

const Driver = React.lazy(() => import('./views/Drivers/Driver'));









// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/lamata', exact: true, name: 'Home'},
  { path: '/lamata/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/lamata/drivers/:id', name: 'Driver Details', component: Driver },
  { path: '/lamata/drivers', exact: true, name: 'Drivers', component: Drivers },
  { path: '/lamata/traineddrivers', exact: true, name: 'Trained Drivers', component: TrainedDrivers },
  { path: '/lamata/untraineddrivers', exact: true, name: 'Untrained Drivers', component: UntrainedDrivers },
  { path: '/lamata/certifieddrivers', exact: true, name: 'Certified Drivers', component: CertifiedDrivers},
];

export default routes;
