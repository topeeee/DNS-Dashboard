import React, {useEffect, useState} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Card,
  CardBody,
  Col,
  Row,

} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import {getUsers} from "../../store/actions/userAction";
import {connect} from "react-redux";
import {getOperators} from "../../store/actions/operatorAction";
import {getDrivers} from "../../store/actions/driverAction";
import {getBusAssistants, getOperationAssistantsMonthQuery} from "../../store/actions/busAssistantAction";
import {getTrips} from "../../store/actions/tripAction";
import {getVehicles, getVehiclesMonthQuery} from "../../store/actions/vehicleAction";
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

const Dashboard  = (props) => {
  const {
    users,
    operators,
    drivers,
    busAssistants,
    trips,
    vehicles,
    areas,
    busStops,
    routes,
    states,
    zones,
    getUsers,
    getOperators,
    getDrivers,
    getBusAssistants,
    getTrips,
    getVehicles,
    getAreas,
    BusStopUser,
    RouteUser,
    getStates,
    ZoneUser,
    OAMonthQuery,
    getOperationAssistantsMonthQuery,
    getVehiclesMonthQuery,
    vehicleMonthQuery
  } = props

  const [oamonthQuery, setOamonthQuery] = useState([])
  const [vehiclemonthQuery, setVehiclemonthQuery] = useState([])

const year = new Date().getFullYear()


  useEffect(()=> {
    getUsers();
    getOperators();
    getDrivers();
    getBusAssistants();
    getTrips();
    getVehicles();
    getAreas();
    BusStopUser();
    RouteUser();
    getStates();
    ZoneUser();
  },[])

  useEffect(()=> {
    if(year) {
      getOperationAssistantsMonthQuery(year);
      getVehiclesMonthQuery(year)
    }
  },[year])

  useEffect(()=> {
    if(OAMonthQuery) {
      setOamonthQuery(Object.values(OAMonthQuery))
    }
  },[OAMonthQuery])

  useEffect(()=> {
    if(vehicleMonthQuery) {
      setVehiclemonthQuery(Object.values(vehicleMonthQuery))
    }
  },[vehicleMonthQuery])



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
  const operatorAssistantsCardChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
    datasets: [
      {
        label: 'Operator Assistants',
        backgroundColor: brandSuccess,
        borderColor: 'rgba(255,255,255,.55)',
        data: oamonthQuery,
      },
    ],
  };

  const operatorAssistantsCardChartOpts = {
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
            min: Math.min.apply(Math, operatorAssistantsCardChartData.datasets[0].data) - 5,
            max: Math.max.apply(Math, operatorAssistantsCardChartData.datasets[0].data) + 5,
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
            min: Math.min.apply(Math, cardChartData40.datasets[0].data) - 5,
            max: Math.max.apply(Math, cardChartData40.datasets[0].data) + 5,
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
        data: vehiclemonthQuery,
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
        label: 'Cancelled Trips',
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
          // display: false,
          gridLines: {
            color: 'transparent',
            zeroLineColor: '#F0FFF0',
          },
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
        backgroundColor: '#800000',
        borderColor: '#800000',
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
        backgroundColor: '#2F4F4F',
        borderColor: '#2F4F4F',
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
        backgroundColor: '#FAEBD7',
        borderColor: '#FAEBD7',
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

  return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#5F9EA0'}}>
              <CardBody className="pb-0">
                <div className="text-value" style={{color: "#2F4F4F"}}>N10,234,710</div>
                <div style={{color: "#2F4F4F"}}>Gross Revenue</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData17} options={cardChartOpts17} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#000000'}}>
              <CardBody className="pb-0">
                <div className="text-value" style={{color: "#FAEBD7"}}>N2,234,710</div>
                <div style={{color: "#FAEBD7"}}>Zeno Gross Revenue </div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData18} options={cardChartOpts18} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#B8860B'}}>
              <CardBody className="pb-0">
                <div className="text-value" style={{color: "black"}}>N6,234,170</div>
                <div style={{color: "black"}}>Operator Gross Revenue </div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Bar data={cardChartData19} options={cardChartOpts19} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-white" style={{borderColor: 'white'}}>
              <CardBody className="pb-0">
                <div className="text-value" style={{color: "#800000"}}>N1,000,2000</div>
                <div style={{color: "#800000"}}>Maintenance Revenue</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData20} options={cardChartOpts20} height={70} />
              </div>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning" >
              <CardBody className="pb-0">
                <div className="text-value" style={{color: "red"}} >{users? users.length: 0}</div>
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
                <div className="text-value" style={{color: "green"}}>{operators? operators.length: 0}</div>
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
                <div className="text-value" style={{color: "purple"}}>{drivers? drivers.length: 0}</div>
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
                <div className="text-value" style={{color: "white"}}>{busAssistants? busAssistants.length: 0}</div>
                <div style={{color: "white"}}>Total Operation Assistants</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={operatorAssistantsCardChartData} options={operatorAssistantsCardChartOpts} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white" style={{backgroundColor: '#BDB76B'}}>
              <CardBody className="pb-0">
                <div className="text-value" style={{color: "#8B008B"}}>{trips? trips.filter((user) => user.pickStatus === "1" && user.dropStatus === "1").length: 0}</div>
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
                <div className="text-value" style={{color: "#F0FFF0"}}>{trips? trips.filter((user) => user.pickStatus === "2" && user.dropStatus === "2").length: 0}</div>
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
                <div className="text-value" style={{color: "black"}}>{trips? trips.filter((user) => user.pickStatus === "0" && user.dropStatus === "0").length: 0}</div>
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
                <div className="text-value" style={{color: "#6A5ACD"}}>{trips? trips.filter((user) => user.pickStatus === "1" && user.dropStatus === "0").length: 0}</div>
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
                <div className="text-value" style={{color: "#FFFFE0"}}>{vehicles? vehicles.length:0}</div>
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
                <div className="text-value" style={{color: "#B22222"}}>{zones? zones.length:0}</div>
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
                <div className="text-value" style={{color: "#F0E68C"}}>{areas? areas.length:0}</div>
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
                <div className="text-value" style={{color: "#A52A2A"}}>{routes? routes.length:0}</div>
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
                <div className="text-value" style={{color: "#FFF8DC"}}>{busStops? busStops.length:0}</div>
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
    getOperationAssistantsMonthQuery: (year) => dispatch(getOperationAssistantsMonthQuery(year)),
    getVehiclesMonthQuery: (year) => dispatch(getVehiclesMonthQuery(year)),
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
  OAMonthQuery: state.busAssistants.bussAssistantsMonthQuery,
  vehicleMonthQuery: state.vehicle.vehicleMonthQuery,
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
