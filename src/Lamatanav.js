export default {
  items: [

    {
      title: true,
      name: 'Lamata Dashboard',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: 'text-center, text-info'             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Profile',
      icon: 'icon-settings',
      children: [
        {
          name: 'Services',
          url: '/lamata/services',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Modes',
          url: '/lamata/modes',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
          attributes: { className: "bg-white", style: { color: "black" }}

        },
        {
          name: 'Operators',
          children: [
            {
              name: 'All',
              url: '/lamata/operators',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: { className: "bg-white", style: { color: "black" }}

            },
            {
              name: 'Active',
              url: '/lamata/operators/active',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: { className: "bg-white", style: { color: "black" }}


            },
            {
              name: 'Inactive',
              url: '/lamata/operators/inactive',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: { className: "bg-white", style: { color: "black" }}
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
              url: '/lamata/partners',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Active',
              url: '/lamata/partners/active',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",

            },
            {
              name: 'Inactive',
              url: '/lamata/partners/inactive',
              attributes: { className: "bg-white", style: { color: "black" }}
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
              url: '/lamata/zones',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Areas',
              url: '/lamata/areas',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Routes',
              url: '/lamata/routes',
              attributes: { className: "bg-white", style: { color: "black" }}
              // icon: 'icon-puzzle',
              // class: "menu_drop",
            },
            {
              name: 'Bus Stop',
              url: '/lamata/busstops',
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

      ],
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
        {
          name: 'All',
          url: '/lamata/users',
          attributes: { className: "bg-white", style: { color: "black" }}
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
          url: '/lamata/drivers',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/lamata/drivers/active',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/lamata/drivers/inactive',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/lamata/drivers/pending',
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
          url: '/lamata/vehicles',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/lamata/vehicles/active',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/lamata/vehicles/inactive',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/lamata/vehicles/pending',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ]
    },
    {
      name: 'Operator Assistants',
      icon: 'icon-user',
      children: [
        {
          name: 'All',
          url: '/lamata/busassisstants',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/lamata/busassisstants/active',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/lamata/busassisstants/inactive',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/lamata/busassisstants/pending',
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
          url: '/lamata/trips/overview',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'All',
          url: '/lamata/trips',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },

        {
          name: 'Waiting',
          url: '/lamata/trips/waiting',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Transit',
          url: '/lamata/trips/transit',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Completed',
          url: '/lamata/trips/completed',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Canceled',
          url: '/lamata/trips/cancelled',
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
          url: '/lamata/ratings/driver',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Bus',
          url: '/lamata/ratings/bus',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        }
      ],
    },
  ],
};
