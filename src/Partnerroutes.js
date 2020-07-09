import React from 'react';

const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const OperatorDashboard = React.lazy(() => import('./views/Dashboard/OperatorDashboard'));
const Area = React.lazy(() => import('./views/Setup/Area'));
const ActiveUsers = React.lazy(() => import('./views/Users/ActiveUsers'));
const InactiveUsers = React.lazy(() => import('./views/Users/InactiveUsers'));
const Drivers = React.lazy(() => import('./views/Drivers/Drivers'));
const Driver = React.lazy(() => import('./views/Drivers/Driver'));
const InactiveBusAssistants = React.lazy(() => import('./views/BusAssistants/InactiveBusAssistants'));
const ActiveBusAssistants = React.lazy(() => import('./views/BusAssistants/ActiveBusAssistants'));
const BusAssistants = React.lazy(() => import('./views/BusAssistants/BusAssistants'));
const BusAssistant = React.lazy(() => import('./views/BusAssistants/BusAssistant'));
const PendingBusAssistant = React.lazy(() => import('./views/BusAssistants/PendingBusAssistants'));
const Trips = React.lazy(() => import('./views/Trips/Trips'));
const TripsOverView = React.lazy(() => import('./views/Trips/TripsOverView'));
const CancelledTrips = React.lazy(() => import('./views/Trips/CancelledTrips'));
const TransitTrips = React.lazy(() => import('./views/Trips/TransitTrips'));
const CompletedTrips = React.lazy(() => import('./views/Trips/CompletedTrips'));
const WaitingTrips = React.lazy(() => import('./views/Trips/WaitingTrips'));
const Trip = React.lazy(() => import('./views/Trips/Trip'));
// const Payments = React.lazy(() => import('./views/Payments/Payments'));
// const SuccessfulPayments = React.lazy(() => import('./views/Payments/SuccessfulPayments'));
// const UnsuccessfulPayments = React.lazy(() => import('./views/Payments/UnsuccessfulPayments'));
// const RefundPayments = React.lazy(() => import('./views/Payments/Refunds'));
// const PendingRefunds = React.lazy(() => import('./views/Payments/PendingRefunds'));
// const CompletedRefunds = React.lazy(() => import('./views/Payments/CompletedRefunds'));
// const Promo = React.lazy(() => import('./views/Payments/Promo'));
// const DriverRatings = React.lazy(() => import('./views/Ratings/DriverRatings'));
// const BusRatings = React.lazy(() => import('./views/Ratings/BusRatings'));
const Mode = React.lazy(() => import('./views/Mode/Mode'));
const States = React.lazy(() => import('./views/Setup/State'));
const Zones = React.lazy(() => import('./views/Setup/Zone'));
const Routes = React.lazy(() => import('./views/Setup/Routes'));
const BusStops = React.lazy(() => import('./views/Setup/BusStop'));
const Vehicles = React.lazy(() => import('./views/Vehicle/Vehicles'));
const ActiveDrivers = React.lazy(() => import('./views/Drivers/ActiveDrivers'));
const InactiveDrivers = React.lazy(() => import('./views/Drivers/InactiveDrivers'));
const PendingDrivers = React.lazy(() => import('./views/Drivers/PendingDrivers'));
// const Operator =  React.lazy(() => import('./views/Setup/operator/Operator'));
const ActiveVehicles = React.lazy(() => import('./views/Vehicle/ActiveVehicles'));
const InactiveVehicles = React.lazy(() => import('./views/Vehicle/InactiveVehicles'));
const PendingVehicles = React.lazy(() => import('./views/Vehicle/PendingVehicles'));
const Vehicle = React.lazy(() => import('./views/Vehicle/Vehicle'));
const UsersOverview =  React.lazy(() => import('./views/Users/UsersOverView'));







// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/partner', exact: true, name: 'Home' },
  { path: '/partner/dashboard', name: 'Dashboard', component: OperatorDashboard },
  { path: '/partner/drivers/active', exact: true, name: 'Active Drivers', component: ActiveDrivers},
  { path: '/partner/drivers/inactive', exact: true, name: 'Inactive Drivers', component: InactiveDrivers},
  { path: '/partner/drivers/pending', exact: true, name: 'Pending Drivers', component: PendingDrivers },
  { path: '/partner/areas', name: 'Areas', component: Area },
  { path: '/partner/modes', name: 'Mode', component: Mode },
  { path: '/partner/vehicles/active', name: 'Active Vehicles', component: ActiveVehicles },
  { path: '/partner/vehicles/inactive', name: 'Inactive Vehicles', component: InactiveVehicles },
  { path: '/partner/vehicles/pending', name: 'Pending Vehicles', component: PendingVehicles },
  { path: '/partner/vehicles/:id', exact: true, name: 'Vehicle Details', component: Vehicle },
  { path: '/partner/vehicles', name: 'Vehicles', component: Vehicles },
  { path: '/partner/busstops', name: 'Bus Stops', component: BusStops },
  { path: '/partner/routes', name: 'Routes', component: Routes },
  { path: '/partner/states', name: 'States', component: States },
  { path: '/partner/zones', name: 'Zones', component: Zones },
  // { path: '/ratings/driver', name: 'Driver Ratings', component: DriverRatings },
  // { path: '/ratings/bus', name: 'Bus Ratings', component: BusRatings },
  // { path: '/payments/promo', name: 'Promo', component: Promo },
  // { path: '/payments/refunds/pending', name: 'Pending Refunds', component: PendingRefunds },
  // { path: '/payments/refunds/completed', name: 'Completed Refunds', component: CompletedRefunds },
  // { path: '/payments/successful', name: 'Successful Payments', component: SuccessfulPayments },
  // { path: '/payments/unsuccessful', name: 'Unsuccessful Payments', component: UnsuccessfulPayments },
  // { path: '/payments/refunds', name: 'Refunds', component: RefundPayments },
  // { path: '/payments', name: 'Payments', component: Payments },
  { path: '/partner/trips/cancelled', name: 'Cancelled Trips', component: CancelledTrips },
  { path: '/partner/trips/overview', name: 'Trips Overview', component: TripsOverView },
  { path: '/partner/trips/transit', name: 'Transit Trips', component: TransitTrips },
  { path: '/partner/trips/completed', name: 'Completed Trips', component: CompletedTrips },
  { path: '/partner/trips/waiting', name: 'Waiting Trips', component: WaitingTrips },
  { path: '/partner/trips/:id', name: 'Trip Details', component: Trip },
  { path: '/partner/trips', name: 'Trips', component: Trips },
  { path: '/partner/busassisstants/active', exact: true, name: 'Active Bus Assistants', component: ActiveBusAssistants },
  { path: '/partner/busassisstants/inactive', exact: true, name: 'Inactive Bus Assistants', component: InactiveBusAssistants },
  { path: '/partner/busassisstants/pending', exact: true, name: 'Pending Bus Assistants', component: PendingBusAssistant },
  { path: '/partner/busassisstants', exact: true, name: 'Bus Assistants', component: BusAssistants },
  { path: '/partner/busassisstants/:id', exact: true, name: 'Bus Assistant Details', component: BusAssistant },
  { path: '/partner/drivers/:id', name: 'Driver Details', component: Driver },
  { path: '/partner/drivers', exact: true, name: 'Drivers', component: Drivers },
  { path: '/partner/passengers/active', name: 'Active Passengers', component: ActiveUsers },
  { path: '/partner/passengers/overview', name: 'Passengers Overview', component: UsersOverview },
  { path: '/partner/passengers/inactive', name: 'Inactive Passengers', component: InactiveUsers },
  { path: '/partner/passengers/:id', exact: true, name: 'Passenger Details', component: User },
  { path: '/partner/passengers', exact: true,  name: 'Passengers', component: Users },

];

export default routes;
