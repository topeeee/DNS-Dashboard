import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const OperatorDashboard = React.lazy(() => import('./views/Dashboard/OperatorDashboard'));
const Area = React.lazy(() => import('./views/Setup/Area'));
const ActiveUsers = React.lazy(() => import('./views/Users/ActiveUsers'));
const InactiveUsers = React.lazy(() => import('./views/Users/InactiveUsers'));
const InactiveDrivers = React.lazy(() => import('./views/Drivers/InactiveDrivers'));
const ActiveDrivers = React.lazy(() => import('./views/Drivers/ActiveDrivers'));
const Drivers = React.lazy(() => import('./views/Drivers/Drivers'));
const Driver = React.lazy(() => import('./views/Drivers/Driver'));
const PendingDriver = React.lazy(() => import('./views/Drivers/PendingDrivers'));
const InactiveBusAssistants = React.lazy(() => import('./views/BusAssistants/InactiveBusAssistants'));
const ActiveBusAssistants = React.lazy(() => import('./views/BusAssistants/ActiveBusAssistants'));
const BusAssistants = React.lazy(() => import('./views/BusAssistants/BusAssistants'));
const BusAssistant = React.lazy(() => import('./views/BusAssistants/BusAssistant'));
const PendingBusAssistant = React.lazy(() => import('./views/BusAssistants/PendingBusAssistants'));
const Trips = React.lazy(() => import('./views/Trips/Trips'));
const CancelledTrips = React.lazy(() => import('./views/Trips/CancelledTrips'));
const CurrentTrips = React.lazy(() => import('./views/Trips/CurrentTrip'));
const CompletedTrips = React.lazy(() => import('./views/Trips/CompletedTrip'));
const WaitingTrips = React.lazy(() => import('./views/Trips/WaitingTrip'));
const Trip = React.lazy(() => import('./views/Trips/Trip'));
const Payments = React.lazy(() => import('./views/Payments/Payments'));
const SuccessfulPayments = React.lazy(() => import('./views/Payments/SuccessfulPayments'));
const UnsuccessfulPayments = React.lazy(() => import('./views/Payments/UnsuccessfulPayments'));
const PendingPayments = React.lazy(() => import('./views/Payments/PendingPayments'));
const RefundPayments = React.lazy(() => import('./views/Payments/RefundsPayments'));




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/payments/successful', name: 'Successful Payments', component: SuccessfulPayments },
  { path: '/payments/unsuccessful', name: 'Unsuccessful Payments', component: UnsuccessfulPayments },
  { path: '/payments/pending', name: 'Pending Payments', component: PendingPayments },
  { path: '/payments/refunds', name: 'Refunds Payments', component: RefundPayments },
  { path: '/payments', name: 'Payments', component: Payments },
  { path: '/trips/cancelled', name: 'Cancelled Trips', component: CancelledTrips },
  { path: '/trips/current', name: 'Current Trips', component: CurrentTrips },
  { path: '/trips/completed', name: 'Completed Trips', component: CompletedTrips },
  { path: '/trips/waiting', name: 'Waiting Trips', component: WaitingTrips },
  { path: '/trips', name: 'Trips', component: Trips },
  { path: '/trip/:id', name: 'Trip Details', component: Trip },
  { path: '/busassisstants/active', exact: true, name: 'Active Bus Assistants', component: ActiveBusAssistants },
  { path: '/busassisstants/inactive', exact: true, name: 'Inactive Bus Assistants', component: InactiveBusAssistants },
  { path: '/busassisstants/pending', exact: true, name: 'Pending Bus Assistants', component: PendingBusAssistant },
  { path: '/busassisstants', exact: true, name: 'Bus Assistants', component: BusAssistants },
  { path: '/busassisstant/:id', exact: true, name: 'Bus Assistant Details', component: BusAssistant },
  { path: '/drivers/active', exact: true, name: 'Active Drivers', component: ActiveDrivers },
  { path: '/drivers/pending', exact: true, name: 'Pending Drivers', component: PendingDriver },
  { path: '/drivers/inactive', exact: true, name: 'Inactive Drivers', component: InactiveDrivers },
  { path: '/drivers', exact: true, name: 'Drivers', component: Drivers },
  { path: '/driver/:id', name: 'Driver Details', component: Driver },
  { path: '/users/active', name: 'ActiveUsers', component: ActiveUsers },
  { path: '/users/inactive', name: 'Dashboard', component: InactiveUsers },
  { path: '/area', name: 'Dashboard', component: Area },
  { path: '/operator', name: 'Dashboard', component: OperatorDashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
