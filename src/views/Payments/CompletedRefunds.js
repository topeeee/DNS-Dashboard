import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import PrimaryHeader from "../components/PrimaryHeader";

import Refundsdata from "./RefundsData";
import RefundsHeader from "./components/RefundsHeader";



function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Completed' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Unsuccessful' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.Name.toString()}>
      <th scope="row"><Link to={userLink}>{user.Name}</Link></th>
      <td><Link to={userLink}>{user.Email}</Link></td>
      <td>{user.Phone}</td>
      <td>{user.PaymentReference}</td>
      <td>{user.RefundAmount}</td>
      <td>{user.PaymentMethod}</td>
      {/*<td>{user.role}</td>*/}
      <td><Link to={userLink}><Badge color={getBadge(user.Status)}>{user.Status}</Badge></Link></td>

    </tr>
  )
}

class CompletedRefunds extends Component {

  render() {

    const userList = Refundsdata.filter((user) => user.Status === "Completed");

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <PrimaryHeader />
              <CardHeader className="d-flex align-items-center">
                <div className="w-25">
                  Completed Refunds
                </div>
                <RefundsHeader />
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Payment Reference</th>
                    <th scope="col">Amount to be refund</th>
                    <th scope="col">Payment method</th>
                    <th scope="col">Status</th>

                  </tr>
                  </thead>
                  <tbody>
                  {userList.map((user, index) =>
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

export default CompletedRefunds;
