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
  //   {
  //     name: 'Colors',
  //     url: '/theme/colors',
  //     icon: 'icon-drop',
  //   },
  //   {
  //     name: 'Typography',
  //     url: '/theme/typography',
  //     icon: 'icon-pencil',
  //   },
  //   {
  //     title: true,
  //     name: 'Components',
  //     wrapper: {
  //       element: '',
  //       attributes: {},
  //     },
  //   },
  //   {
  //     name: 'Base',
  //     url: '/base',
  //     icon: 'icon-puzzle',
  //     children: [
  //       {
  //         name: 'Breadcrumbs',
  //         url: '/base/breadcrumbs',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Cards',
  //         url: '/base/cards',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Carousels',
  //         url: '/base/carousels',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Collapses',
  //         url: '/base/collapses',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Dropdowns',
  //         url: '/base/dropdowns',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Forms',
  //         url: '/base/forms',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Jumbotrons',
  //         url: '/base/jumbotrons',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'List groups',
  //         url: '/base/list-groups',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Navs',
  //         url: '/base/navs',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Paginations',
  //         url: '/base/paginations',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Popovers',
  //         url: '/base/popovers',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Progress Bar',
  //         url: '/base/progress-bar',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Switches',
  //         url: '/base/switches',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Tables',
  //         url: '/base/tables',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Tabs',
  //         url: '/base/tabs',
  //         icon: 'icon-puzzle',
  //       },
  //       {
  //         name: 'Tooltips',
  //         url: '/base/tooltips',
  //         icon: 'icon-puzzle',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Buttons',
  //     url: '/buttons',
  //     icon: 'icon-cursor',
  //     children: [
  //       {
  //         name: 'Buttons',
  //         url: '/buttons/buttons',
  //         icon: 'icon-cursor',
  //       },
  //       {
  //         name: 'Button dropdowns',
  //         url: '/buttons/button-dropdowns',
  //         icon: 'icon-cursor',
  //       },
  //       {
  //         name: 'Button groups',
  //         url: '/buttons/button-groups',
  //         icon: 'icon-cursor',
  //       },
  //       {
  //         name: 'Brand Buttons',
  //         url: '/buttons/brand-buttons',
  //         icon: 'icon-cursor',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Charts',
  //     url: '/charts',
  //     icon: 'icon-pie-chart',
  //   },
  //   {
  //     name: 'Icons',
  //     url: '/icons',
  //     icon: 'icon-star',
  //     children: [
  //       {
  //         name: 'CoreUI Icons',
  //         url: '/icons/coreui-icons',
  //         icon: 'icon-star',
  //         badge: {
  //           variant: 'info',
  //           text: 'NEW',
  //         },
  //       },
  //       {
  //         name: 'Flags',
  //         url: '/icons/flags',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Font Awesome',
  //         url: '/icons/font-awesome',
  //         icon: 'icon-star',
  //         badge: {
  //           variant: 'secondary',
  //           text: '4.7',
  //         },
  //       },
  //       {
  //         name: 'Simple Line Icons',
  //         url: '/icons/simple-line-icons',
  //         icon: 'icon-star',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Notifications',
  //     url: '/notifications',
  //     icon: 'icon-bell',
  //     children: [
  //       {
  //         name: 'Alerts',
  //         url: '/notifications/alerts',
  //         icon: 'icon-bell',
  //       },
  //       {
  //         name: 'Badges',
  //         url: '/notifications/badges',
  //         icon: 'icon-bell',
  //       },
  //       {
  //         name: 'Modals',
  //         url: '/notifications/modals',
  //         icon: 'icon-bell',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Widgets',
  //     url: '/widgets',
  //     icon: 'icon-calculator',
  //     badge: {
  //       variant: 'info',
  //       text: 'NEW',
  //     },
  //   },
  //   {
  //     divider: true,
  //   },
  //   {
  //     title: true,
  //     name: 'Extras',
  //   },
  //   {
  //     name: 'Pages',
  //     url: '/pages',
  //     icon: 'icon-star',
  //     children: [
  //       {
  //         name: 'Login',
  //         url: '/login',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Register',
  //         url: '/register',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Error 404',
  //         url: '/404',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Error 500',
  //         url: '/500',
  //         icon: 'icon-star',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Disabled',
  //     url: '/dashboard',
  //     icon: 'icon-ban',
  //     attributes: { disabled: true },
  //   },
  //   {
  //     name: 'Download CoreUI',
  //     url: 'https://coreui.io/react/',
  //     icon: 'icon-cloud-download',
  //     class: 'mt-auto',
  //     variant: 'success',
  //     attributes: { target: '_blank', rel: "noopener" },
  //   },
  //   {
  //     name: 'Try CoreUI PRO',
  //     url: 'https://coreui.io/pro/react/',
  //     icon: 'icon-layers',
  //     variant: 'danger',
  //     attributes: { target: '_blank', rel: "noopener" },
  //   },
  ],
};
