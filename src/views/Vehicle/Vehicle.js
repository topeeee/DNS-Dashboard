import React, {Component, useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import * as usersData from "core-js";

import {connect} from "react-redux";
import axios from "axios"
import {getVehicles} from "../../store/actions/vehicleAction";


const Operator = ({getVehicles, match, vehicles})=> {
  // const [operator, setOperator] = useState([]);
  const [newOperator, setNewOperator] = useState({});


  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'danger' :
        status === 'Pending' ? 'warning' :
          'primary'
  };

  function setVehicle() {
    if (vehicles){
      vehicles.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op)
        }
      })
    }
  }
  useEffect(()=>{
    getVehicles();
  },[]);

  useEffect(()=>{
    setVehicle();
  },[vehicles]);


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
                {newOperator &&
                <tbody>
                <tr>
                  <td><strong>Vehicle Type</strong></td>
                  <td>{newOperator.vehicle_type}</td>
                </tr>
                  <tr className="w-100">
                    <td><strong>Vehicle Make</strong></td>
                    <td>{newOperator.vehicle_make}</td>
                  </tr>
                <tr className="w-100">
                  <td><strong>Vehicle Model</strong></td>
                  <td>{newOperator.vehicle_model}</td>
                </tr>
                <tr>
                  <td><strong>Plate Number</strong></td>
                  <td>{newOperator.plate_number}</td>
                </tr>
                <tr>
                  <td><strong>Capacity</strong></td>
                  <td>{newOperator.capacity}</td>
                </tr>
                <tr>
                  <td><strong>Operator</strong></td>
                  <td>{newOperator.operator}</td>
                </tr>
                <tr>
                  <td><strong>Assigned</strong></td>
                  {(newOperator.assigned == "1") && <td><Badge color={getBadge("Active")}>Yes</Badge></td>}
                  {((newOperator.assigned == null) || (newOperator.assigned == "null") ) && <td><Badge color={getBadge("Inactive")}>No</Badge></td>}
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  {(newOperator.status === null) && <td><Badge color={getBadge("Pending")}>Pending</Badge></td>}
                  {(newOperator.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td>}
                  {(newOperator.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td>}
                </tr>
                {/*<tr>*/}
                {/*  <td><strong>Operator Email</strong></td>*/}
                {/*  <td>{newOperator.email}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Vehicle Type</strong></td>*/}
                {/*  {operatorVehicle && operatorVehicle.map((vehicle, index) =>*/}
                {/*    <td  key={index}>{vehicle.vehicleType}</td>*/}
                {/*  )}*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Mode</strong></td>*/}
                {/*  {operatorMode && operatorMode.map((mode, index) =>*/}
                {/*    <td  key={index}>{mode.modecode}</td>*/}
                {/*  )}*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Zone</strong></td>*/}
                {/*  {operatorZone && operatorZone.map((zone, index) =>*/}
                {/*    <td  key={index}>{zone.zoneCode}</td>*/}
                {/*  )}*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>State</strong></td>*/}
                {/*  {states && states.map((state, index) =>*/}
                {/*    <td  key={index}>{state.xstate}</td>*/}
                {/*  )}*/}
                {/*</tr>*/}
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
    getVehicles: () => dispatch(getVehicles()),
    // getOperators: () => dispatch(getOperators()),
    // searchOperator: (id) => dispatch(searchOperator(id)),
  };
}

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,



});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
