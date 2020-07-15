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
const Partners =  React.lazy(() => import('./views/Setup/partners/Partners'));
const ActivePartners =  React.lazy(() => import('./views/Setup/partners/ActivePartners'));
const InactivePartners =  React.lazy(() => import('./views/Setup/partners/InactivePartners'));
const AllRequestVehicles = React.lazy(() => import('./views/Vehicle/AllRequestVehicles'));
const MeRequestVehicles = React.lazy(() => import('./views/Vehicle/MeRequestVehicles'));








// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/operator', exact: true, name: 'Home' },
  { path: '/operator/dashboard', name: 'Dashboard', component: OperatorDashboard },
  { path: '/operator/partners/active', exact: true, name: 'Active Partners', component: ActivePartners},
  { path: '/operator/partners/inactive', exact: true, name: 'Inactive Partners', component: InactivePartners},
  { path: '/operator/partners', exact: true, name: 'Partners', component: Partners},
  { path: '/operator/drivers/active', exact: true, name: 'Active Drivers', component: ActiveDrivers},
  { path: '/operator/drivers/inactive', exact: true, name: 'Inactive Drivers', component: InactiveDrivers},
  { path: '/operator/drivers/pending', exact: true, name: 'Pending Drivers', component: PendingDrivers },
  { path: '/operator/areas', name: 'Areas', component: Area },
  { path: '/operator/modes', name: 'Mode', component: Mode },
  { path: '/operator/vehicles/requestall', name: 'Vehicles', component: AllRequestVehicles },
  { path: '/operator/vehicles/requestme', name: 'Vehicles', component: MeRequestVehicles },
  { path: '/operator/vehicles/active', name: 'Active Vehicles', component: ActiveVehicles },
  { path: '/operator/vehicles/inactive', name: 'Inactive Vehicles', component: InactiveVehicles },
  { path: '/operator/vehicles/pending', name: 'Pending Vehicles', component: PendingVehicles },
  { path: '/operator/vehicles/:id', exact: true, name: 'Vehicle Details', component: Vehicle },
  { path: '/operator/vehicles', name: 'Vehicles', component: Vehicles },
  { path: '/operator/busstops', name: 'Bus Stops', component: BusStops },
  { path: '/operator/routes', name: 'Routes', component: Routes },
  { path: '/operator/states', name: 'States', component: States },
  { path: '/operator/zones', name: 'Zones', component: Zones },
  // { path: '/ratings/driver', name: 'Driver Ratings', component: DriverRatings },
  // { path: '/ratings/bus', name: 'Bus Ratings', component: BusRatings },
  // { path: '/payments/promo', name: 'Promo', component: Promo },
  // { path: '/payments/refunds/pending', name: 'Pending Refunds', component: PendingRefunds },
  // { path: '/payments/refunds/completed', name: 'Completed Refunds', component: CompletedRefunds },
  // { path: '/payments/successful', name: 'Successful Payments', component: SuccessfulPayments },
  // { path: '/payments/unsuccessful', name: 'Unsuccessful Payments', component: UnsuccessfulPayments },
  // { path: '/payments/refunds', name: 'Refunds', component: RefundPayments },
  // { path: '/payments', name: 'Payments', component: Payments },
  { path: '/operator/trips/cancelled', name: 'Cancelled Trips', component: CancelledTrips },
  { path: '/operator/trips/overview', name: 'Trips Overview', component: TripsOverView },
  { path: '/operator/trips/transit', name: 'Transit Trips', component: TransitTrips },
  { path: '/operator/trips/completed', name: 'Completed Trips', component: CompletedTrips },
  { path: '/operator/trips/waiting', name: 'Waiting Trips', component: WaitingTrips },
  { path: '/operator/trips/:id', name: 'Trip Details', component: Trip },
  { path: '/operator/trips', name: 'Trips', component: Trips },
  { path: '/operator/busassisstants/active', exact: true, name: 'Active Bus Assistants', component: ActiveBusAssistants },
  { path: '/operator/busassisstants/inactive', exact: true, name: 'Inactive Bus Assistants', component: InactiveBusAssistants },
  { path: '/operator/busassisstants/pending', exact: true, name: 'Pending Bus Assistants', component: PendingBusAssistant },
  { path: '/operator/busassisstants', exact: true, name: 'Bus Assistants', component: BusAssistants },
  { path: '/operator/busassisstants/:id', exact: true, name: 'Bus Assistant Details', component: BusAssistant },
  { path: '/operator/drivers/:id', name: 'Driver Details', component: Driver },
  { path: '/operator/drivers', exact: true, name: 'Drivers', component: Drivers },
  { path: '/operator/passengers/active', name: 'Active Passengers', component: ActiveUsers },
  { path: '/operator/passengers/overview', name: 'Passengers Overview', component: UsersOverview },
  { path: '/operator/passengers/inactive', name: 'Inactive Passengers', component: InactiveUsers },
  { path: '/operator/passengers/:id', exact: true, name: 'Passenger Details', component: User },
  { path: '/operator/passengers', exact: true,  name: 'Passengers', component: Users },

];

export default routes;
