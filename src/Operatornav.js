export default {
  items: [

    {
      title: true,
      name: "operator dashboard",
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: 'text-center, text-white'             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Profile',
      icon: 'icon-settings',
      children: [
        {
          name: 'Services',
          url: '/operator/services',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Modes',
          url: '/operator/modes',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Zones',
          url: '/operator/zones',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Areas',
          url: '/operator/areas',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Routes',
          url: '/operator/routes',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Bus Stop',
          url: '/operator/busstops',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Geo Fences',
          url: '/operator',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
      ],
    },
    {
      name: 'Partners',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'All',
          url: '/operator/partners',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Active',
          url: '/operator/partners/active',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Inactive',
          url: '/operator/partners/inactive',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Partners Request',
          icon: 'icon-bell',
          children: [
            {
              name: 'All Request',
              url: '/operator/vehicles/requestall',
              // icon: 'icon-bell',
              attributes: { className: "bg-white", style: { color: "black" }}

            },
            {
              name: 'Personal Request',
              url: '/operator/vehicles/requestme',
              // icon: 'icon-puzzle',
              attributes: { className: "bg-white", style: { color: "black" }}

            },
          ]
          // url: '/operators',
          // icon: 'icon-puzzle',
          // class: "menu_drop",

        },
      ]

    },
    {
      name: 'Analytics',
      icon: 'icon-user',
      children: [
        {
          name: 'Modal',
          url: '/operator',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Revenue',
          url: '/operator',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Operator',
          url: '/operator',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
      ],
    },
    {
      name: 'Passengers',
      icon: 'icon-people',
      children: [
        // {
        //   name: 'Overview',
        //   url: '/operator/passengers/overview',
        //   class: "menu_drop",
        // },
        {
          name: 'All',
          url: '/operator/passengers',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        // {
        //   name: 'Active',
        //   url: '/operator/passengers/active',
        //   class: "menu_drop",
        // },
        // {
        //   name: 'Inactive',
        //   url: '/operator/passengers/inactive',
        //   class: "menu_drop",
        // },
      ],
    },
    {
      name: 'Drivers',
      icon: 'icon-user',
      children: [
        // {
        //   name: 'Flagged Drivers',
        //   url: '/operator/drivers/requestall',
        //   // icon: 'icon-puzzle',
        //   // class: "menu_drop",
        // },
        {
          name: 'All Drivers',
          url: '/operator/drivers',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Active',
          url: '/operator/drivers/active',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Inactive',
          url: '/operator/drivers/inactive',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Flagged',
          url: '/operator/drivers/pending',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Drivers Request',
          icon: 'icon-bell',
          children: [
            {
              name: 'All Request',
              url: '/operator/drivers/requestall',
              // icon: 'icon-bell',
              attributes: { className: "bg-white", style: { color: "black" }}

            },
            {
              name: 'Personal Request',
              url: '/operator/drivers/requestme',
              // icon: 'icon-puzzle',
              attributes: { className: "bg-white", style: { color: "black" }}

            },
          ]
          // url: '/operators',
          // icon: 'icon-puzzle',
          // class: "menu_drop",

        },
      ],
    },
    {
      name: 'Operation Assis...',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/operator/operationassisstants',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Active',
          url: '/operator/operationassisstants/active',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Inactive',
          url: '/operator/operationassisstants/inactive',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Pending',
          url: '/operator/operationassisstants/pending',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
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
          url: '/operator/vehicles',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Active',
          url: '/operator/vehicles/active',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Inactive',
          url: '/operator/vehicles/inactive',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Pending',
          url: '/operator/vehicles/pending',
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
          url: '/operator/trips/overview',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'All',
          url: '/operator/trips',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },

        {
          name: 'Waiting',
          url: '/operator/trips/waiting',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Transit',
          url: '/operator/trips/transit',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Completed',
          url: '/operator/trips/completed',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Canceled',
          url: '/operator/trips/cancelled',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
      ],
    },
    // {
    //   name: 'Payments',
    //   icon: 'icon-user',
    //   children: [
    //     {
    //       name: 'All',
    //       url: '/operator/payments',
    //       // icon: 'icon-puzzle',
    //       attributes: { className: "bg-white", style: { color: "black" }}
    //     },
    //
    //     {
    //       name: 'Successful',
    //       url: '/operator/payments/successful',
    //       // icon: 'icon-puzzle',
    //       attributes: { className: "bg-white", style: { color: "black" }}
    //     },
    //     {
    //       name: 'Unsuccessful',
    //       url: '/operator/payments/unsuccessful',
    //       // icon: 'icon-puzzle',
    //       attributes: { className: "bg-white", style: { color: "black" }}
    //     },
    //     {
    //       name: 'Refunds',
    //       url: '/operator/payments/refunds',
    //       // icon: 'icon-puzzle',
    //       attributes: { className: "bg-white", style: { color: "black" }}
    //     },
    //     {
    //       name: 'Pending Refunds',
    //       url: '/operator/payments/refunds/pending',
    //       // icon: 'icon-puzzle',
    //       attributes: { className: "bg-white", style: { color: "black" }}
    //     },
    //     {
    //       name: 'Completed Refunds',
    //       url: '/operator/payments/refunds/completed',
    //       // icon: 'icon-puzzle',
    //       attributes: { className: "bg-white", style: { color: "black" }}
    //     },
    //     {
    //       name: 'Promo',
    //       url: '/operator/payments/promo',
    //       // icon: 'icon-puzzle',
    //       attributes: { className: "bg-white", style: { color: "black" }}
    //     },
    //   ],
    // },
    {
      name: 'Ratings',
      icon: 'icon-user',
      children: [
        {
          name: 'Driver',
          url: '/operator/ratings/driver',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        },
        {
          name: 'Bus',
          url: '/operator/ratings/bus',
          // icon: 'icon-puzzle',
          attributes: { className: "bg-white", style: { color: "black" }}
        }
      ],
    },
  ],
};
