import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import PrimaryHeader from "../components/PrimaryHeader";
import RatiingsData from "./RatingsData";


function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.UserName}`;

  // const getBadge = (status) => {
  //   return status === 'Successful' ? 'success' :
  //     status === 'Refunds' ? 'secondary' :
  //       status === 'Pending' ? 'warning' :
  //         status === 'Unsuccessful' ? 'danger' :
  //           'primary'
  // };

  return (
    <tr key={user.UserName.toString()}>
      <th scope="row"><Link to={userLink}>{user.UserName}</Link></th>
      <td>{user.UserPhone}</td>
      <td>{user.UserComment}</td>
      <td>{user.UserRating}</td>
      <td>{user.Date}</td>
    </tr>
  )
}

class DriverRatings extends Component {

  render() {

    // const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <PrimaryHeader />
              <CardHeader className="d-flex align-items-center">
                <div className="w-25">
                 Driver Ratings
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col"> User Phone</th>
                    <th scope="col"> User Comment</th>
                    <th scope="col">User Rating</th>
                    <th scope="col">Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  {RatiingsData.map((user, index) =>
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

export default DriverRatings;
