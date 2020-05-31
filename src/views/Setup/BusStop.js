import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import {BusStopUser, searchBusStop} from "../../store/actions/busStopAction";
import BusStopHeader from "./components/BusStopHeader";
import BusStopDeleteBtn from "./components/BusStopDeleteBtn";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";



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

const BusStops = ({BusStopUser, busStops, isLoading,  searchBusStop}) => {
  const [formData, setFormData] = useState('');



  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
    // if(formData.length > 0) {
    //   console.log(formData)
    //   // searchBusStop(formData)
    // }

  };
  const handleEvent = (event, picker) => {
    console.log(picker.startDate);
  };
  useEffect(()=>{
    BusStopUser()
  },[]);



  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            {formData}
            <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <Input type="text"
                       placeholder="Search by Name or Id"
                       className="w-25"
                       name="formData"
                       value={formData}
                       onChange={onChange}
                />
                <button className="btn btn-success">Search</button>
                <DateRangePicker onApply={handleEvent}>
                  <button className="btn btn-instagram ml-2">Filter by Date</button>
                </DateRangePicker>
              </div>
              <div className="w-25 text-right">
                <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />
                <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />
                <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />
              </div>
            </CardHeader>
            {/*<PrimaryHeader />*/}
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
    searchBusStop: (id) => dispatch( searchBusStop(id))
  };
}

const mapStateToProps = state => ({
  busStops: state.busStop.busStops,
  isLoading: state.busStop.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(BusStops);
