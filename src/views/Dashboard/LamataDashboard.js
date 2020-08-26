import React, { Component, lazy, Suspense } from 'react';
import {Bar, Line, HorizontalBar} from 'react-chartjs-2';
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,

} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import {getUsers} from "../../store/actions/userAction";
import {connect} from "react-redux";
import {getOperators} from "../../store/actions/operatorAction";
import {getDrivers} from "../../store/actions/driverAction";
import {getBusAssistants} from "../../store/actions/busAssistantAction";
import {getTrips} from "../../store/actions/tripAction";
import {getVehicles} from "../../store/actions/vehicleAction";
import {getAreas} from "../../store/actions/areaAction";
import {BusStopUser} from "../../store/actions/busStopAction";
import {RouteUser} from "../../store/actions/routeAction";
import {getStates} from "../../store/actions/stateAction";
import {ZoneUser} from "../../store/actions/zoneAction";
const brandSuccess = getStyle('--success')
const brandBlack = getStyle('--dark')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
const brandPrimary = getStyle('--primary')


// Card Chart 1
const cardChartData1 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Operators',
      backgroundColor: brandPrimary,
      borderColor: 'green',
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

const cardChartData50 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Operators',
      backgroundColor: 'black',
      borderColor: 'black',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts50 = {
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
      backgroundColor: brandWarning,
      borderColor: 'red',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
}

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
      backgroundColor: brandDanger,
      borderColor: 'purple',
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
      backgroundColor: brandSuccess,
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

const cardChartData40 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
  datasets: [
    {
      label: 'Bus Assistants',
      backgroundColor: '#6A5ACD',
      borderColor: '#6A5ACD',
      data: [65, 59, 84, 84, 51, 55, 40, 60, 78, 68, 90, 23],
    },
  ],
};

const cardChartOpts40 = {
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
      backgroundColor: '#4B0082',
      borderColor: '#FFFFE0',
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
      backgroundColor: '#8B008B',
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
      backgroundColor: '#F0FFF0',
      borderColor: '#F0FFF0',
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
      backgroundColor: 'green',
      borderColor: 'green',
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
      backgroundColor: '#800000',
      borderColor: '#B0C4DE',
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
      backgroundColor: '#B22222',
      borderColor: '#B22222',
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
      backgroundColor: '#F0E68C',
      borderColor: '#F0E68C',
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
      backgroundColor: '#DEB887',
      borderColor: '#A52A2A',
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
      backgroundColor: '#FF7F50',
      borderColor: '#FFF8DC',
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

class LamataDashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getOperators();
    this.props.getDrivers();
    this.props.getBusAssistants();
    this.props.getTrips();
    this.props.getVehicles();
    this.props.getAreas();
    this.props.BusStopUser();
    this.props.RouteUser();
    this.props.getStates();
    this.props.ZoneUser();
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
            <Card className="text-white bg-warning" >
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "red"}} >{this.props.users? this.props.users.length: 0}</div>
                <div style={{color: "red"}}>Total Users</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary" >
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "green"}}>{this.props.operators? this.props.operators.length: 0}</div>
                <div style={{color: "green"}}>Total Operators</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "purple"}}>{this.props.drivers? this.props.drivers.length: 0}</div>
                <div style={{color: "purple"}}>Total Drivers</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success" >
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "white"}}>{this.props.busAssistants? this.props.busAssistants.length: 0}</div>
                <div style={{color: "white"}}>Operation Assistants</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#BDB76B'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card7' isOpen={this.state.card7} toggle={() => { this.setState({ card7: !this.state.card7 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#8B008B"}}>{this.props.trips? this.props.trips.filter((user) => user.pickStatus === "1" && user.dropStatus === "1").length: 0}</div>
                <div style={{color: "#8B008B"}}>Total Completed Trips</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Bar data={cardChartData7} options={cardChartOpts7} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#2F4F4F'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card9' isOpen={this.state.card9} toggle={() => { this.setState({ card9: !this.state.card9 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#F0FFF0"}}>{this.props.trips? this.props.trips.filter((user) => user.pickStatus === "2" && user.dropStatus === "2").length: 0}</div>
                <div style={{color: "#F0FFF0"}}>Total Cancelled Trips</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData9} options={cardChartOpts9} height={70} />
              </div>
            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#808000'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card6' isOpen={this.state.card6} toggle={() => { this.setState({ card6: !this.state.card6 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "black"}}>{this.props.trips? this.props.trips.filter((user) => user.pickStatus === "0" && user.dropStatus === "0").length: 0}</div>
                <div style={{color: "black"}}>Total Waiting Trips</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                  <Bar data={cardChartData50} options={cardChartOpts50} height={70} />
              </div>
            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#F4A460'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card8' isOpen={this.state.card8} toggle={() => { this.setState({ card8: !this.state.card8 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#6A5ACD"}}>{this.props.trips? this.props.trips.filter((user) => user.pickStatus === "1" && user.dropStatus === "0").length: 0}</div>
                <div style={{color: "#6A5ACD"}}> Total Transit Trips</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData40} options={cardChartOpts40} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#FAF0E6'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card10' isOpen={this.state.card10} toggle={() => { this.setState({ card10: !this.state.card10 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "green"}}>13,067 hours</div>
                <div style={{color: "green"}}>Total Transit Time</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData10} options={cardChartOpts10} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#800000'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card11' isOpen={this.state.card11} toggle={() => { this.setState({ card11: !this.state.card11 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#B0C4DE"}}>25,456 km</div>
                <div style={{color: "#B0C4DE"}}>Total Distance Covered</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData11} options={cardChartOpts11} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#4B0082'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card5' isOpen={this.state.card5} toggle={() => { this.setState({ card5: !this.state.card5 }); }}>*/}
                    {/*<DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                    {/*  <i className="icon-settings"></i>*/}
                    {/*</DropdownToggle>*/}
                    {/*<DropdownMenu right>*/}
                    {/*  <DropdownItem>View Records</DropdownItem>*/}
                    {/*  <DropdownItem>Search Records</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                  {/*</ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#FFFFE0"}}>{this.props.vehicles? this.props.vehicles.length:0}</div>
                <div style={{color: "#FFFFE0"}}>Total Vehicles</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData5} options={cardChartOpts5} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#CD5C5C'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card16' isOpen={this.state.card16} toggle={() => { this.setState({ card16: !this.state.card16 }); }}>*/}
                    {/*<DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                    {/*  <i className="icon-settings"></i>*/}
                    {/*</DropdownToggle>*/}
                    {/*<DropdownMenu right>*/}
                    {/*  <DropdownItem>View Records</DropdownItem>*/}
                    {/*  <DropdownItem>Search Records</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                  {/*</ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "black"}}>100</div>
                <div style={{color: "black"}}>Total Geo-Fenced Areas </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData16} options={cardChartOpts16} height={70} />
              </div>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#D2691E'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card12' isOpen={this.state.card12} toggle={() => { this.setState({ card12: !this.state.card12 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#B22222"}}>{this.props.zones? this.props.zones.length:0}</div>
                <div style={{color: "#B22222"}}>Total Zones </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData12} options={cardChartOpts12} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#556B2F'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <ButtonDropdown id='card13' isOpen={this.state.card13} toggle={() => { this.setState({ card13: !this.state.card13 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </ButtonDropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#F0E68C"}}>{this.props.areas? this.props.areas.length:0}</div>
                <div style={{color: "#F0E68C"}}>Total Areas </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData13} options={cardChartOpts13} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#DEB887'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card14' isOpen={this.state.card14} toggle={() => { this.setState({ card14: !this.state.card14 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#A52A2A"}}>{this.props.routes? this.props.routes.length:0}</div>
                <div style={{color: "#A52A2A"}}>Total Routes </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData14} options={cardChartOpts14} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#FF7F50'}}>
              <CardBody className="pb-0">
                {/*<ButtonGroup className="float-right">*/}
                {/*  <Dropdown id='card15' isOpen={this.state.card15} toggle={() => { this.setState({ card15: !this.state.card15 }); }}>*/}
                {/*    <DropdownToggle caret className="p-0" color="transparent" style={{color: "black"}}>*/}
                {/*      <i className="icon-settings"></i>*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right>*/}
                {/*      <DropdownItem>View Records</DropdownItem>*/}
                {/*      <DropdownItem>Search Records</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*  </Dropdown>*/}
                {/*</ButtonGroup>*/}
                <div className="text-value" style={{color: "#FFF8DC"}}>{this.props.busStops? this.props.busStops.length:0}</div>
                <div style={{color: "#FFF8DC"}}>Total Bus Stops </div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData15} options={cardChartOpts15} height={70} />
              </div>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
    getOperators: () => dispatch(getOperators()),
    getDrivers: () => dispatch(getDrivers()),
    getBusAssistants: () => dispatch(getBusAssistants()),
    getTrips: () => dispatch(getTrips()),
    getVehicles: () => dispatch(getVehicles()),
    getAreas: () => dispatch(getAreas()),
    BusStopUser: () => dispatch(BusStopUser()),
    RouteUser: () => dispatch(RouteUser()),
    getStates: () => dispatch(getStates()),
    ZoneUser: () => dispatch(ZoneUser()),
  };
}

const mapStateToProps = state => ({
  users: state.user.users,
  operators: state.operator.operators,
  drivers: state.driver.drivers,
  busAssistants: state.busAssistants.busAssistants,
  trips: state.trip.trips,
  vehicles: state.vehicle.vehicles,
  areas: state.area.areas,
  busStops: state.busStop.busStops,
  routes: state.route.routes,
  states: state.state.states,
  zones: state.zone.zones,
});

export default connect(mapStateToProps,mapDispatchToProps)(LamataDashboard);
