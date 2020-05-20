import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import usersData from '../Users/UsersData'
import PrimaryHeader from "../components/PrimaryHeader";
import BusAssistantHeader from "./components/BusAssistantHeader";
import BusAssistantDropDown from "./components/BusAssistantDropDown";

function UserRow(props) {
  const user = props.user;
  const userLink = `/busassisstant/${user.id}`;
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
      <td>{user.lastName}</td>
      <td>{user.PhoneNumber}</td>
      <td>{user.registered}</td>
      {/*<td>{user.role}</td>*/}
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
      <td> <BusAssistantDropDown /> </td>
    </tr>
  )
}

class  ActiveBusAssistants extends Component {

  render() {

    const userList = usersData.filter((user) => user.status === "Active");

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <PrimaryHeader />
              <CardHeader className="d-flex align-items-center">
                <div className="w-25">
                  Active Bus Assistants
                </div>
                < BusAssistantHeader/>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Register Date</th>
                    <th scope="col">status</th>
                    <th scope="col">Actions</th>
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

export default ActiveBusAssistants;
