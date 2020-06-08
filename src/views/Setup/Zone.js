import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import {ZoneUser} from "../../store/actions/zoneAction";
import ZoneHeader from "./components/ZoneHeader";
import ZoneDeleteBtn from "./components/ZoneDeleteBtn";
import {getStates} from "../../store/actions/stateAction";



function UserRow(props) {
  const user = props.user;
  const state = props.state;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Successful' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Unsuccessful' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.statecode.toString()}>
      <td>{user.id}</td>
      <td>{user.zone}</td>
      {state.map((sta, index) =>{
        if(sta.xstatecode === user.statecode) {
          return  <td key={index}>{sta.xstate}</td>
        }}
      )}
      {/*<td>{user.statecode}</td>*/}
      {/*<td>{user.username}</td>*/}

      {/*<td>{user.zonecode}</td>*/}
      <td> <ZoneDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const Zones = ({ZoneUser, zones, getStates, states}) => {

  useEffect(()=>{
    ZoneUser();
    getStates()
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
                Zones
              </div>
              <ZoneHeader />
            </CardHeader>
            <CardBody>
              {!zones && loading()}
              {zones &&
              <Table responsive hover>
                <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Zone</th>
                  <th scope="col">State</th>
                  {/*<th scope="col">User Name</th>*/}

                  {/*<th scope="col">Zone Code </th>*/}
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {zones && zones.map((user, index) =>
                  <UserRow key={index} user={user} state={states}/>
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
    ZoneUser: () => dispatch(ZoneUser()),
    getStates: () => dispatch(getStates()),
  };
}

const mapStateToProps = state => ({
  zones: state.zone.zones,
  states: state.state.states,

});

export default connect(mapStateToProps,mapDispatchToProps)(Zones);
