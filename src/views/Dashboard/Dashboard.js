import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandBlack = getStyle('--dark')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


// Card Chart 1
const cardChartData1 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Operators',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Drivers',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData3.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData3.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

{/*const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};*/}

// Card Chart 4
const cardChartData4 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Bus Assistants',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData4.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData4.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 5
const cardChartData5 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Vehicles',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts5 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData5.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData5.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 7
const cardChartData7 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Completed Trips',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts7 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData7.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData7.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 9
const cardChartData9 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Canclelled Trips',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts9 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData9.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData9.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}
// Card Chart 10
const cardChartData10 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Transit Time',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts10 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData10.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData10.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 11
const cardChartData11 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Distance Covered',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts11 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData11.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData11.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 12
const cardChartData12 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Zones',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts12 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData12.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData12.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 13
const cardChartData13 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Areas',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts13 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData13.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData13.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 14
const cardChartData14 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Routes',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts14 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData14.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData14.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 15
const cardChartData15 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Bus Stops',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts15 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData15.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData15.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 16
const cardChartData16 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Geo-fenced Areas',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts16 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData16.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData16.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 20
const cardChartData20 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Maintenance Revenue',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts20 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData20.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData20.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}



// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// Card Chart 17
const cardChartData17 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Gross Revenue',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts17 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData17.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData17.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 18
const cardChartData18 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Gross Zeno Revenue',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts18 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData18.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData18.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 19
const cardChartData19 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Operator Revenue',
      backgroundColor: brandBlack,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts19 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData19.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData19.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}



// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card17' isOpen={this.state.card17} toggle={() => { this.setState({ card17: !this.state.card17 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>N10,234,710</div>
                <div style={{color: "black"}}>Gross Revenue</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData17} options={cardChartOpts17} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card18' isOpen={this.state.card18} toggle={() => { this.setState({ card18: !this.state.card18 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>N2,234,710</div>
                <div style={{color: "black"}}>Zeno Gross Revenue </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData18} options={cardChartOpts18} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card19' isOpen={this.state.card19} toggle={() => { this.setState({ card19: !this.state.card19 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>N6,234,170</div>
                <div style={{color: "black"}}>Operator Gross Revenue </div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData19} options={cardChartOpts19} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card16' isOpen={this.state.card16} toggle={() => { this.setState({ card16: !this.state.card16 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>N1,000,2000</div>
                <div style={{color: "black"}}>Maintenance Revenue</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData20} options={cardChartOpts20} height={70} />
              </div>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white " style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}} >1,000,823</div>
                <div style={{color: "black"}}>Total Users</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>20</div>
                <div style={{color: "black"}}>Total Operators</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>2,547</div>
                <div style={{color: "black"}}>Total Drivers</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>2,547</div>
                <div style={{color: "black"}}>Bus Assistants</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card7' isOpen={this.state.card7} toggle={() => { this.setState({ card7: !this.state.card7 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>150,234</div>
                <div style={{color: "black"}}>Total Completed Trips</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData7} options={cardChartOpts7} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card9' isOpen={this.state.card9} toggle={() => { this.setState({ card9: !this.state.card9 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>2,670</div>
                <div style={{color: "black"}}>Total Cancelled Trips</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData9} options={cardChartOpts9} height={70} />
              </div>
            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card6' isOpen={this.state.card6} toggle={() => { this.setState({ card6: !this.state.card6 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>157</div>
                <div style={{color: "black"}}>Total Waiting Trips</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                {/*  <Line data={cardChartData1} options={cardChartOpts1} height={70} />*/}
              </div>
            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card8' isOpen={this.state.card8} toggle={() => { this.setState({ card8: !this.state.card8 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>945</div>
                <div style={{color: "black"}}> Total Current Trips</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                {/*<Bar data={cardChartData4} options={cardChartOpts4} height={70} />*/}
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card10' isOpen={this.state.card10} toggle={() => { this.setState({ card10: !this.state.card10 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>13,067 hours</div>
                <div style={{color: "black"}}>Total Transit Time</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData10} options={cardChartOpts10} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card11' isOpen={this.state.card11} toggle={() => { this.setState({ card11: !this.state.card11 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>25,456 km</div>
                <div style={{color: "black"}}>Total Distance Covered</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData11} options={cardChartOpts11} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card5' isOpen={this.state.card5} toggle={() => { this.setState({ card5: !this.state.card5 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>2,670</div>
                <div style={{color: "black"}}>Total Vehicles</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData5} options={cardChartOpts5} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card16' isOpen={this.state.card16} toggle={() => { this.setState({ card16: !this.state.card16 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>100</div>
                <div style={{color: "black"}}>Total Geo-Fenced Areas </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData16} options={cardChartOpts16} height={70} />
              </div>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card12' isOpen={this.state.card12} toggle={() => { this.setState({ card12: !this.state.card12 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>6</div>
                <div style={{color: "black"}}>Total Zones </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData12} options={cardChartOpts12} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card13' isOpen={this.state.card13} toggle={() => { this.setState({ card13: !this.state.card13 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>125</div>
                <div style={{color: "black"}}>Total Areas </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData13} options={cardChartOpts13} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card14' isOpen={this.state.card14} toggle={() => { this.setState({ card14: !this.state.card14 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>749</div>
                <div style={{color: "black"}}>Total Routes </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData14} options={cardChartOpts14} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'black'}}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card15' isOpen={this.state.card15} toggle={() => { this.setState({ card15: !this.state.card15 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Records</DropdownItem>
                      <DropdownItem>Search Records</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value" style={{color: "black"}}>1,930</div>
                <div style={{color: "black"}}>Total Bus Stops </div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData15} options={cardChartOpts15} height={70} />
              </div>
            </Card>
          </Col>

        </Row>

        {/*<Row>*/}
        {/*  <Col>*/}
        {/*<Card>*/}
        {/*  <CardBody>*/}
        {/*    <Row>*/}
        {/*      <Col sm="5">*/}
        {/*        <CardTitle className="mb-0">Traffic</CardTitle>*/}
        {/*        <div className="small text-muted">November 2015</div>*/}
        {/*      </Col>*/}
        {/*      <Col sm="7" className="d-none d-sm-inline-block">*/}
        {/*        <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>*/}
        {/*        <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">*/}
        {/*          <ButtonGroup className="mr-3" aria-label="First group">*/}
        {/*            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>*/}
        {/*            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>*/}
        {/*            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>*/}
        {/*          </ButtonGroup>*/}
        {/*        </ButtonToolbar>*/}
        {/*      </Col>*/}
        {/*    </Row>*/}
        {/*    <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>*/}
        {/*      <Line data={mainChart} options={mainChartOpts} height={300} />*/}
        {/*    </div>*/}
        {/*  </CardBody>*/}
        {/*  <CardFooter>*/}
        {/*    <Row className="text-center">*/}
        {/*      <Col sm={12} md className="mb-sm-2 mb-0">*/}
        {/*        <div className="text-muted">Visits</div>*/}
        {/*        <strong>29.703 Users (40%)</strong>*/}
        {/*        <Progress className="progress-xs mt-2" color="success" value="40" />*/}
        {/*      </Col>*/}
        {/*      <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">*/}
        {/*        <div className="text-muted">Unique</div>*/}
        {/*        <strong>24.093 Users (20%)</strong>*/}
        {/*        <Progress className="progress-xs mt-2" color="info" value="20" />*/}
        {/*      </Col>*/}
        {/*      <Col sm={12} md className="mb-sm-2 mb-0">*/}
        {/*        <div className="text-muted">Pageviews</div>*/}
        {/*        <strong>78.706 Views (60%)</strong>*/}
        {/*        <Progress className="progress-xs mt-2" color="warning" value="60" />*/}
        {/*      </Col>*/}
        {/*      <Col sm={12} md className="mb-sm-2 mb-0">*/}
        {/*        <div className="text-muted">New Users</div>*/}
        {/*        <strong>22.123 Users (80%)</strong>*/}
        {/*        <Progress className="progress-xs mt-2" color="danger" value="80" />*/}
        {/*      </Col>*/}
        {/*      <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">*/}
        {/*        <div className="text-muted">Bounce Rate</div>*/}
        {/*        <strong>Average Rate (40.15%)</strong>*/}
        {/*        <Progress className="progress-xs mt-2" color="primary" value="40" />*/}
        {/*      </Col>*/}
        {/*    </Row>*/}
        {/*  </CardFooter>*/}
        {/*</Card>*/}
        {/*</Col>*/}
        {/*</Row>*/}

        {/*<Row>*/}
        {/*  <Col xs="6" sm="6" lg="3">*/}
        {/*    <Suspense fallback={this.loading()}>*/}
        {/*      <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >*/}
        {/*        <div className="chart-wrapper">*/}
        {/*          <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />*/}
        {/*        </div>*/}
        {/*      </Widget03>*/}
        {/*    </Suspense>*/}
        {/*  </Col>*/}

        {/*  <Col xs="6" sm="6" lg="3">*/}
        {/*    <Suspense fallback={this.loading()}>*/}
        {/*      <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >*/}
        {/*        <div className="chart-wrapper">*/}
        {/*          <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />*/}
        {/*        </div>*/}
        {/*      </Widget03>*/}
        {/*    </Suspense>*/}
        {/*  </Col>*/}

        {/*  <Col xs="6" sm="6" lg="3">*/}
        {/*    <Suspense fallback={this.loading()}>*/}
        {/*      <Widget03 dataBox={() => ({ variant: 'linkedin', contacts: '500+', feeds: '292' })} >*/}
        {/*        <div className="chart-wrapper">*/}
        {/*          <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />*/}
        {/*        </div>*/}
        {/*      </Widget03>*/}
        {/*    </Suspense>*/}
        {/*  </Col>*/}

        {/*  <Col xs="6" sm="6" lg="3">*/}
        {/*    <Suspense fallback={this.loading()}>*/}
        {/*      <Widget03 dataBox={() => ({ variant: 'google-plus', followers: '894', circles: '92' })} >*/}
        {/*        <div className="chart-wrapper">*/}
        {/*          <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />*/}
        {/*        </div>*/}
        {/*      </Widget03>*/}
        {/*    </Suspense>*/}
        {/*  </Col>*/}
        {/*</Row>*/}

        {/*<Row>*/}
        {/*  <Col>*/}
        {/*    <Card>*/}
        {/*      <CardHeader>*/}
        {/*        Traffic {' & '} Sales*/}
        {/*      </CardHeader>*/}
        {/*      <CardBody>*/}
        {/*        <Row>*/}
        {/*          <Col xs="12" md="6" xl="6">*/}
        {/*            <Row>*/}
        {/*              <Col sm="6">*/}
        {/*                <div className="callout callout-info">*/}
        {/*                  <small className="text-muted">New Clients</small>*/}
        {/*                  <br />*/}
        {/*                  <strong className="h4">9,123</strong>*/}
        {/*                  <div className="chart-wrapper">*/}
        {/*                    <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </Col>*/}
        {/*              <Col sm="6">*/}
        {/*                <div className="callout callout-danger">*/}
        {/*                  <small className="text-muted">Recurring Clients</small>*/}
        {/*                  <br />*/}
        {/*                  <strong className="h4">22,643</strong>*/}
        {/*                  <div className="chart-wrapper">*/}
        {/*                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </Col>*/}
        {/*            </Row>*/}
        {/*            <hr className="mt-0" />*/}
        {/*            <div className="progress-group mb-4">*/}
        {/*              <div className="progress-group-prepend">*/}
        {/*                <span className="progress-group-text">*/}
        {/*                  Monday*/}
        {/*                </span>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group-bars">*/}
        {/*                <Progress className="progress-xs" color="info" value="34" />*/}
        {/*                <Progress className="progress-xs" color="danger" value="78" />*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="progress-group mb-4">*/}
        {/*              <div className="progress-group-prepend">*/}
        {/*                <span className="progress-group-text">*/}
        {/*                Tuesday*/}
        {/*                </span>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group-bars">*/}
        {/*                <Progress className="progress-xs" color="info" value="56" />*/}
        {/*                <Progress className="progress-xs" color="danger" value="94" />*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="progress-group mb-4">*/}
        {/*              <div className="progress-group-prepend">*/}
        {/*                <span className="progress-group-text">*/}
        {/*                Wednesday*/}
        {/*                </span>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group-bars">*/}
        {/*                <Progress className="progress-xs" color="info" value="12" />*/}
        {/*                <Progress className="progress-xs" color="danger" value="67" />*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="progress-group mb-4">*/}
        {/*              <div className="progress-group-prepend">*/}
        {/*                <span className="progress-group-text">*/}
        {/*                Thursday*/}
        {/*                </span>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group-bars">*/}
        {/*                <Progress className="progress-xs" color="info" value="43" />*/}
        {/*                <Progress className="progress-xs" color="danger" value="91" />*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="progress-group mb-4">*/}
        {/*              <div className="progress-group-prepend">*/}
        {/*                <span className="progress-group-text">*/}
        {/*                Friday*/}
        {/*                </span>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group-bars">*/}
        {/*                <Progress className="progress-xs" color="info" value="22" />*/}
        {/*                <Progress className="progress-xs" color="danger" value="73" />*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="progress-group mb-4">*/}
        {/*              <div className="progress-group-prepend">*/}
        {/*                <span className="progress-group-text">*/}
        {/*                Saturday*/}
        {/*                </span>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group-bars">*/}
        {/*                <Progress className="progress-xs" color="info" value="53" />*/}
        {/*                <Progress className="progress-xs" color="danger" value="82" />*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="progress-group mb-4">*/}
        {/*              <div className="progress-group-prepend">*/}
        {/*                <span className="progress-group-text">*/}
        {/*                Sunday*/}
        {/*                </span>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group-bars">*/}
        {/*                <Progress className="progress-xs" color="info" value="9" />*/}
        {/*                <Progress className="progress-xs" color="danger" value="69" />*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="legend text-center">*/}
        {/*              <small>*/}
        {/*                <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>*/}
        {/*                New clients*/}
        {/*                &nbsp;*/}
        {/*                <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>*/}
        {/*                Recurring clients*/}
        {/*              </small>*/}
        {/*            </div>*/}
        {/*          </Col>*/}
        {/*          <Col xs="12" md="6" xl="6">*/}
        {/*            <Row>*/}
        {/*              <Col sm="6">*/}
        {/*                <div className="callout callout-warning">*/}
        {/*                  <small className="text-muted">Pageviews</small>*/}
        {/*                  <br />*/}
        {/*                  <strong className="h4">78,623</strong>*/}
        {/*                  <div className="chart-wrapper">*/}
        {/*                    <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </Col>*/}
        {/*              <Col sm="6">*/}
        {/*                <div className="callout callout-success">*/}
        {/*                  <small className="text-muted">Organic</small>*/}
        {/*                  <br />*/}
        {/*                  <strong className="h4">49,123</strong>*/}
        {/*                  <div className="chart-wrapper">*/}
        {/*                    <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </Col>*/}
        {/*            </Row>*/}
        {/*            <hr className="mt-0" />*/}
        {/*            <ul>*/}
        {/*              <div className="progress-group">*/}
        {/*                <div className="progress-group-header">*/}
        {/*                  <i className="icon-user progress-group-icon"></i>*/}
        {/*                  <span className="title">Male</span>*/}
        {/*                  <span className="ml-auto font-weight-bold">43%</span>*/}
        {/*                </div>*/}
        {/*                <div className="progress-group-bars">*/}
        {/*                  <Progress className="progress-xs" color="warning" value="43" />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group mb-5">*/}
        {/*                <div className="progress-group-header">*/}
        {/*                  <i className="icon-user-female progress-group-icon"></i>*/}
        {/*                  <span className="title">Female</span>*/}
        {/*                  <span className="ml-auto font-weight-bold">37%</span>*/}
        {/*                </div>*/}
        {/*                <div className="progress-group-bars">*/}
        {/*                  <Progress className="progress-xs" color="warning" value="37" />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group">*/}
        {/*                <div className="progress-group-header">*/}
        {/*                  <i className="icon-globe progress-group-icon"></i>*/}
        {/*                  <span className="title">Organic Search</span>*/}
        {/*                  <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>*/}
        {/*                </div>*/}
        {/*                <div className="progress-group-bars">*/}
        {/*                  <Progress className="progress-xs" color="success" value="56" />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group">*/}
        {/*                <div className="progress-group-header">*/}
        {/*                  <i className="icon-social-facebook progress-group-icon"></i>*/}
        {/*                  <span className="title">Facebook</span>*/}
        {/*                  <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>*/}
        {/*                </div>*/}
        {/*                <div className="progress-group-bars">*/}
        {/*                  <Progress className="progress-xs" color="success" value="15" />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group">*/}
        {/*                <div className="progress-group-header">*/}
        {/*                  <i className="icon-social-twitter progress-group-icon"></i>*/}
        {/*                  <span className="title">Twitter</span>*/}
        {/*                  <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>*/}
        {/*                </div>*/}
        {/*                <div className="progress-group-bars">*/}
        {/*                  <Progress className="progress-xs" color="success" value="11" />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="progress-group">*/}
        {/*                <div className="progress-group-header">*/}
        {/*                  <i className="icon-social-linkedin progress-group-icon"></i>*/}
        {/*                  <span className="title">LinkedIn</span>*/}
        {/*                  <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>*/}
        {/*                </div>*/}
        {/*                <div className="progress-group-bars">*/}
        {/*                  <Progress className="progress-xs" color="success" value="8" />*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="divider text-center">*/}
        {/*                <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"*/}
        {/*                        title="" data-original-title="show more"><i className="icon-options"></i></Button>*/}
        {/*              </div>*/}
        {/*            </ul>*/}
        {/*          </Col>*/}
        {/*        </Row>*/}
        {/*        <br />*/}
        {/*        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">*/}
        {/*          <thead className="thead-light">*/}
        {/*          <tr>*/}
        {/*            <th className="text-center"><i className="icon-people"></i></th>*/}
        {/*            <th>User</th>*/}
        {/*            <th className="text-center">Country</th>*/}
        {/*            <th>Usage</th>*/}
        {/*            <th className="text-center">Payment Method</th>*/}
        {/*            <th>Activity</th>*/}
        {/*          </tr>*/}
        {/*          </thead>*/}
        {/*          <tbody>*/}
        {/*          <tr>*/}
        {/*            <td className="text-center">*/}
        {/*              <div className="avatar">*/}
        {/*                <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
        {/*                <span className="avatar-status badge-success"></span>*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div>Yiorgos Avraamu</div>*/}
        {/*              <div className="small text-muted">*/}
        {/*                <span>New</span> | Registered: Jan 1, 2015*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="clearfix">*/}
        {/*                <div className="float-left">*/}
        {/*                  <strong>50%</strong>*/}
        {/*                </div>*/}
        {/*                <div className="float-right">*/}
        {/*                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <Progress className="progress-xs" color="success" value="50" />*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="small text-muted">Last login</div>*/}
        {/*              <strong>10 sec ago</strong>*/}
        {/*            </td>*/}
        {/*          </tr>*/}
        {/*          <tr>*/}
        {/*            <td className="text-center">*/}
        {/*              <div className="avatar">*/}
        {/*                <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
        {/*                <span className="avatar-status badge-danger"></span>*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div>Avram Tarasios</div>*/}
        {/*              <div className="small text-muted">*/}

        {/*                <span>Recurring</span> | Registered: Jan 1, 2015*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="clearfix">*/}
        {/*                <div className="float-left">*/}
        {/*                  <strong>10%</strong>*/}
        {/*                </div>*/}
        {/*                <div className="float-right">*/}
        {/*                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <Progress className="progress-xs" color="info" value="10" />*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="small text-muted">Last login</div>*/}
        {/*              <strong>5 minutes ago</strong>*/}
        {/*            </td>*/}
        {/*          </tr>*/}
        {/*          <tr>*/}
        {/*            <td className="text-center">*/}
        {/*              <div className="avatar">*/}
        {/*                <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
        {/*                <span className="avatar-status badge-warning"></span>*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div>Quintin Ed</div>*/}
        {/*              <div className="small text-muted">*/}
        {/*                <span>New</span> | Registered: Jan 1, 2015*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in"></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="clearfix">*/}
        {/*                <div className="float-left">*/}
        {/*                  <strong>74%</strong>*/}
        {/*                </div>*/}
        {/*                <div className="float-right">*/}
        {/*                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <Progress className="progress-xs" color="warning" value="74" />*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="small text-muted">Last login</div>*/}
        {/*              <strong>1 hour ago</strong>*/}
        {/*            </td>*/}
        {/*          </tr>*/}
        {/*          <tr>*/}
        {/*            <td className="text-center">*/}
        {/*              <div className="avatar">*/}
        {/*                <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
        {/*                <span className="avatar-status badge-secondary"></span>*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div>Enéas Kwadwo</div>*/}
        {/*              <div className="small text-muted">*/}
        {/*                <span>New</span> | Registered: Jan 1, 2015*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr"></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="clearfix">*/}
        {/*                <div className="float-left">*/}
        {/*                  <strong>98%</strong>*/}
        {/*                </div>*/}
        {/*                <div className="float-right">*/}
        {/*                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <Progress className="progress-xs" color="danger" value="98" />*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }}></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="small text-muted">Last login</div>*/}
        {/*              <strong>Last month</strong>*/}
        {/*            </td>*/}
        {/*          </tr>*/}
        {/*          <tr>*/}
        {/*            <td className="text-center">*/}
        {/*              <div className="avatar">*/}
        {/*                <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
        {/*                <span className="avatar-status badge-success"></span>*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div>Agapetus Tadeáš</div>*/}
        {/*              <div className="small text-muted">*/}
        {/*                <span>New</span> | Registered: Jan 1, 2015*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="flag-icon flag-icon-es h4 mb-0" title="es" id="es"></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="clearfix">*/}
        {/*                <div className="float-left">*/}
        {/*                  <strong>22%</strong>*/}
        {/*                </div>*/}
        {/*                <div className="float-right">*/}
        {/*                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <Progress className="progress-xs" color="info" value="22" />*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }}></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="small text-muted">Last login</div>*/}
        {/*              <strong>Last week</strong>*/}
        {/*            </td>*/}
        {/*          </tr>*/}
        {/*          <tr>*/}
        {/*            <td className="text-center">*/}
        {/*              <div className="avatar">*/}
        {/*                <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
        {/*                <span className="avatar-status badge-danger"></span>*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div>Friderik Dávid</div>*/}
        {/*              <div className="small text-muted">*/}
        {/*                <span>New</span> | Registered: Jan 1, 2015*/}
        {/*              </div>*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="flag-icon flag-icon-pl h4 mb-0" title="pl" id="pl"></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="clearfix">*/}
        {/*                <div className="float-left">*/}
        {/*                  <strong>43%</strong>*/}
        {/*                </div>*/}
        {/*                <div className="float-right">*/}
        {/*                  <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <Progress className="progress-xs" color="success" value="43" />*/}
        {/*            </td>*/}
        {/*            <td className="text-center">*/}
        {/*              <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }}></i>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*              <div className="small text-muted">Last login</div>*/}
        {/*              <strong>Yesterday</strong>*/}
        {/*            </td>*/}
        {/*          </tr>*/}
        {/*          </tbody>*/}
        {/*        </Table>*/}
        {/*      </CardBody>*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </div>
    );
  }
}

export default Dashboard;
