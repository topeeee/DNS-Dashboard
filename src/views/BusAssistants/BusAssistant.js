import React, {Component, useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import * as usersData from "core-js";

import {connect} from "react-redux";
import axios from "axios"
import {getBusAssistants} from "../../store/actions/busAssistantAction";


const BusAssistant = ({getBusAssistants, operators, operator, isLoading,  searchOperator, error, match, busAssistants})=> {
  // const [operator, setOperator] = useState([]);
  const [newOperator, setNewOperator] = useState({});
  const [operatorVehicle, setOperatorVehicle] = useState([]);
  const [operatorZone, setOperatorZone] = useState([]);
  const [operatorMode, setOperatorMode] = useState([]);

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Inactive' ? 'danger' :
            'primary'
  };


  function setBusAssistant() {
    if (busAssistants){
      busAssistants.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op)
        }
      })
    }
  }
  useEffect(()=>{
    getBusAssistants();
  },[]);

  useEffect(()=>{
    setBusAssistant();
  },[busAssistants]);

  // useEffect(()=>{
  //   if(newOperator.name) {
  //     getOperatorMode()
  //   }
  // },[newOperator]);
  // const user = operators.find( user => user.id === this.props.match.params.id);

  // const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

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
                  <td><strong>FirstName</strong></td>
                  <td>{newOperator.firstName}</td>
                </tr>
                  <tr className="w-100">
                    <td><strong>LastName</strong></td>
                    <td>{newOperator.lastName}</td>
                  </tr>
                <tr className="w-100">
                  <td><strong>Phone</strong></td>
                  <td>{newOperator.phoneNo}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>{newOperator.email}</td>
                </tr>
                <tr>
                  <td><strong>Address</strong></td>
                  <td>{newOperator.residentialAddress}</td>
                </tr>
                {/*<tr>*/}
                {/*  <td><strong>App Status</strong></td>*/}
                {/*  <td>{newOperator.appstatus}</td>*/}
                {/*</tr>*/}
                <tr>
                  <td><strong>Bank Name</strong></td>
                  <td>{newOperator.bankName}</td>
                </tr>
                <tr>
                  <td><strong>Account Name</strong></td>
                  <td>{newOperator.accountName}</td>
                </tr>
                <tr>
                  <td><strong>Account Number</strong></td>
                  <td>{newOperator.accountNumber}</td>
                </tr>
                <tr>
                  <td><strong>Route</strong></td>
                  <td>{newOperator.route}</td>
                </tr>
                <tr>
                  <td><strong>Area</strong></td>
                  <td>{newOperator.area}</td>
                </tr>
                <tr>
                  <td><strong>Zone</strong></td>
                  <td>{newOperator.zone}</td>
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  {(newOperator.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
                  {(newOperator.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
                  {(newOperator.status === "") && <td><Badge color={getBadge("Pending")}>Pending</Badge></td> }
                </tr>
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
    getBusAssistants: () => dispatch(getBusAssistants()),
  };
}

const mapStateToProps = state => ({
  busAssistants: state.busAssistants.busAssistants,



});

export default connect(mapStateToProps,mapDispatchToProps)(BusAssistant);
