import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
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
const Payments = React.lazy(() => import('./views/Payments/Payments'));
const SuccessfulPayments = React.lazy(() => import('./views/Payments/SuccessfulPayments'));
const UnsuccessfulPayments = React.lazy(() => import('./views/Payments/UnsuccessfulPayments'));
const RefundPayments = React.lazy(() => import('./views/Payments/Refunds'));
const PendingRefunds = React.lazy(() => import('./views/Payments/PendingRefunds'));
const CompletedRefunds = React.lazy(() => import('./views/Payments/CompletedRefunds'));
const Promo = React.lazy(() => import('./views/Payments/Promo'));
const DriverRatings = React.lazy(() => import('./views/Ratings/DriverRatings'));
const BusRatings = React.lazy(() => import('./views/Ratings/BusRatings'));
const Mode = React.lazy(() => import('./views/Mode/Mode'));
const States = React.lazy(() => import('./views/Setup/State'));
const Zones = React.lazy(() => import('./views/Setup/Zone'));
const Routes = React.lazy(() => import('./views/Setup/Routes'));
const BusStops = React.lazy(() => import('./views/Setup/BusStop'));
const Vehicles = React.lazy(() => import('./views/Vehicle/Vehicles'));
const Operators =  React.lazy(() => import('./views/Setup/operator/Operators'));
const ActiveOperators =  React.lazy(() => import('./views/Setup/operator/ActiveOperator'));
const InactiveOperators =  React.lazy(() => import('./views/Setup/operator/InactiveOperator'));
const ActiveDrivers = React.lazy(() => import('./views/Drivers/ActiveDrivers'));
const InactiveDrivers = React.lazy(() => import('./views/Drivers/InactiveDrivers'));
const PendingDrivers = React.lazy(() => import('./views/Drivers/PendingDrivers'));
const Operator =  React.lazy(() => import('./views/Setup/operator/Operator'));
const ActiveVehicles = React.lazy(() => import('./views/Vehicle/ActiveVehicles'));
const InactiveVehicles = React.lazy(() => import('./views/Vehicle/InactiveVehicles'));
const PendingVehicles = React.lazy(() => import('./views/Vehicle/PendingVehicles'));
const Vehicle = React.lazy(() => import('./views/Vehicle/Vehicle'));
const UsersOverview =  React.lazy(() => import('./views/Users/UsersOverView'));
const Partners =  React.lazy(() => import('./views/Setup/partners/Partners'));
const ActivePartners =  React.lazy(() => import('./views/Setup/partners/ActivePartners'));
const InactivePartners =  React.lazy(() => import('./views/Setup/partners/InactivePartners'));







// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/operator/dashboard', name: 'Dashboard', component: OperatorDashboard },
  { path: '/drivers/active', exact: true, name: 'Active Drivers', component: ActiveDrivers},
  { path: '/partners/active', exact: true, name: 'Active Partners', component: ActivePartners},
  { path: '/partners/inactive', exact: true, name: 'Inactive Partners', component: InactivePartners},
  { path: '/partners', exact: true, name: 'Partners', component: Partners},
  { path: '/drivers/inactive', exact: true, name: 'Inactive Drivers', component: InactiveDrivers},
  { path: '/drivers/pending', exact: true, name: 'Pending Drivers', component: PendingDrivers },
  { path: '/areas', name: 'Areas', component: Area },
  { path: '/modes', name: 'Mode', component: Mode },
  { path: '/operators/active', name: 'Active Operators', component: ActiveOperators },
  { path: '/operators/inactive', name: 'Inactive Operators', component: InactiveOperators },
  { path: '/operators/:id', exact: true, name: 'Operator Details', component: Operator },
  { path: '/operators', name: 'Operators', component: Operators },
  { path: '/vehicles/active', name: 'Active Vehicles', component: ActiveVehicles },
  { path: '/vehicles/inactive', name: 'Inactive Vehicles', component: InactiveVehicles },
  { path: '/vehicles/pending', name: 'Pending Vehicles', component: PendingVehicles },
  { path: '/vehicles/:id', exact: true, name: 'Vehicle Details', component: Vehicle },
  { path: '/vehicles', name: 'Vehicles', component: Vehicles },
  { path: '/busstops', name: 'Bus Stops', component: BusStops },
  { path: '/routes', name: 'Routes', component: Routes },
  { path: '/states', name: 'States', component: States },
  { path: '/zones', name: 'Zones', component: Zones },
  { path: '/ratings/driver', name: 'Driver Ratings', component: DriverRatings },
  { path: '/ratings/bus', name: 'Bus Ratings', component: BusRatings },
  { path: '/payments/promo', name: 'Promo', component: Promo },
  { path: '/payments/refunds/pending', name: 'Pending Refunds', component: PendingRefunds },
  { path: '/payments/refunds/completed', name: 'Completed Refunds', component: CompletedRefunds },
  { path: '/payments/successful', name: 'Successful Payments', component: SuccessfulPayments },
  { path: '/payments/unsuccessful', name: 'Unsuccessful Payments', component: UnsuccessfulPayments },
  { path: '/payments/refunds', name: 'Refunds', component: RefundPayments },
  { path: '/payments', name: 'Payments', component: Payments },
  { path: '/trips/cancelled', name: 'Cancelled Trips', component: CancelledTrips },
  { path: '/trips/overview', name: 'Trips Overview', component: TripsOverView },
  { path: '/trips/transit', name: 'Transit Trips', component: TransitTrips },
  { path: '/trips/completed', name: 'Completed Trips', component: CompletedTrips },
  { path: '/trips/waiting', name: 'Waiting Trips', component: WaitingTrips },
  { path: '/trips/:id', name: 'Trip Details', component: Trip },
  { path: '/trips', name: 'Trips', component: Trips },
  { path: '/busassisstants/active', exact: true, name: 'Active Bus Assistants', component: ActiveBusAssistants },
  { path: '/busassisstants/inactive', exact: true, name: 'Inactive Bus Assistants', component: InactiveBusAssistants },
  { path: '/busassisstants/pending', exact: true, name: 'Pending Bus Assistants', component: PendingBusAssistant },
  { path: '/busassisstants', exact: true, name: 'Bus Assistants', component: BusAssistants },
  { path: '/busassisstants/:id', exact: true, name: 'Bus Assistant Details', component: BusAssistant },
  { path: '/drivers/:id', name: 'Driver Details', component: Driver },
  { path: '/drivers', exact: true, name: 'Drivers', component: Drivers },
  { path: '/users/active', name: 'Active Users', component: ActiveUsers },
  { path: '/users/inactive', name: 'Inactive Users', component: InactiveUsers },
  { path: '/users/overview', name: 'Users Overview', component: UsersOverview },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/users', exact: true,  name: 'Users', component: Users },

];

export default routes;
