export default {
  items: [

    {
      title: true,
      name: 'Lamata Dashboard',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: 'text-center, text-dark'             // optional class names space delimited list for title item ex: "text-center"
    },
    // {
    //   name: 'Profile',
    //   icon: 'icon-settings',
    //   class: 'text-dark',
    //   // attributes: { className: "bg-instagram", style: { color: "black" }},
    //   children: [
        {
          name: 'Services',
          url: '/lamata/services',
          // class: 'text-dark',
          icon: 'icon-puzzle',
          // icon: 'icon-puzzle',
          // class: "menu_drop",
          attributes: { style: { color: "#696969" }},

        },
        {
          name: 'Modes',
          url: '/lamata/modes',
          class: 'text-dark',
          icon: 'icon-puzzle',
          attributes: {style: { color: "#696969" }},
        },
    {
      name: 'Stations',
      icon: 'icon-settings',
      attributes: { style: { color: "#696969" }},
      children: [
        {
          name: 'FMLM Station',
          attributes: {style: {color: "#696969"}},
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
          ]
        },
        // {
        //   name: 'Train Stations',
        //   children: [
        //     {
        //       name: 'Train Lines',
        //       url: '/lamata/trainlines',
        //       // icon: 'icon-puzzle',
        //       // class: "menu_drop",
        //       attributes: {className: "bg-white", style: {color: "black"}}
        //
        //     },
            {
              name: 'Train Station',
              url: '/lamata/trainstops',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: {style: {color: "#696969"}}

            },
          // ]
        // },
        // {
        //   name: 'Ferry Stations',
        //   children: [
            {
              name: 'Ferry Station',
              url: '/lamata/ferrystops',
              // icon: 'icon-puzzle',
              // class: "menu_drop",
              attributes: { style: {color: "#696969"}}

            }
          // ]
        // },
      ]
    },
        {
          name: 'Operators',
          // class: 'text-dark',
          icon: 'icon-people',
          attributes: {style: { color: "#696969" }},
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


        },

        {
          name: 'Partners',
          // class: 'text-dark',
          attributes: { style: { color: "#696969" }},
          icon: 'icon-people',
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

        },
    {
      name: 'Analytics',
      icon: 'icon-user',
      // class: 'text-dark',
      attributes: { style: { color: "#696969" }},
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
      // class: 'text-dark',
      attributes: { style: { color: "#696969" }},
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
      // class: 'text-dark',
      attributes: { style: { color: "#696969" }},
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
          name: 'Flagged',
          url: '/lamata/drivers/flagged',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        // {
        //   name: 'Pending',
        //   url: '/lamata/drivers/pending',
        //   attributes: { className: "bg-white", style: { color: "black" }}
        //   // icon: 'icon-puzzle',
        //   // class: "menu_drop",
        // },
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
      // class: 'text-dark',
      attributes: { style: { color: "#696969" }},
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
        // {
        //   name: 'Request',
        //   url: '/lamata/vehicles/pending',
        //   attributes: { className: "bg-white", style: { color: "black" }}
        //   // icon: 'icon-puzzle',
        //   // class: "menu_drop",
        // },
      ]
    },
    {
      name: 'Operation Assistants',
      icon: 'icon-user',
      attributes: { style: { color: "#696969" }},
      // class: 'text-dark',
      children: [
        {
          name: 'All',
          url: '/lamata/operationassisstants',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Active',
          url: '/lamata/operationassisstants/active',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Inactive',
          url: '/lamata/operationassisstants/inactive',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
        {
          name: 'Pending',
          url: '/lamata/operationassisstants/pending',
          attributes: { className: "bg-white", style: { color: "black" }}
          // icon: 'icon-puzzle',
          // class: "menu_drop",
        },
      ],
    },
    {
      name: 'Trips',
      icon: 'icon-speedometer',
      // class: 'text-dark',
      attributes: { style: { color: "#696969" }},

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
      // class: 'text-dark',
      attributes: { style: { color: "#696969" }},
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
