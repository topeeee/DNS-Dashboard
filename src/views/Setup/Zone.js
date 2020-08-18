import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import axios from 'axios'
import { Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import {ZoneUser} from "../../store/actions/zoneAction";
import ZoneHeader from "./components/ZoneHeader";
import {getStates} from "../../store/actions/stateAction";
import {isAdmin, isLamata, isOperator, OperatorName} from "../../environments/constants";
import Spinner from "../../spinner/Spinner";
import ZoneActionBtn from "./components/ZoneActionBtn";
import api from "../../environments/environment";



function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.id}>
      <td>{user.zone}</td>
      <td>{user.zonecode}</td>
      <td>{user.statecode}</td>
      {isAdmin?  <td> <ZoneActionBtn id={user.id} /> </td>:null}
    </tr>
  )
}

const Zones = ({ZoneUser, zones, getStates, states, isLoading}) => {
const [operatorZone, setOperatorZone] = useState('');

 async function getOperatorZone() {
   try {
     const res = await axios.get(`${api.operatorZone}/api/all/operatorzones/`);
         res.data.map(operatorZone => {
           if(operatorZone.operatorName === OperatorName) {
             setOperatorZone(operatorZone.zoneCode)
           }
         })
   }catch (e) {

   }
  }

  useEffect(()=>{
    ZoneUser();
    getStates();
    getOperatorZone()
  },[]);

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
              {isAdmin &&  <ZoneHeader />}
            </CardHeader>
            <CardBody>
              {isLoading && <Spinner />}
              {(zones && !isLoading) &&
              <Table responsive hover>
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  <th scope="col">Zone</th>
                  <th scope="col">Zone code</th>
                  <th scope="col">State</th>
                  {isAdmin? <th scope="col">Action</th>: null}
                </tr>
                </thead>
                <tbody>
                {(zones && (isAdmin || isLamata)) ? zones.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((user, index) =>
                  <UserRow key={index} user={user} state={states}/>
                ): null}
                {(zones && operatorZone && isOperator) ? zones.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.zone === operatorZone).map((user, index) =>
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
  isLoading: state.zone.isLoading,
  states: state.state.states,

});

export default connect(mapStateToProps,mapDispatchToProps)(Zones);
