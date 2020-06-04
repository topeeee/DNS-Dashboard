import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverLoggingModalCreate, createDriverLogging} from "../../store/actions/driverLoggingAction";
import {BusStopUser} from "../../store/actions/busStopAction";




function mapDispatchToProps(dispatch) {
  return {
    toggleDriverLoggingModalCreate: () => dispatch(toggleDriverLoggingModalCreate()),
    createDriverLogging: (longtitude, latitude, direction, rider_username, currentbusstop) =>
      dispatch( createDriverLogging(longtitude, latitude, direction, rider_username, currentbusstop)),
    BusStopUser: () => dispatch(BusStopUser()),

  };
}

const mapStateToProps = state => ({
  driverLoggingModalCreate: state.driverLogging.DriverLoggingModalCreate,
  busStops: state.busStop.busStops,
  isAuthenticated: state.auth.isAuthenticated,




});

const DriverLoggingModalCreate = (props) => {

  const {
    className,
    toggleDriverLoggingModalCreate,
    driverLoggingModalCreate,
    createDriverLogging,
    busStops,
    isAuthenticated,
    BusStopUser
  } = props;


useEffect(()=> {
  if(isAuthenticated){
    BusStopUser()
  }
}, []);


  const [formData, setFormData] = useState({longtitude: "", latitude: "", direction: "", rider_username: "", currentbusstop: ""});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {longtitude, latitude, direction, rider_username, currentbusstop} = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createDriverLogging(longtitude, latitude, direction, rider_username, currentbusstop);
    setFormData({longtitude: "", latitude: "", direction: "", rider_username: "", currentbusstop: ""})

  };

  const toggle = () => {toggleDriverLoggingModalCreate()};

  return (
    <div>
      <Modal isOpen={driverLoggingModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Driver Logging</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Longtitude</Label>
                <Input type="text"  name="longtitude" onChange={onChange} value={longtitude} required/>
                <Label for="name" className="font-weight-bold mb-0 text-info">Latitude</Label>
                <Input type="text"  name="latitude" onChange={onChange} value={latitude} required />
              <Label for="name" className="font-weight-bold mb-0 text-info">Direction</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="direction"
                value={direction}
                onChange={onChange}
                required
              >
                <option value="">Select Direction</option>
                <option value="North Bound">North Bound</option>
                <option value="South Bound">South Bound</option>

              </Input>
              <Label for="name" className="font-weight-bold mb-0 text-info">Rider Username</Label>
              <Input type="text"  name="rider_username" onChange={onChange} value={rider_username} required />
                <Label for="name" className="font-weight-bold mb-0 text-info">Current Bus Stop</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="currentbusstop"
                  value={currentbusstop}
                  onChange={onChange}
                  required
                >
                  <option value="">Select State</option>
                  {busStops && busStops.map((busStop, index) =>
                    <option value={busStop.busstopcode} key={index}>{busStop.busstopcode}</option>
                  )}
                </Input>
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

export default  connect( mapStateToProps, mapDispatchToProps)(DriverLoggingModalCreate);

