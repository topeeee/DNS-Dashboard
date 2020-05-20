import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


import usersData from '../Users/UsersData'
import {toggleDriverModalCreate} from "../../store/actions/driverAction";
import PrimaryHeader from "../components/PrimaryHeader";
import DriverDropDown from "./components/DriverDropDown";
import DriverHeader from "./components/DriverHeader";



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalCreate: () => dispatch(toggleDriverModalCreate())
  };
}

function UserRow(props) {
  const user = props.user;
  const userLink = `/driver/${user.id}`;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.EmailAddress}</td>
      <td>{user.PhoneNumber}</td>
      <td>{user.registered}</td>
      {/*<td>{user.role}</td>*/}
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
     <td><DriverDropDown /></td>
    </tr>
  )
}

class Drivers extends Component {

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
                  Drivers
                </div>
                <DriverHeader/>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">SignUp Date</th>
                    <th scope="col">status</th>
                    <th scope="col">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {usersData.map((user, index) =>
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

export default connect(null, mapDispatchToProps)(Drivers);
