import React, {Component, useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import * as usersData from "core-js";

import {connect} from "react-redux";
import axios from "axios"
import {getDrivers} from "../../store/actions/driverAction";
import {getUsers} from "../../store/actions/userAction";


const Operator = ({getUsers,match, users})=> {

  const [newUser, setNewUser] = useState({});
  const [newDate, setNewDate] = useState('');



  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Inactive' ? 'danger' :
            'primary'
  };


  function setUser() {
    if (users){
      users.map(user=> {
        if(user.id == match.params.id){
          setNewUser(user)
        }
      })
    }
  }
  useEffect(()=>{
    getUsers();
  },[]);

  useEffect(()=>{
    setUser();
  },[users]);

useEffect(()=> {
  if(newUser.timestamp){
    setNewDate(new Date(newUser.timestamp).toLocaleString())
  }
},[newUser]);
  return (
    <div className="animated fadeIn">
      <Row className="d-flex align-items-center justify-content-center">
        <Col lg={6}>
          <Card>
            <CardHeader className="bg-dark">
              <strong className="text-info"><i className="icon-info pr-1"></i>User id: {match.params.id}</strong>
            </CardHeader>
            <CardBody >
              <Table>
                {newUser &&
                <tbody>
                <tr>
                  <td><strong>FirstName</strong></td>
                  <td>{newUser.firstName}</td>
                </tr>
                <tr>
                  <td><strong>Last Name</strong></td>
                  <td>{newUser.lastName}</td>
                </tr>
                <tr>
                  <td><strong>Date Of Birth</strong></td>
                  <td>{newUser.dateOfBirth}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>{newUser.email}</td>
                </tr>
                <tr>
                  <td><strong>Phone Number</strong></td>
                  <td>{newUser.phoneNumber}</td>
                </tr>
                <tr>
                  <td><strong>Pin</strong></td>
                  <td>{newUser.pin}</td>
                </tr>
                <tr>
                  <td><strong>Home Location</strong></td>
                  <td>{newUser.homeLocation}</td>
                </tr>
                <tr>
                  <td><strong>Home Pickup Time</strong></td>
                  <td>{newUser.homePickupTime}</td>
                </tr>
                <tr>
                  <td><strong>Work Location</strong></td>
                  <td>{newUser.workLocation}</td>
                </tr>
                <tr>
                  <td><strong>Work PickupTime</strong></td>
                  <td>{newUser.workPickupTime}</td>
                </tr>
                <tr>
                  <td><strong>Payment Method</strong></td>
                  <td>{newUser.paymentMethod}</td>
                </tr>
                <tr>
                  <td><strong>Signup Date</strong></td>
                  {newDate ?( <td>{newDate}</td>): null}
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  {(newUser.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
                  {(newUser.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
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
    getUsers: () => dispatch(getUsers()),
  };
}

const mapStateToProps = state => ({
  users: state.user.users,
});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
