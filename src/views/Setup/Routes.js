import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import {RouteUser} from "../../store/actions/routeAction";
import RouteHeader from "./components/RouteHeader";
import {getAreas} from "../../store/actions/areaAction";
import Spinner from "../../spinner/Spinner";
import axios from "axios";
import {isAdmin, isOperator, OperatorName} from "../../environments/constants";
import RouteActionBtn from "./components/RouteActionBtn";



function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.id}>
      {/*<td>{user.id}</td>*/}
      <td>{user.route}</td>
      <td>{user.routecode}</td>
      <td>{user.areacode}</td>
      <td> <RouteActionBtn id={user.id} /> </td>
    </tr>
  )
}

const Routes = ({RouteUser, routes, isLoading, areas, getAreas}) => {
  const [operatorZone, setOperatorZone] = useState('');
  const [area, setArea] = useState('');

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

  useEffect(()=> {
    if(areas && operatorZone) {
      areas.map(area=> {
        if(area.zonecode === operatorZone) {
          setArea(area.xarea)
        }
      })
    }
  },[areas, operatorZone]);

  useEffect(()=>{
    RouteUser();
    getAreas();
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
                Routes
              </div>
              <RouteHeader />
            </CardHeader>
            <CardBody>
              {isLoading && <Spinner />}
              {(routes && routes.length === 0 && !isLoading) && <div className="animated fadeIn pt-1 text-center">No Routes Available</div>}
              {(routes && routes.length > 0 && !isLoading) &&
              <Table responsive hover>
                <thead  className="bg-dark">
                <tr>
                  <th scope="col">Route</th>
                  <th scope="col">Route code</th>
                  <th scope="col">Area</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {(routes && isAdmin) ? routes.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((user, index) =>
                  <UserRow key={index} user={user}/>
                ): null}
                {(routes && area && isOperator) ? routes.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.areacode === area).map((user, index) =>
                  <UserRow key={index} user={user}/>
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
    RouteUser: () => dispatch(RouteUser()),
    getAreas: () => dispatch(getAreas()),
  };
}

const mapStateToProps = state => ({
  routes: state.route.routes,
  isLoading: state.route.isLoading,
  areas: state.area.areas,

});

export default connect(mapStateToProps,mapDispatchToProps)(Routes);
