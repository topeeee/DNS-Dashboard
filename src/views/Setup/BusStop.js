import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import {BusStopUser} from "../../store/actions/busStopAction";
import BusStopHeader from "./components/BusStopHeader";
import BusStopDeleteBtn from "./components/BusStopDeleteBtn";



function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Successful' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Unsuccessful' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.busstopcode.toString()}>
      <td>{user.id}</td>
      <td>{user.busstopcode}</td>
      <td>{user.routecode}</td>
      <td>{user.accuracy}</td>
      <td>{user.altitude}</td>
      <td>{user.altitudeaccuracy}</td>
      <td>{user.latitude}</td>
      <td>{user.longitude}</td>
      <td>{user.heading}</td>
      <td>{user.speed}</td>
      <td> <BusStopDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const BusStops = ({BusStopUser, busStops, isLoading}) => {

  useEffect(()=>{
    BusStopUser()
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
                Bus Stops
              </div>
              <BusStopHeader />
            </CardHeader>
            <CardBody>
              {isLoading && loading()}
              {(busStops && busStops.length === 0) && <div className="animated fadeIn pt-1 text-center">No Bus Stops Available</div>}
              {(busStops && busStops.length > 0) &&
              <Table responsive hover>
                <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col"> Bus Stop Code</th>
                  <th scope="col">Route Code</th>
                  <th scope="col">Accuracy</th>
                  <th scope="col">Altitude </th>
                  <th scope="col">Altitude Accuracy</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  <th scope="col">Heading	Speed</th>
                  <th scope="col">Speed</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {busStops && busStops.map((user, index) =>
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
    BusStopUser: () => dispatch(BusStopUser()),
  };
}

const mapStateToProps = state => ({
  busStops: state.busStop.busStops,
  isLoading: state.busStop.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(BusStops);
