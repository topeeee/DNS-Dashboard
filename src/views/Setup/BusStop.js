import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {BusStopUser, searchBusStop} from "../../store/actions/busStopAction";
import BusStopHeader from "./components/BusStopHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import {RouteUser} from "../../store/actions/routeAction";
import Spinner from "../../spinner/Spinner";
import BusStopActionBtn from "./components/BusStopActionBtn";
import {isAdmin, isLamata, isOperator, OperatorName} from "../../environments/constants";
import {getAreas} from "../../store/actions/areaAction";
import api from "../../environments/environment";
import  { encrypt , decrypt } from 'react-crypt-gsm';



function UserRow(props) {
  const user = props.user;


  return (
    <tr key={user.id}>
      <td>{user.station}</td>
      <td>{user.routecode}</td>
      <td>{user.latitude}</td>
      <td>{user.longitude}</td>
      <td>{user.direction}</td>
      {isAdmin ?  <td> <BusStopActionBtn id={user.id} /> </td>: null}
    </tr>
  )
}

const BusStops = ({BusStopUser, busStops, isLoading,RouteUser, routes, areas, getAreas}) => {
  const [formData, setFormData] = useState('');
  const [operatorZone, setOperatorZone] = useState('');
  const [area, setArea] = useState('');
  const [route, setRoute] = useState('');



  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };

 async function getOperatorZone() {
   try {
    const res = await  axios.get(`${api.operatorZone}/api/all/operatorzones/`);
     res.data.map(operatorZone => {
          if(operatorZone.operatorName === OperatorName) {
            setOperatorZone(operatorZone.zoneCode)
          }
        })
   }catch (e) {
   }
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

  useEffect(()=> {
    if(area && routes) {
      routes.map(route=> {
        if(route.areacode === area) {
          setRoute(route.route)
        }
      })
    }
  },[area, route]);

  useEffect(()=>{
    BusStopUser();
    RouteUser();
    getAreas();
    getOperatorZone();
  },[]);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            {formData}
            <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <Input type="text"
                       // placeholder="Search by Name or Id"
                       className="w-25"
                       name="formData"
                       value={formData}
                       onChange={onChange}
                />
                <button className="btn btn-success">Search</button>
              </div>
              <div className="w-25 text-right">
                <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />
                <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />
                <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />
              </div>
            </CardHeader>
            <CardHeader className="d-flex align-items-center">
              <div className="w-25">
                Bus Stops
              </div>
              {isAdmin && <BusStopHeader />}
            </CardHeader>
            <CardBody>
              {isLoading && <Spinner />}
              {(busStops && busStops.length === 0) && <div className="animated fadeIn pt-1 text-center">No Bus Stops Available</div>}
              {(busStops && busStops.length > 0 && !isLoading) &&
              <Table responsive hover>
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  {/*<th scope="col">Id</th>*/}
                  <th scope="col"> Bus Stop</th>
                  {/*<th scope="col"> Bus Stop Code</th>*/}
                  <th scope="col">Route</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  <th scope="col">Direction</th>
                  {isAdmin ? <th scope="col">Action</th>: null}
                </tr>
                </thead>
                <tbody>
                {(busStops && (isAdmin || isLamata)) ? busStops.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter(user => user.service === 'First mile - Last mile').map((user, index) =>
                  <UserRow key={index} user={user} route={routes}/>
                ): null}
                {(busStops && route && isOperator) ? busStops.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.routecode === route).map((user, index) =>
                  <UserRow key={index} user={user} route={routes}/>
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
    BusStopUser: () => dispatch(BusStopUser()),
    searchBusStop: (id) => dispatch( searchBusStop(id)),
    RouteUser: () => dispatch(RouteUser()),
    getAreas: () => dispatch(getAreas()),
  };
}

const mapStateToProps = state => ({
  busStops: state.busStop.busStops,
  isLoading: state.busStop.isLoading,
  routes: state.route.routes,
  areas: state.area.areas,

});

export default connect(mapStateToProps,mapDispatchToProps)(BusStops);
