import React, {Component, useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import * as usersData from "core-js";

import {connect} from "react-redux";
import axios from "axios"
import {getDrivers} from "../../store/actions/driverAction";


const Operator = ({getDrivers, operators, operator, isLoading,  searchOperator, error, match, drivers})=> {
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


  function setDriver() {
    if (drivers){
      drivers.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op)
        }
      })
    }
  }
  useEffect(()=>{
    getDrivers();
  },[]);

  useEffect(()=>{
    setDriver();
  },[drivers]);

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
                  <td><strong>Driver  FirstName</strong></td>
                  <td>{newOperator.firstname}</td>
                </tr>
                  <tr className="w-100">
                    <td><strong>Driver LastName</strong></td>
                    <td>{newOperator.lastname}</td>
                  </tr>
                <tr className="w-100">
                  <td><strong>Operator Phone</strong></td>
                  <td>{newOperator.phoneno}</td>
                </tr>
                <tr>
                  <td><strong>Driver Email</strong></td>
                  <td>{newOperator.email}</td>
                </tr>
                <tr>
                  <td><strong>Driver Address</strong></td>
                  <td>{newOperator.residentialaddress}</td>
                </tr>
                <tr>
                  <td><strong>App Status</strong></td>
                  {(newOperator.appstatus === "1") && <td><Badge color={getBadge("Active")}>online</Badge></td> }
                  {(newOperator.appstatus === "0") && <td><Badge color={getBadge("Inactive")}>offline</Badge></td> }
                  {(newOperator.appstatus === "") && <td><Badge color={getBadge("Refunds")}>not available</Badge></td> }
                </tr>
                <tr>
                  <td><strong>Bank Name</strong></td>
                  <td>{newOperator.bankname}</td>
                </tr>
                <tr>
                  <td><strong>Account Name</strong></td>
                  <td>{newOperator.accountname}</td>
                </tr>
                <tr>
                  <td><strong>Account Number</strong></td>
                  <td>{newOperator.accountnumber}</td>
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
  // operators: state.operator.operators,
  // operator: state.operator.operator,
  // error: state.operator.error,
  // isLoading: state.operator.isLoading,
  // states: state.state.states,


});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
