import React, {Component, useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {connect} from "react-redux";
import axios from "axios"
import {getDrivers} from "../../store/actions/driverAction";
import Spinner from "../../spinner/Spinner";
import api from "../../environments/environment";


const Trip = ({match, getDrivers, drivers})=> {
  const [trip, setTrip] = useState({});
  const [pasPIn, setPasPin] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [driverDetails, setDriverDetails] = useState({});
  const [driverPin, setDriverPin] = useState({});
  const [driverVehicleDetails, setDriverVehicleDetails] = useState({});
  const [stateDetails, setStateDetails] = useState('');
  const [vehicle, setVehicle] = useState({});

  const getBadge = (status) => {
    return status === 'Completed' ? 'success' :
      status === 'Transit' ? 'warning' :
        status === 'Waiting' ? 'primary' :
          status === 'Unsuccessful' ? 'danger' :
            'primary'
  };



  function  getTrip(id) {
axios.get(`${api.trip}/api/trips/${id}/`)
  .then(res=> {
    setTrip(res.data);
    setPasPin(res.data.passengerPin);
    setDriverPin(res.data.driverPin);
  })
 }

 function getUser(id) {
   axios.get(`${api.user}/api/check/?pin=${id}`)
     .then(res=> {
       setUserDetails(res.data)
     })
 }

 function getDriverVehicle(id) {
   axios.get(`${api.driverVehicles}/api/me/drivervehicles/`)
     .then(res=> {
       res.data.map(driverVehicle=> {
         if(driverVehicle.driverId == id){
           setDriverVehicleDetails(driverVehicle)
         }
       })
     })
 }

 function getVehicle(id) {
   axios.get(`${api.vehicle}/api/vehicles/${id}/`)
     .then(res=> {
       setVehicle(res.data)
     })
 }

 function getZone() {
    axios.get(`${api.zone}/api/zones/`)
      .then(res=> {
        res.data.map(zone=> {
          if(zone.zone === driverDetails.zone) {
            setStateDetails(zone.statecode)
          }
        })
      })
 }

  function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }

 useEffect(()=> {
   if(driverDetails.zone) {
     getZone()
   }
 },[driverDetails]);

 useEffect(()=> {
   if(driverVehicleDetails.vehicleId){
     getVehicle(driverVehicleDetails.vehicleId)
   }
 },[driverVehicleDetails]);


useEffect(()=> {
  if(driverDetails) {
    getDriverVehicle(driverDetails.id)
  }
},[driverDetails]);

useEffect(()=> {
  if(match.params.id){
    getTrip(match.params.id)
  }
},[match.params.id]);

 useEffect(()=> {
   if(pasPIn){
     getUser(pasPIn)
   }
 },[pasPIn]);

useEffect(()=> {
  getDrivers()
},[]);

useEffect(()=> {
  if(drivers && driverPin){
    drivers.map(driver=> {
      if(driver.pin === driverPin){
        setDriverDetails(driver)
      }
    })
  }
},[drivers, driverPin]);


  return (
    <div className="animated fadeIn">
      <Row className="d-flex align-items-center justify-content-center">
        <div className='d-flex align-items-center justify-content-center w-100'> {(!stateDetails) && <Spinner />}</div>

        <Col lg={6}>
          {(trip && driverDetails && userDetails && stateDetails && vehicle) &&
          <Card>
            <CardHeader className="bg-dark">
              <strong><i className="icon-info pr-1"></i>Trip id: {match.params.id}</strong>
            </CardHeader>
            <CardBody >
              <Table>
                {trip &&
                <tbody>
                <tr>
                  <td><strong>Passenger Pin</strong></td>
                  <td>{trip.passengerPin}</td>
                </tr>
                {/*<tr className="w-100">*/}
                {/*  <td><strong>Full Name</strong></td>*/}
                {/*  <td>{userDetails.firstName} {userDetails.lastName}</td>*/}
                {/*</tr>*/}
                <tr className="w-100">
                  <td><strong>Pick Up</strong></td>
                  <td>{trip.pickUp}</td>
                </tr>
                <tr>
                  <td><strong>Drop off</strong></td>
                  <td>{trip.dropOff}</td>
                </tr>
                <tr>
                  <td><strong>Booking Date/time</strong></td>
                  {trip.bookingTimestamp ? <td>{new Date(trip.bookingTimestamp).toLocaleString()}</td>: null}
                  {/*<td>{new Date(trip.bookingTimestamp).toLocaleString()}</td>*/}
                </tr>
                {/*<tr>*/}
                {/*  <td><strong>Passenger Phone</strong></td>*/}
                {/*  <td>{userDetails.phoneNumber}</td>*/}
                {/*</tr>*/}
                <tr>
                  <td><strong> Distance</strong></td>
                  <td>{trip.distance}</td>
                </tr>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>{trip.cost}</td>
                </tr>
                <tr>
                  <td><strong>Mode</strong></td>
                  <td>Zeno shuttle</td>
                </tr>
                <tr>
                  <td><strong>State</strong></td>
                  <td>{stateDetails}</td>
                </tr>
                <tr>
                  <td><strong>Zone</strong></td>
                  <td>{driverDetails.zone}</td>
                </tr>
                <tr>
                  <td><strong>Area</strong></td>
                  <td>{driverDetails.area}</td>
                </tr>
                <tr>
                  <td><strong>Route</strong></td>
                  <td>{driverDetails.route}</td>
                </tr>
                <tr>
                  <td><strong>Start time</strong></td>
                  {trip.pickedTimestamp ?  <td>{new Date(trip.pickedTimestamp).toLocaleString()}</td>: <td>Not Available</td>}
                  {/*<td>{new Date(trip.pickedTimestamp)}</td>*/}
                </tr>
                <tr>
                  <td><strong>End Time</strong></td>
                  {trip.dropTimestamp ? <td>{new Date(trip.dropTimestamp).toLocaleString()}</td>: <td>Not Available</td>}
                </tr>
                <tr>
                  <td><strong>Transit Time</strong></td>
                  {(trip.pickedTimestamp && trip.dropTimestamp) ? <td>{millisToMinutesAndSeconds(Math.abs(new Date(trip.pickedTimestamp)- new Date(trip.dropTimestamp)))} sec</td>: <td>Not Available</td>}

                </tr>
                <tr>
                  <td><strong>Driver Name</strong></td>
                  <td>{driverDetails.firstname} {driverDetails.lastname}</td>
                </tr>
                <tr>
                  <td><strong>Driver Phone</strong></td>
                  <td>{driverDetails.phoneno}</td>
                </tr>
                <tr>
                  <td><strong>Vehicle Plate No</strong></td>
                  <td>{vehicle.plate_number}</td>
                </tr>
                <tr>
                  <td><strong>Operator</strong></td>
                  <td>{vehicle.operator}</td>
                </tr>
                <tr>
                  <td><strong>Scheduled Pickup Time </strong></td>
                  <td>{trip.schedulePickTime}</td>
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  {(trip.pickStatus === "1" && trip.dropStatus === "0") && <td><Badge color={getBadge("Transit")}>Transit</Badge></td> }
                  {(trip.pickStatus === "1" && trip.dropStatus === "1") && <td><Badge color={getBadge("Completed")}>Completed</Badge></td> }
                  {(trip.pickStatus === "0" && trip.dropStatus === "0") && <td><Badge color={getBadge("Waiting")}>Waiting</Badge></td> }
                </tr>
                </tbody>
                }

              </Table>
            </CardBody>
          </Card>
          }

        </Col>
      </Row>
    </div>
  )

}

function mapDispatchToProps(dispatch) {
  return {
    getDrivers: () => dispatch(getDrivers()),
    // getOperators: () => dispatch(getOperators()),
    // searchOperator: (id) => dispatch(searchOperator(id)),
  };
}

const mapStateToProps = state => ({
  drivers: state.driver.drivers,
});

export default connect(mapStateToProps,mapDispatchToProps)(Trip);
