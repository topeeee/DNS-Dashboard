import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getTrips, searchTrip} from "../../store/actions/tripAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import TripActionBtn from "./components/TripActionBtn";
import {getUsers} from "../../store/actions/userAction";



function UserRow(props) {
  const user = props.user;
  const newUser = props.newUser;


  const getBadge = (status) => {
    return status === 'Successful' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Unsuccessful' ? 'danger' :
            'primary'
  };


  return (
    // "id": 42,
    // "username": "bruce",
    // "passengerPin": "34",
    // "mode": "shuttle",
    // "pickUp": "bustop1",
    // "dropOff": "bustop2",
    // "cost": "466",
    // "route": "route1",
    // "distance": "500",
    // "driverPin": "driver2",
    // "pickStatus": "no",
    // "pickedTimestamp": "4567",
    // "dropStatus": "0",
    // "schedulePickTime": "456",
    // "scheduleDropTime": "4567",
    // "dropTimestamp": null,
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.passengerPin}</td>
      {newUser && newUser.map((newuser, index) =>{
        if(newuser.pin === user.passengerPin){
          return  <td key={index}>{newuser.firstName} {newuser.lastName}</td>
        }
      })}
      <td>{user.pickUp}</td>
      <td>{user.dropOff}</td>
      <td>{new Date(user.bookingTimestamp).toLocaleString()}</td>
      {newUser && newUser.map((newuser, index) =>{
        if(newuser.pin === user.passengerPin){
          return  <td key={index}>{newuser.phoneNumber}</td>
        }
      })}
      <td>Not available</td>
      <td> <TripActionBtn id={user.id} /> </td>
    </tr>
  )
}

const Trips = ({getTrips, trips, trip, isLoading,  searchTrip, error, users, getUsers}) => {
  const [formData, setFormData] = useState('');
  const [newUser, setNewUser] = useState([]);

useEffect(()=>{
  if(formData === ''){
    getTrips()
  }
},[formData]);


useEffect(()=> {
  getUsers();
},[]);

useEffect(()=> {
  if(users){}
  setNewUser(users)

},[users]);


const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
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
                Trips
              </div>
              {/*<TripHeader />*/}
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {(trips && trips.length === 0) && <div className="animated fadeIn pt-1 text-center">No Trips Available</div>}
              {((trips && trips.length > 0) || trip ) &&
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
                  <th scope="col">Status</th>
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
                  <UserRow key={index} user={user} newUser={newUser}/>
                )}
                {trip &&
                <UserRow user={trip}/>
                }
                </tbody>
              </Table>
              }
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
    searchTrip: (id) => dispatch(searchTrip(id)),
    getUsers: () => dispatch(getUsers()),
  };
}

const mapStateToProps = state => ({
  trips: state.trip.trips,
  trip: state.trip.trip,
  error: state.trip.error,
  isLoading: state.trip.isLoading,
  users: state.user.users,

});

export default connect(mapStateToProps,mapDispatchToProps)(Trips);
