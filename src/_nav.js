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
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Mode',
          url: '/modes',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Operators',
          children: [
            {
              name: 'All',
              url: '/operators',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: { className: "bg-white", style: { color: "black" }}

            },
            {
              name: 'Active',
              url: '/operators/active',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: { className: "bg-white", style: { color: "black" }}


            },
            {
              name: 'Inactive',
              url: '/operators/inactive',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: { className: "bg-white", style: { color: "black" }}
              },
          ]
        },
        {
          name: 'Partners',
          children: [
            {
              name: 'All',
              url: '/partners',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Active',
              url: '/partners/active',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Inactive',
              url: '/partners/inactive',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
          ]
        },
      ],
    },
    {
      name: 'Stations',
      icon: 'icon-settings',
      children: [
        {
          name: 'FMLM',
          // url: '/zones',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
          children: [
            {
              name: 'Zones',
              url: '/zones',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Areas',
              url: '/areas',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Routes',
              url: '/routes',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Bus Stop',
              url: '/busstops',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Geo Fences',
              attributes: { className: "bg-white", style: { color: "black" }}
              // url: '/base/jumbotrons',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
          ]
        },
        {
          name: 'Train Stations',
          children: [
            {
              name: 'Train Lines',
              url: '/trainlines',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: {className: "bg-white", style: {color: "black"}}

            },
            {
              name: 'Train Stops',
              url: '/trainstops',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: {className: "bg-white", style: {color: "black"}}

            },
          ]
        },
        {
          name: 'Ferry Stations',
          children: [
            {
              name: 'Ferry Stops',
              url: '/ferrystops',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: {className: "bg-white", style: {color: "black"}}

            }
          ]
        },
      ]
    },
    {
      name: 'Analytics',
      icon: 'icon-user',
      children: [
        {
          name: 'Modal',
          attributes: { className: "bg-white", style: { color: "black" }}
          // url: '/base/breadcrumbs',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Revenue',
          attributes: { className: "bg-white", style: { color: "black" }}
          // url: '/base/cards',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Operator',
          attributes: { className: "bg-white", style: { color: "black" }}
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
        // {
        //   name: 'Overview',
        //   url: '/users/overview',
        //   attributes: { className: "bg-white", style: { color: "black" }}
        //   // class: "menu_drop",
        // },
        {
          name: 'All',
          url: '/users',
          attributes: { className: "bg-white", style: { color: "black" }}
          // class: "menu_drop",
        },
        // {
        //   name: 'Active',
        //   url: '/users/active',
        //   attributes: { className: "bg-white", style: { color: "black" }}
        //   // class: "menu_drop",
        // },
        // {
        //   name: 'Inactive',
        //   url: '/users/inactive',
        //   attributes: { className: "bg-white", style: { color: "black" }}
        //   // class: "menu_drop",
        // },
      ],
    },
    {
      name: 'Drivers',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/drivers',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/drivers/active',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/drivers/inactive',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/drivers/pending',
          attributes: { className: "bg-white", style: { color: "black" }}
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
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/vehicles/active',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/vehicles/inactive',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/vehicles/pending',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ]
    },
    {
      name: 'Operation Assistants',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/operationassisstants',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/operationassisstants/active',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/operationassisstants/inactive',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/operationassisstants/pending',
          attributes: { className: "bg-white", style: { color: "black" }}
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
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'All',
          url: '/trips',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },

        {
          name: 'Waiting',
          url: '/trips/waiting',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Transit',
          url: '/trips/transit',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Completed',
          url: '/trips/completed',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Canceled',
          url: '/trips/cancelled',
          attributes: { className: "bg-white", style: { color: "black" }}
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
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },

        {
          name: 'Successful',
          url: '/payments/successful',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Unsuccessful',
          url: '/payments/unsuccessful',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Refunds',
          url: '/payments/refunds',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending Refunds',
          url: '/payments/refunds/pending',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Completed Refunds',
          url: '/payments/refunds/completed',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Promo',
          url: '/payments/promo',
          attributes: { className: "bg-white", style: { color: "black" }}
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
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Bus',
          url: '/ratings/bus',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        }
      ],
    },
  ],
};
