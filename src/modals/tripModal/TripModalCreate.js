import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleTripModalCreate, createTrip} from "../../store/actions/tripAction";
import {BusStopUser} from "../../store/actions/busStopAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleTripModalCreate: () => dispatch(toggleTripModalCreate()),
    createTrip: (mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost) =>
      dispatch(createTrip(mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost)),
    BusStopUser: () => dispatch (BusStopUser()),

  };
}

const mapStateToProps = state => ({
  tripModalCreate: state.trip.TripModalCreate,
 busStops: state.busStop.busStops,
  isAuthenticated: state.auth.isAuthenticated

});

const TripModalCreate = (props) => {

  const {
    className,
    toggleTripModalCreate,
    tripModalCreate,
    createTrip,
    busStops,
    BusStopUser,
    isAuthenticated
  } = props;

  useEffect(()=>{
    if(isAuthenticated) {
      BusStopUser();
    }
  },[]);

  const [formData, setFormData] = useState({mode: "", tripid: "", name: "", phone: "", startbusstop: "", endbusstop: "", scheduledpickuptime: "", drivername: "", driverphone: "", vehicledetail:"", distance: "", cost: ""});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createTrip(mode, tripid, name, phone, startbusstop, endbusstop, scheduledpickuptime, drivername, driverphone, vehicledetail, distance, cost);
    setFormData({mode: "", tripid: "", name: "", phone: "", startbusstop: "", endbusstop: "", scheduledpickuptime: "", drivername: "", driverphone: "", vehicledetail:"", distance: "", cost: ""})

  };

  const toggle = () => {toggleTripModalCreate()};

  return (
    <div>
      <Modal isOpen={tripModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Trip</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Mode</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="mode"
                  value={mode}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="Zeno Bus">Zeno Bus</option>
                  <option value="Zeno Shuttle">Zeno Shuttle</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Trip Id</Label>
                <Input type="text"  name="tripid" onChange={onChange} value={tripid}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Name</Label>
                <Input type="text" name="name" onChange={onChange} value={name} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Passenger Phone Number</Label>
                <Input type="text"  name="phone" onChange={onChange} value={phone} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Start Bus Stop</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="startbusstop"
                  value={startbusstop}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Start Bus Stop</option>
                  {busStops && busStops.map((busStop, index) =>
                    <option value={busStop.busstopcode} key={index}>{busStop.busstopcode}</option>
                  )}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">End Bus Stop</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="endbusstop"
                  value={endbusstop}
                  onChange={onChange}
                  required
                >
                  <option value="">Select End Bus Stop</option>
                  {busStops && busStops.map((busStop, index) =>
                    <option value={busStop.busstopcode} key={index}>{busStop.busstopcode}</option>
                  )}
                </Input>
                {/*<Input type="text" placeholder="Route code" name="routecode" onChange={onChange}  value={routecode} />*/}
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Scheduled Pickup time</Label>
                <Input type="text" name="scheduledpickuptime" onChange={onChange} value={scheduledpickuptime} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Driver Name</Label>
                <Input type="text"  name="drivername" onChange={onChange} value={drivername} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Driver Phone Number</Label>
                <Input type="text"  name="driverphone" onChange={onChange} value={driverphone} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle Detail</Label>
                <Input type="text"  name="vehicledetail" onChange={onChange} value={vehicledetail} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Distance</Label>
                <Input type="text"  name="distance" onChange={onChange} value={distance} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Cost</Label>
                <Input type="text"  name="cost" onChange={onChange} value={cost} required/>
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

export default  connect( mapStateToProps, mapDispatchToProps)(TripModalCreate);

