import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {
  Card,
  CardBody,
  Col,
  Row,

} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {connect} from "react-redux";
import {getVehicles, getVehiclesMonthQuery} from "../../store/actions/vehicleAction";


const PartnerDashboard  = (props) => {
  const {
    vehicles,
    getVehicles,
    getVehiclesMonthQuery,
    vehicleMonthQuery,
  } = props

  const [vehiclemonthQuery, setVehiclemonthQuery] = useState([])


  const year = new Date().getFullYear()


  useEffect(()=> {
    getVehicles();
  },[])

  useEffect(()=> {
    getVehiclesMonthQuery(year)
  },[])



  useEffect(()=> {
    if(vehicleMonthQuery) {
      setVehiclemonthQuery(Object.values(vehicleMonthQuery))
    }
  },[vehicleMonthQuery])


  const cardChartData5 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'],
    datasets: [
      {
        label: 'Vehicles',
        backgroundColor: '#00BFFF',
        borderColor: 'white',
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



  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="6" lg="3">
          <Card className="text-white" style={{backgroundColor: '#00BFFF'}}>
            <CardBody className="pb-0">
              <div className="float-right" style={{color: "white"}}>
                <i className="large material-icons">local_taxi</i>
              </div>
              <div className="text-value" style={{color: "white"}}>{vehicles? vehicles.length:0}</div>
              <div style={{color: "white"}}>Total Vehicles</div>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              <Line data={cardChartData5} options={cardChartOpts5} height={70} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getVehiclesMonthQuery: (year) => dispatch(getVehiclesMonthQuery(year)),
    getVehicles: () => dispatch(getVehicles()),
  };
}

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
  vehicleMonthQuery: state.vehicle.vehicleMonthQuery,
});

export default connect(mapStateToProps,mapDispatchToProps)(PartnerDashboard);
