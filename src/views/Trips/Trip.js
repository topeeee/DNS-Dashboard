import React, {Component, useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import * as usersData from "core-js";

import {connect} from "react-redux";
import axios from "axios"
import {getDrivers} from "../../store/actions/driverAction";


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
axios.get(`http://165.22.116.11:7500/api/trips/${id}/`)
  .then(res=> {
    setTrip(res.data);
    setPasPin(res.data.passengerPin);
    setDriverPin(res.data.driverPin);
  })
 }

 function getUser(id) {
   axios.get(`http://165.22.116.11:7200/api/check/?pin=${id}`)
     .then(res=> {
       setUserDetails(res.data)
     })
 }

 function getDriverVehicle(id) {
   axios.get('http://165.22.116.11:7054/api/me/drivervehicles/')
     .then(res=> {
       res.data.map(driverVehicle=> {
         if(driverVehicle.driverId == id){
           setDriverVehicleDetails(driverVehicle)
         }
       })
     })
 }

 function getVehicle(id) {
   axios.get(`http://165.22.116.11:7050/api/vehicles/${id}/`)
     .then(res=> {
       setVehicle(res.data)
     })
 }

 function getZone() {
    axios.get('http://165.22.116.11:7005/api/zones/')
      .then(res=> {
        res.data.map(zone=> {
          if(zone.zone === driverDetails.zone) {
            setStateDetails(zone.statecode)
          }
        })
      })
 }

 useEffect(()=> {
   if(driverDetails.zone) {
     getZone()
   }
 },[driverDetails])

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
        <Col lg={6}>
          <Card>
            <CardHeader className="bg-dark">
              <strong><i className="icon-info pr-1"></i>User id: {match.params.id}</strong>
            </CardHeader>
            <CardBody >
              <Table>
                {trip &&
                <tbody>
                <tr>
                  <td><strong>Passenger Pin</strong></td>
                  <td>{trip.passengerPin}</td>
                </tr>
                <tr className="w-100">
                  <td><strong>Full Name</strong></td>
                  <td>{userDetails.firstName} {userDetails.lastName}</td>
                </tr>
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
                <tr>
                  <td><strong>Passenger Phone</strong></td>
                  <td>{userDetails.phoneNumber}</td>
                </tr>
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
                  <td>{trip.mode}</td>
                </tr>
                <tr>
                  <td><strong>State</strong></td>
                  <td>{stateDetails}</td>
                </tr>
                <tr>
                  <td><strong>Start time</strong></td>
                  {trip.pickedTimestamp ?  <td>{new Date(trip.pickedTimestamp).toLocaleString()}</td>: null}
                  {/*<td>{new Date(trip.pickedTimestamp)}</td>*/}
                </tr>
                <tr>
                  <td><strong>End Time</strong></td>
                  {trip.dropTimestamp ? <td>{new Date(trip.dropTimestamp).toLocaleString()}</td>: null}
                </tr>
                <tr>
                  <td><strong>Transit Time</strong></td>
                  {/*<td>{newOperator.zone}</td>*/}
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
