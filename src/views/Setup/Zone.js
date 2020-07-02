import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import axios from 'axios'
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import {ZoneUser} from "../../store/actions/zoneAction";
import ZoneHeader from "./components/ZoneHeader";
import {getStates} from "../../store/actions/stateAction";
import {admin, isAdmin, OperatorName} from "../../environments/constants";
import Spinner from "../../spinner/Spinner";
import ZoneActionBtn from "./components/ZoneActionBtn";



function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.id}>
      <td>{user.zone}</td>
      <td>{user.zonecode}</td>
      <td>{user.statecode}</td>
      <td> <ZoneActionBtn id={user.id} /> </td>
    </tr>
  )
}

const Zones = ({ZoneUser, zones, getStates, states}) => {
const [operatorZone, setOperatorZone] = useState('');

  function getOperatorZone() {
   axios.get('http://165.22.116.11:7052/api/all/operatorzones/')
     .then(res=> {
       res.data.map(operatorZone => {
         if(operatorZone.operatorName === OperatorName) {
           setOperatorZone(operatorZone.zoneCode)
         }
       })
     })
  }

  useEffect(()=>{
    ZoneUser();
    getStates();
    getOperatorZone()
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
              {isAdmin === admin &&  <ZoneHeader />}
            </CardHeader>
            <CardBody>
              {!zones && <Spinner />}
              {zones &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  {/*<th scope="col">Id</th>*/}
                  <th scope="col">Zone</th>
                  <th scope="col">Zone code</th>
                  <th scope="col">State</th>
                  {/*<th scope="col">User Name</th>*/}

                  {/*<th scope="col">Zone Code </th>*/}
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {(zones && isAdmin === admin) ? zones.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((user, index) =>
                  <UserRow key={index} user={user} state={states}/>
                ): null}
                {(zones && operatorZone && isAdmin !== admin) ? zones.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.zone === operatorZone).map((user, index) =>
                  <UserRow key={index} user={user} state={states}/>
                ): null}
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
