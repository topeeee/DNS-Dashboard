import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import TripData from "./TripsData";
import PrimaryHeader from "../components/PrimaryHeader";




function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Completed' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Waiting' ? 'warning' :
          status === 'Cancelled' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.TripID.toString()}>
      <th scope="row"><Link to={userLink}>{user.Mode}</Link></th>
      <td><Link to={userLink}>{user.TripID}</Link></td>
      <td>{user.Name}</td>
      <td>{user.Phone}</td>
      <td>{user.PickUpLocation}</td>
      <td>{user.DropLocation}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.Status)}>{user.Status}</Badge></Link></td>

    </tr>
  )
}

class WaitingTrips extends Component {

  render() {

    const userList = TripData.filter((user) => user.Status === "Waiting");

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <PrimaryHeader />
              <CardHeader className="d-flex align-items-center">
                <div className="w-25">
                  Trips
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">Mode</th>
                    <th scope="col">Trip Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">PickUp Location</th>
                    <th scope="col">Drop Location</th>
                    <th scope="col">Status</th>

                  </tr>
                  </thead>
                  <tbody>
                  { userList.map((user, index) =>
                    <UserRow key={index} user={user}/>
                  )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default WaitingTrips;
