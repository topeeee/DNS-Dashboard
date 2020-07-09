// const OperatorName = sessionStorage.getItem('OperatorName');

import {PartnerName} from "./environments/constants";

export default {
  items: [

    {
      title: true,
      name: PartnerName,
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: 'text-center, text-success'             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Setup',
      icon: 'icon-settings',
      children: [
        {
          name: 'States',
          url: '/partner/states',
          // icon: 'icon-puzzle',
          class: "menu_drop",

        },
        {
          name: 'Mode',
          url: '/partner/modes',
          // icon: 'icon-puzzle',
          class: "menu_drop",

        },
        {
          name: 'Zones',
          url: '/partner/zones',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Areas',
          url: '/partner/areas',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Routes',
          url: '/partner/routes',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Bus Stop',
          url: '/partner/busstops',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Geo Fences',
          // url: '/base/jumbotrons',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
      ],
    },
    {
      name: 'Analytics',
      icon: 'icon-user',
      children: [
        {
          name: 'Modal',
          // url: '/base/breadcrumbs',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Revenue',
          // url: '/base/cards',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Operator',
          // url: '/base/carousels',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
      ],
    },
    {
      name: 'Passengers',
      icon: 'icon-people',
      children: [
        {
          name: 'Overview',
          url: '/partner/passengers/overview',
          class: "menu_drop",
        },
        {
          name: 'All',
          url: '/partner/passengers',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/partner/passengers/active',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/partner/passengers/inactive',
          class: "menu_drop",
        },
      ],
    },
    {
      name: 'Drivers',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/partner/drivers',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/partner/drivers/active',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/partner/drivers/inactive',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/partner/drivers/pending',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
      ],
    },
    {
      name: 'Bus Assistants',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/partner/busassisstants',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/partner/busassisstants/active',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/partner/busassisstants/inactive',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/partner/busassisstants/pending',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
      ],
    },

    // {
    //   name: 'Bookings',
    //   icon: 'icon-people',
    //   url: '/bookings',
    // },
    {
      name: 'Vehicles',
      icon: 'icon-people',
      children: [
        {
          name: 'All',
          url: '/partner/vehicles',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/partner/vehicles/active',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/partner/vehicles/inactive',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/partner/vehicles/pending',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
      ]
    },
    {
      name: 'Trips',
      icon: 'icon-speedometer',
      url: '/trips',
      children: [
        {
          name: 'Overview',
          url: '/partner/trips/overview',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'All',
          url: '/partner/trips',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },

        {
          name: 'Waiting',
          url: '/partner/trips/waiting',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Transit',
          url: '/partner/trips/transit',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Completed',
          url: '/partner/trips/completed',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Canceled',
          url: '/partner/trips/cancelled',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
      ],
    },
    {
      name: 'Payments',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/partner/payments',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },

        {
          name: 'Successful',
          url: '/partner/payments/successful',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Unsuccessful',
          url: '/partner/payments/unsuccessful',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Refunds',
          url: '/partner/payments/refunds',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending Refunds',
          url: '/partner/payments/refunds/pending',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Completed Refunds',
          url: '/partner/payments/refunds/completed',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Promo',
          url: '/partner/payments/promo',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
      ],
    },
    {
      name: 'Ratings',
      icon: 'icon-user',
      children: [
        {
          name: 'Driver',
          url: '/partner/ratings/driver',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Bus',
          url: '/partner/ratings/bus',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        }
      ],
    },
  ],
};
