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
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Active',
          url: '/partner/vehicles/active',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Inactive',
          url: '/partner/vehicles/inactive',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Pending',
          url: '/partner/vehicles/pending',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
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
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'All',
          url: '/partner/trips',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },

        {
          name: 'Waiting',
          url: '/partner/trips/waiting',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Transit',
          url: '/partner/trips/transit',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Completed',
          url: '/partner/trips/completed',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Canceled',
          url: '/partner/trips/cancelled',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
      ],
    },
    {
      name: 'Revenue',
      icon: 'icon-user',
    },
  ],
};
