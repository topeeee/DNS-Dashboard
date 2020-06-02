import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBookingModalCreate, createBooking} from "../../store/actions/bookingAction";
import {getTrips} from "../../store/actions/tripAction";
import {RouteUser} from "../../store/actions/routeAction";
import {BusStopUser} from "../../store/actions/busStopAction";
// import {BusStopUser} from "../../store/actions/busStopAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleBookingModalCreate: () => dispatch(toggleBookingModalCreate()),
    createBooking: (trip, amount, route, driver, beginbusstop, destinationbustop, pickedstatus, pickedtimestamp, dropstatus, droptimestamp) =>
      dispatch(createBooking(trip, amount, route, driver, beginbusstop, destinationbustop, pickedstatus, pickedtimestamp, dropstatus, droptimestamp)),
    getTrips: () => dispatch(getTrips()),
    RouteUser: () => dispatch(RouteUser()),
    BusStopUser: () => dispatch(BusStopUser()),

  };
}

const mapStateToProps = state => ({
  bookingModalCreate: state.booking.BookingModalCreate,
  trips: state.trip.trips,
  routes: state.route.routes,
  busStops: state.busStop.busStops,
  isAuthenticated: state.auth.isAuthenticated,



});

const BookingModalCreate = (props) => {

  const {
    className,
    toggleBookingModalCreate,
    bookingModalCreate,
    createBooking,
    trips,
    getTrips,
    isAuthenticated,
    routes,
    RouteUser,
    busStops,
    BusStopUser
  } = props;

useEffect(()=> {
 if(isAuthenticated) {
   getTrips();
   RouteUser();
   BusStopUser();
 }

  },[]);

  const [formData, setFormData] = useState({trip: "", amount: "", route: "", driver: "", beginbusstop: "", destinationbustop: "", pickedstatus: "", pickedtimestamp: "", dropstatus: "", droptimestamp: "" });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    trip, amount, route, driver, beginbusstop, destinationbustop, pickedstatus, pickedtimestamp, dropstatus, droptimestamp
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createBooking(trip, amount, route, driver, beginbusstop, destinationbustop, pickedstatus, pickedtimestamp, dropstatus, droptimestamp);
    setFormData({trip: "", amount:"", route: "", driver: "", beginbusstop: "", destinationbustop: "", pickedstatus: "", pickedtimestamp: "", dropstatus: "", droptimestamp: "" })

  };

  const toggle = () => {toggleBookingModalCreate()};

  return (
    <div>
      <Modal isOpen={bookingModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Booking</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              {/*<Col md="6">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">First Name</Label>*/}
              {/*  <Input*/}
              {/*    style={{cursor: 'pointer'}}*/}
              {/*    type="select"*/}
              {/*    name="first_name"*/}
              {/*    value={first_name}*/}
              {/*    onChange={onChange}*/}
              {/*    required*/}
              {/*  >*/}
              {/*    <option value="">Select Mode</option>*/}
              {/*    <option value="Zeno Bus">Zeno Bus</option>*/}
              {/*    <option value="Zeno Shuttle">Zeno Shuttle</option>*/}
              {/*    /!*{routes && routes.map((route, index) =>*!/*/}
              {/*    /!*  <option value={route.routecode} key={index}>{route.routecode}</option>*!/*/}
              {/*    /!*)}*!/*/}
              {/*  </Input>*/}
              {/*</Col>*/}

              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Trip</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="trip"
                  value={trip}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Trip</option>

                  {trips && trips.map((trip, index) =>
                    <option value={trip.tripid} key={index}>{trip.tripid}</option>
                  )}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Amount</Label>
                <Input type="text"  name="amount" onChange={onChange} value={amount}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Route</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="route"
                  value={route}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Route</option>

                  {routes && routes.map((route, index) =>
                    <option value={route.areacode} key={index}>{route.areacode}</option>
                  )}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Driver</Label>
                <Input type="text"  name="driver" onChange={onChange} value={driver} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Begin Bus Stop</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="beginbusstop"
                  value={beginbusstop}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Bus Stop</option>

                  {busStops && busStops.map((busStop, index) =>
                    <option value={busStop.busstopcode} key={index}>{busStop.busstopcode}</option>
                  )}
                </Input>
              </Col>
              {/*<Col md="6">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">Begin Bus Stop</Label>*/}
              {/*  <Input type="text" name="beginbusstop" onChange={onChange} value={beginbusstop} required />*/}
              {/*</Col>*/}
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Destination Bus Stop</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="destinationbustop"
                  value={destinationbustop}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Bus Stop</option>

                  {busStops && busStops.map((busStop, index) =>
                    <option value={busStop.busstopcode} key={index}>{busStop.busstopcode}</option>
                  )}
                </Input>
              </Col>
              {/*<Col md="6">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">destination bus Stop</Label>*/}
              {/*  <Input type="text"  name="destinationbustop" onChange={onChange} value={destinationbustop} required />*/}
              {/*</Col>*/}
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">picked status</Label>
                <Input type="text"  name="pickedstatus" onChange={onChange} value={pickedstatus} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">pickedtimestamp</Label>
                <Input type="text"  name="pickedtimestamp" onChange={onChange} value={pickedtimestamp} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">dropstatus</Label>
                <Input type="text"  name="dropstatus" onChange={onChange} value={dropstatus} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">droptimestamp</Label>
                <Input type="text"  name="droptimestamp" onChange={onChange} value={droptimestamp} required />
              </Col>
            </FormGroup>
            <div className="d-flex justify-content-md-end">
              <Button color="primary" type="submit" className="mr-1" >Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(BookingModalCreate);

