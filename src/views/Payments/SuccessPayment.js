import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import PrimaryHeader from "../components/PrimaryHeader";
import PaymentsData from "./PaymentsData";



function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.Name}`;

  const getBadge = (status) => {
    return status === 'Successful' ? 'success' :
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
      <td>{user.NormalAmount}</td>
      <td>{user.DiscountAmount}</td>
      {/*<td>{user.role}</td>*/}
      <td><Link to={userLink}><Badge color={getBadge(user.Status)}>{user.Status}</Badge></Link></td>

    </tr>
  )
}

class SuccessPayments extends Component {

  render() {

    const userList = PaymentsData.filter((user) => user.Status === "Successful");

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <PrimaryHeader />
              <CardHeader className="d-flex align-items-center">
                <div className="w-25">
                  Successful Payments
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Payment Reference</th>
                    <th scope="col">Normal Amount</th>
                    <th scope="col">Discount Amount</th>
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

export default SuccessPayments;
