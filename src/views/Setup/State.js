import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import StateHeader from "./components/StateHeader";
import {StateUser, toggleStateModalDelete} from "../../store/actions/stateAction";
import StateDeleteBtn from "./components/StateDeleteBtn";




function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  return (
    <tr key={user.countrycode.toString()}>
      <td>{user.id}</td>
      <td>{user.countrycode}</td>
      <td>{user.username}</td>
      <td>{user.xstate}</td>
      <td>{user.xstatecode}</td>
      <td> <StateDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const States = ({StateUser, states}) => {

  useEffect(()=>{
    StateUser()
  },[]);

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <PrimaryHeader />
              <CardHeader className="d-flex align-items-center">
                <div className="w-25">
                  States
                </div>
                <StateHeader />
              </CardHeader>
              <CardBody>
                {!states && loading()}
                {states &&
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Country Code</th>
                    <th scope="col">User Name</th>
                    <th scope="col">State</th>
                    <th scope="col">State Code </th>
                    <th scope="col">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {states && states.map((user, index) =>
                    <UserRow key={index} user={user}/>
                  )}
                  </tbody>
                </Table>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  };
function mapDispatchToProps(dispatch) {
  return {
    StateUser: () => dispatch(StateUser()),
  };
}

const mapStateToProps = state => ({
  states: state.state.states,

});

export default connect(mapStateToProps,mapDispatchToProps)(States);
