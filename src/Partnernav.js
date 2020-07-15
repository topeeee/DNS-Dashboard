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
      name: 'Revenue',
      icon: 'icon-user',
    },
  ],
};
