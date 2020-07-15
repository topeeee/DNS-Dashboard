const OperatorName = sessionStorage.getItem('OperatorName');

export default {
  items: [

    {
      title: true,
      name: OperatorName,
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: 'text-center, text-warning'             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Setup',
      icon: 'icon-settings',
      children: [
        {
          name: 'Partners',
          children: [
            {
              name: 'Request',
              icon: 'icon-bell',
              children: [
                {
                  name: 'All',
                  url: '/operator/vehicles/requestall',
                  // icon: 'icon-bell',
                  class: "menu_drop",

                },
                {
                  name: 'Personal',
                  url: '/operator/vehicles/requestme',
                  // icon: 'icon-puzzle',
                  class: "menu_drop",

                },
              ]
              // url: '/operators',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'All',
              url: '/operator/partners',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Active',
              url: '/operator/partners/active',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Inactive',
              url: '/operator/partners/inactive',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
          ]
          // url: '/operators',
          // icon: 'icon-puzzle',
          // class: "menu_drop",

        },
        // {
        //   name: 'Operators',
        //   children: [
        //     {
        //       name: 'All',
        //       url: '/operators',
        //       // icon: 'icon-puzzle',
        //       // class: "menu_drop",
        //
        //     },
        //     {
        //       name: 'Active',
        //       url: '/operators/active',
        //       // icon: 'icon-puzzle',
        //       // class: "menu_drop",
        //
        //     },
        //     {
        //       name: 'Inactive',
        //       url: '/operators/inactive',
        //       // icon: 'icon-puzzle',
        //       // class: "menu_drop",
        //
        //     },
        //   ]
        //   // url: '/operators',
        //   // icon: 'icon-puzzle',
        //  // class: "menu_drop",
        //
        // },
        {
          name: 'States',
          url: '/operator/states',
          // icon: 'icon-puzzle',
          class: "menu_drop",

        },
        {
          name: 'Mode',
          url: '/operator/modes',
          // icon: 'icon-puzzle',
          class: "menu_drop",

        },
        {
          name: 'Zones',
          url: '/operator/zones',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Areas',
          url: '/operator/areas',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Routes',
          url: '/operator/routes',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Bus Stop',
          url: '/operator/busstops',
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
          url: '/operator/passengers/overview',
          class: "menu_drop",
        },
        {
          name: 'All',
          url: '/operator/passengers',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/operator/passengers/active',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/operator/passengers/inactive',
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
          url: '/operator/drivers',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/operator/drivers/active',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/operator/drivers/inactive',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/operator/drivers/pending',
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
          url: '/operator/busassisstants',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/operator/busassisstants/active',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/operator/busassisstants/inactive',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/operator/busassisstants/pending',
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
          url: '/operator/vehicles',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/operator/vehicles/active',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/operator/vehicles/inactive',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/operator/vehicles/pending',
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
          url: '/operator/trips/overview',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'All',
          url: '/operator/trips',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },

        {
          name: 'Waiting',
          url: '/operator/trips/waiting',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Transit',
          url: '/operator/trips/transit',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Completed',
          url: '/operator/trips/completed',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Canceled',
          url: '/operator/trips/cancelled',
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
          url: '/operator/payments',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },

        {
          name: 'Successful',
          url: '/operator/payments/successful',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Unsuccessful',
          url: '/operator/payments/unsuccessful',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Refunds',
          url: '/operator/payments/refunds',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Pending Refunds',
          url: '/operator/payments/refunds/pending',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Completed Refunds',
          url: '/operator/payments/refunds/completed',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Promo',
          url: '/operator/payments/promo',
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
          url: '/operator/ratings/driver',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        },
        {
          name: 'Bus',
          url: '/operator/ratings/bus',
          // icon: 'icon-puzzle',
          class: "menu_drop",
        }
      ],
    },
  ],
};
