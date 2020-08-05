export default {
  items: [

    {
      title: true,
      name: 'Admin Dashboard',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: 'text-center, text-primary'             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Setup',
      icon: 'icon-settings',
      children: [
        {
          name: 'Services',
          url: '/services',
          // icon: 'icon-puzzle',
          // class: "menu_drop",

        },
        {
          name: 'Modes',
          url: '/modes',
          // icon: 'icon-puzzle',
          // class: "menu_drop",

        },
        {
          name: 'Operators',
          children: [
            {
              name: 'All',
              url: '/operators',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Active',
              url: '/operators/active',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Inactive',
              url: '/operators/inactive',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
          ]
          // url: '/operators',
          // icon: 'icon-puzzle',
         // class: "menu_drop",

        },

        {
          name: 'Partners',
          children: [
            {
              name: 'All',
              url: '/partners',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Active',
              url: '/partners/active',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Inactive',
              url: '/partners/inactive',
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
          ]
          // url: '/operators',
          // icon: 'icon-puzzle',
          // class: "menu_drop",

        },
        // {
        //   name: 'States',
        //   url: '/states',
        //   // icon: 'icon-puzzle',
        //   class: "menu_drop",
        //
        // },

        {
          name: 'Zones',
          // url: '/zones',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
          children: [
            {
              name: 'Zones',
              url: '/zones',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Areas',
              url: '/areas',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Routes',
              url: '/routes',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Bus Stop',
              url: '/busstops',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Geo Fences',
              // url: '/base/jumbotrons',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
          ]
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
          // class: "menu_drop",
        },
        {
          name: 'Revenue',
          // url: '/base/cards',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Operator',
          // url: '/base/carousels',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ],
    },
    {
      name: 'Users',
      icon: 'icon-people',
      children: [
        {
          name: 'Overview',
          url: '/users/overview',
          // class: "menu_drop",
        },
        {
          name: 'All',
          url: '/users',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/users/active',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/users/inactive',
          // class: "menu_drop",
        },
      ],
    },
    {
      name: 'Drivers',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/drivers',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/drivers/active',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/drivers/inactive',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/drivers/pending',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        // {
        //   name: 'Driver Loggings',
        //   url: '/drivers/driverloggings',
        //   // icon: 'icon-puzzle',
        //   class: "menu_drop",
        // },
        // {
        //   name: 'Driver Routes',
        //   url: '/drivers/driverroutes',
        //   // icon: 'icon-puzzle',
        //   class: "menu_drop",
        // },
        // {
        //   name: 'Pending',
        //   url: '/drivers/pending',
        //   // icon: 'icon-puzzle',
        //   class: "menu_drop",
        // },
      ],
    },

    // {
    //   name: 'Bookings',
    //   icon: 'icon-people',
    //   url: '/bookings',
    // },
    {
      name: 'Vehicles',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'All',
          url: '/vehicles',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/vehicles/active',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/vehicles/inactive',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/vehicles/pending',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ]
    },
    {
      name: 'Bus Assistants',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/busassisstants',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/busassisstants/active',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/busassisstants/inactive',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/busassisstants/pending',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ],
    },
    {
      name: 'Trips',
      icon: 'icon-speedometer',
      url: '/trips',
      children: [
        {
          name: 'Overview',
          url: '/trips/overview',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'All',
          url: '/trips',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },

        {
          name: 'Waiting',
          url: '/trips/waiting',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Transit',
          url: '/trips/transit',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Completed',
          url: '/trips/completed',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Canceled',
          url: '/trips/cancelled',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ],
    },
    {
      name: 'Payments',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/payments',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },

        {
          name: 'Successful',
          url: '/payments/successful',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Unsuccessful',
          url: '/payments/unsuccessful',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Refunds',
          url: '/payments/refunds',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending Refunds',
          url: '/payments/refunds/pending',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Completed Refunds',
          url: '/payments/refunds/completed',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Promo',
          url: '/payments/promo',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ],
    },
    {
      name: 'Ratings',
      icon: 'icon-user',
      children: [
        {
          name: 'Driver',
          url: '/ratings/driver',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Bus',
          url: '/ratings/bus',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        }
      ],
    },
  ],
};
