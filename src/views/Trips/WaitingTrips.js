import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getTrips, searchTrip} from "../../store/actions/tripAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import TripActionBtn from "./components/TripActionBtn";
import {getUsers} from "../../store/actions/userAction";
import {isLamata} from "../../environments/constants";



function UserRow(props) {
  const user = props.user;
  const newUser = props.newUser;


  const getBadge = (status) => {
    return status === 'Completed' ? 'success' :
      status === 'Transit' ? 'warning' :
        status === 'Waiting' ? 'primary' :
          status === 'Unsuccessful' ? 'danger' :
            'primary'
  };


  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.passengerPin}</td>
      {/*{newUser && newUser.map((newuser, index) =>{*/}
      {/*  if(newuser.pin === user.passengerPin){*/}
      {/*    return  <td key={index}>{newuser.firstName} {newuser.lastName}</td>*/}
      {/*  }*/}

      {/*})}*/}
      {user.pickUp ? <td>{user.pickUp}</td>: <td>Not Available</td>}
      {user.dropOff ? <td>{user.dropOff}</td>: <td>Not Available</td>}
      {/*<td>{user.dropOff}</td>*/}
      <td>{new Date(user.bookingTimestamp).toLocaleString()}</td>
      {/*{newUser && newUser.map((newuser, index) =>{*/}
      {/*  if(newuser.pin === user.passengerPin){*/}
      {/*    return  <td key={index}>{newuser.phoneNumber}</td>*/}
      {/*  }*/}
      {/*})}*/}
      {(user.pickStatus === "1" && user.dropStatus === "0") && <td><Badge color={getBadge("Transit")}>Transit</Badge></td> }
      {/*<td>Not available</td>*/}
      {(user.pickStatus === "1" && user.dropStatus === "1") && <td><Badge color={getBadge("Completed")}>Completed</Badge></td> }
      {(user.pickStatus === "0" && user.dropStatus === "0") && <td><Badge color={getBadge("Waiting")}>Waiting</Badge></td> }
      <td> <TripActionBtn id={user.id} /> </td>
    </tr>
  )
}

const WaitingTrips = ({getTrips, trips, trip, isLoading,  searchTrip, error, users, getUsers}) => {
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
    if(users){
      setNewUser(users)
    }


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
                         // placeholder="Search by Id"
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
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PIN</th>
                  {/*<th scope="col"> Full Name</th>*/}
                  <th scope="col">Pick Up</th>
                  <th scope="col">Drop Off</th>
                  <th scope="col">Booking Date/time</th>
                  {/*<th scope="col">Phone</th>*/}
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {trips && trips.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.pickStatus === "0" && user.dropStatus === "0").map((user, index) =>
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

export default connect(mapStateToProps,mapDispatchToProps)(WaitingTrips);
