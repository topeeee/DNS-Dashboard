import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import BookingDeleteBtn from "./components/BookingDeleteBtn";
import BookingHeader from "./components/BookingHeader";
import {getBookings, searchBooking} from "../../store/actions/bookingAction";




function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Suspended' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.trip}</td>
      <td>{user.route}</td>
      {/*<td>{user.driver}</td>*/}
      <td>{user.beginbusstop}</td>
      <td>{user.destinationbustop}</td>
      <td>{user.pickedstatus}</td>
      <td>{user.pickedtimestamp}</td>
      <td>{user.dropstatus}</td>
      <td>{user.droptimestamp}</td>
      {/*<td>{user.distance}</td>*/}
      {/*<td><Badge color={getBadge(user.status)}>{user.status}</Badge></td>*/}
      <td> <BookingDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const Bookings = ({getBookings, bookings, booking, isLoading,  searchBooking, error}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getBookings()
    }
  },[formData]);


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchBooking(formData)
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
            <CardHeader className="d-flex align-items-center">
              <div className="w-25">
                Bookings
              </div>
              <BookingHeader />
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {/*{isLoading && loading()}*/}
              {(bookings && bookings.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Bookings Available</div>}
              {((bookings && bookings.length > 0) || booking) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Trip Id</th>
                  <th scope="col">Route</th>
                  <th scope="col">Begin Bus stop</th>
                  {/*<th scope="col">End</th>*/}
                  {/*<th scope="col">Passenger Phone N</th>*/}
                  <th scope="col">Destination</th>
                  <th scope="col">Pick Status</th>
                  <th scope="col">Pick Time</th>
                  <th scope="col">Drop status</th>
                  <th scope="col">Drop Time</th>
                  {/*<th scope="col">Vehicle Detail</th>*/}
                  {/*<th scope="col">Distance</th>*/}
                  {/*<th scope="col">Cost</th>*/}
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody style={{background: "gray", color: "white"}}>
                {bookings && bookings.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                {booking &&
                <UserRow user={booking}/>
                }
                </tbody>
              </Table>}
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
    getBookings: () => dispatch(getBookings()),
    searchBooking: (id) => dispatch(searchBooking(id))
  };
}

const mapStateToProps = state => ({
  bookings: state.booking.bookings,
  booking: state.booking.booking,
  error: state.booking.error,
  isLoading: state.booking.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(Bookings);
