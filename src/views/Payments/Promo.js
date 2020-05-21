import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import PromoData from "./PromoData";
import PromoHeader from "./components/PromoHeader";



function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  // const getBadge = (status) => {
  //   return status === 'Completed' ? 'success' :
  //     status === 'Refunds' ? 'secondary' :
  //       status === 'Pending' ? 'warning' :
  //         status === 'Unsuccessful' ? 'danger' :
  //           'primary'
  // };

  return (
    <tr key={user.Name.toString()}>
      <th scope="row"><Link to={userLink}>{user.Name}</Link></th>
      <td><Link to={userLink}>{user.Code}</Link></td>
      <td>{user.Percentile}</td>
      <td>{user.FlatRate}</td>
      <td>{user.UserLimit}</td>
      <td>{user.UsageLimit}</td>
      <td>{user.UserCount}</td>
      <td>{user.ExpiryDate}</td>


    </tr>
  )
}

class Promo extends Component {

  render() {

    // const userList = PaymentsData.filter((user) => user.Status === "Refunds");

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <PrimaryHeader />
              <CardHeader className="d-flex align-items-center">
                <div className="w-25">
                  Refunds
                </div>
                <PromoHeader />
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Percentile</th>
                    <th scope="col">Flat Rate</th>
                    <th scope="col">User Limit</th>
                    <th scope="col">Usage Limit</th>
                    <th scope="col">User Count</th>
                    <th scope="col"> Expiry Date</th>


                  </tr>
                  </thead>
                  <tbody>
                  {PromoData.map((user, index) =>
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

export default Promo;
