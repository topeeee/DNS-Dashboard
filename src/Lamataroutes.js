import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const OperatorDashboard = React.lazy(() => import('./views/Dashboard/OperatorDashboard'));
const Area = React.lazy(() => import('./views/Setup/Area'));
const ActiveUsers = React.lazy(() => import('./views/Users/ActiveUsers'));
const InactiveUsers = React.lazy(() => import('./views/Users/InactiveUsers'));
const Drivers = React.lazy(() => import('./views/Drivers/Drivers'));
const AllApplicationDrivers = React.lazy(() => import('./views/Drivers/AllApplicationDrivers'));
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
const FlaggedDrivers= React.lazy(() => import('./views/Drivers/FlaggedDrivers'));
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
const Service = React.lazy(() => import('./views/Setup/Service'));
const TrainLine = React.lazy(() => import('./views/TrainLine/TrainLine'));
const TrainStop = React.lazy(() => import('./views/TrainLine/TrainStop'));
const FerryStop = React.lazy(() => import('./views/Ferry/FerryStop'));







// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/lamata', exact: true, name: 'Home' },
  { path: '/lamata/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/lamata/operator/dashboard', name: 'Dashboard', component: OperatorDashboard },
  { path: '/lamata/trainlines', exact: true, name: 'Train Lines', component: TrainLine},
  { path: '/lamata/trainstops', exact: true, name: 'Train Stops', component: TrainStop},
  { path: '/lamata/ferrystops', exact: true, name: 'Ferry Stops', component: FerryStop},
  { path: '/lamata/drivers/applications', exact: true, name: 'Applications Drivers', component: AllApplicationDrivers},
  { path: '/lamata/drivers/active', exact: true, name: 'Active Drivers', component: ActiveDrivers},
  { path: '/lamata/drivers/flagged', exact: true, name: 'Flagged Drivers', component: FlaggedDrivers},
  { path: '/lamata/partners/active', exact: true, name: 'Active Partners', component: ActivePartners},
  { path: '/lamata/partners/inactive', exact: true, name: 'Inactive Partners', component: InactivePartners},
  { path: '/lamata/partners', exact: true, name: 'Partners', component: Partners},
  { path: '/lamata/drivers/inactive', exact: true, name: 'Inactive Drivers', component: InactiveDrivers},
  { path: '/lamata/drivers/pending', exact: true, name: 'Pending Drivers', component: PendingDrivers },
  { path: '/lamata/areas', name: 'Areas', component: Area },
  { path: '/lamata/services', name: 'Services', component: Service },
  { path: '/lamata/modes', name: 'Modes', component: Mode },
  { path: '/lamata/operators/active', name: 'Active Operators', component: ActiveOperators },
  { path: '/lamata/operators/inactive', name: 'Inactive Operators', component: InactiveOperators },
  { path: '/lamata/operators/:id', exact: true, name: 'Operator Details', component: Operator },
  { path: '/lamata/operators', name: 'Operators', component: Operators },
  { path: '/lamata/vehicles/active', name: 'Active Vehicles', component: ActiveVehicles },
  { path: '/lamata/vehicles/inactive', name: 'Inactive Vehicles', component: InactiveVehicles },
  { path: '/lamata/vehicles/pending', name: 'Pending Vehicles', component: PendingVehicles },
  { path: '/lamata/vehicles/:id', exact: true, name: 'Vehicle Details', component: Vehicle },
  { path: '/lamata/vehicles', name: 'Vehicles', component: Vehicles },
  { path: '/lamata/busstops', name: 'Bus Stops', component: BusStops },
  { path: '/lamata/routes', name: 'Routes', component: Routes },
  { path: '/states', name: 'States', component: States },
  { path: '/lamata/zones', name: 'Zones', component: Zones },
  { path: '/lamata/ratings/driver', name: 'Driver Ratings', component: DriverRatings },
  { path: '/lamata/ratings/bus', name: 'Bus Ratings', component: BusRatings },
  { path: '/lamata/payments/promo', name: 'Promo', component: Promo },
  { path: '/lamata/payments/refunds/pending', name: 'Pending Refunds', component: PendingRefunds },
  { path: '/lamata/payments/refunds/completed', name: 'Completed Refunds', component: CompletedRefunds },
  { path: '/lamata/payments/successful', name: 'Successful Payments', component: SuccessfulPayments },
  { path: '/lamata/payments/unsuccessful', name: 'Unsuccessful Payments', component: UnsuccessfulPayments },
  { path: '/lamata/payments/refunds', name: 'Refunds', component: RefundPayments },
  { path: '/lamata/payments', name: 'Payments', component: Payments },
  { path: '/lamata/trips/cancelled', name: 'Cancelled Trips', component: CancelledTrips },
  { path: '/lamata/trips/overview', name: 'Trips Overview', component: TripsOverView },
  { path: '/lamata/trips/transit', name: 'Transit Trips', component: TransitTrips },
  { path: '/lamata/trips/completed', name: 'Completed Trips', component: CompletedTrips },
  { path: '/lamata/trips/waiting', name: 'Waiting Trips', component: WaitingTrips },
  { path: '/lamata/trips/:id', name: 'Trip Details', component: Trip },
  { path: '/lamata/trips', name: 'Trips', component: Trips },
  { path: '/lamata/operationassisstants/active', exact: true, name: 'Active Operation Assistants', component: ActiveBusAssistants },
  { path: '/lamata/operationassisstants/inactive', exact: true, name: 'Inactive Operation Assistants', component: InactiveBusAssistants },
  { path: '/lamata/operationassisstants/pending', exact: true, name: 'Pending Operation Assistants', component: PendingBusAssistant },
  { path: '/lamata/operationassisstants', exact: true, name: 'Operation Assistants', component: BusAssistants },
  { path: '/lamata/operationassisstants/:id', exact: true, name: 'Operation Assistant Details', component: BusAssistant },
  { path: '/lamata/drivers/:id', name: 'Driver Details', component: Driver },
  { path: '/lamata/drivers', exact: true, name: 'Drivers', component: Drivers },
  { path: '/lamata/users/active', name: 'Active Users', component: ActiveUsers },
  { path: '/lamata/users/inactive', name: 'Inactive Users', component: InactiveUsers },
  { path: '/lamata/users/overview', name: 'Users Overview', component: UsersOverview },
  { path: '/lamata/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/lamata/users', exact: true,  name: 'Users', component: Users },

];

export default routes;
