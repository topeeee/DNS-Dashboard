import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Input } from 'reactstrap';
import usersData from './UsersData'
import Dropdowns from "../Base/Dropdowns";
import {toggleUserModalCreate} from "../../store/actions/userAction";
import PrimaryHeader from "../components/PrimaryHeader";
import SecondaryHeader from "../components/SecondaryHeader";



function mapDispatchToProps(dispatch) {
  return {
    toggleUserModalCreate: () => dispatch(toggleUserModalCreate())
  };
}


function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.EmailAddress}</td>
      <td>{user.PhoneNumber}</td>
      <td>{user.registered}</td>
      {/*<td>{user.role}</td>*/}
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
      <td> <Dropdowns id={user.id} /> </td>
    </tr>
  )
}

const Users = (props)=> {

  // const userList = usersData.filter((user) => user.id < 10)

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <PrimaryHeader />
            <CardHeader className="d-flex align-items-center">
              <div className="w-25">
                Users
              </div>
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

};

export default connect(null, mapDispatchToProps)(Users);
