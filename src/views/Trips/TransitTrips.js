import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getTrips, searchTrip} from "../../store/actions/tripAction";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import TripDeleteBtn from "./components/TripDeleteBtn";
import TripHeader from "./components/TripHeader";
import Spinner from "../../spinner/Spinner";



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
    <tr key={user.mode.toString()}>
      <td>{user.id}</td>
      <td>{user.tripid}</td>
      <td>{user.mode}</td>
      <td>{user.name}</td>
      {/*<td>{user.phone}</td>*/}
      <td>{user.startbusstop}</td>
      <td>{user.endbusstop}</td>
      <td>{user.scheduledpickuptime}</td>
      {/*<td>{user.drivername}</td>*/}
      {/*<td>{user.driverphone}</td>*/}
      {/*<td>{user.vehicledetail}</td>*/}
      {/*<td>{user.distance}</td>*/}
      <td>{user.cost}</td>
      <td> <TripDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const TransitTrips = ({getTrips, trips, trip, isLoading,  searchTrip, error}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getTrips()
    }
  },[formData]);


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };
  const handleEvent = (event, picker) => {
    console.log(picker.startDate);
  };

  const onSearch = e => {
    e.preventDefault();
    searchTrip(formData)
  };


  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <form className="w-100 d-flex align-items-center" onSubmit={onSearch}>
                  <Input type="text"
                         placeholder="Search by Id"
                         className="w-25"
                         name="formData"
                         value={formData}
                         onChange={onChange}
                  />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>

                {/*<DateRangePicker onApply={handleEvent}>*/}
                {/*  <button className="btn btn-instagram ml-2">Filter by Date</button>*/}
                {/*</DateRangePicker>*/}
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
               Transit Trips
              </div>
              <TripHeader />
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {/*{error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}*/}
              {/*{(trips && trips.length === 0) && <div className="animated fadeIn pt-1 text-center">No Trips Available</div>}*/}
              {/*{((trips && trips.length > 0) || trip ) &&*/}
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PIN</th>
                  <th scope="col"> Full Name</th>
                  <th scope="col">Pick Up</th>
                  <th scope="col">Drop Off</th>
                  <th scope="col">Booking Date/time</th>
                  <th scope="col">Phone</th>
                  {/*<th scope="col">Scheduled Pickup Time</th>*/}
                  {/*<th scope="col">Driver Name</th>*/}
                  {/*<th scope="col">Driver Phone no</th>*/}
                  {/*<th scope="col">Vehicle Detail</th>*/}
                  {/*<th scope="col">Distance</th>*/}
                  {/*<th scope="col">Cost</th>*/}
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody style={{background: "gray", color: "white"}}>
                {trips && trips.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                {trip &&
                <UserRow user={trip}/>
                }
                </tbody>
              </Table>
              {/*}*/}
            </CardBody>
            }

          </Card>
        </Col>
      </Row>
    </div>
  )
};
function mapDispatchToProps(dispatch) {
  return {
    getTrips: () => dispatch(getTrips()),
    searchTrip: (id) => dispatch(searchTrip(id))
  };
}

const mapStateToProps = state => ({
  trips: state.trip.trips,
  trip: state.trip.trip,
  error: state.trip.error,
  isLoading: state.trip.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(TransitTrips);
