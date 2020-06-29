import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusStopModalUpdate, updateBusStop} from "../../store/actions/busStopAction";
import {RouteUser} from "../../store/actions/routeAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleBusStopModalUpdate: () => dispatch(toggleBusStopModalUpdate()),
    updateBusStop: (id,busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude) =>
      dispatch(updateBusStop(id,busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude)),
    RouteUser: () => dispatch(RouteUser()),
  };
}

const mapStateToProps = state => ({
  BusStopModalUpdate: state.busStop.BusStopModalUpdate,
  id: state.busStop.updateId,
  routes: state.route.routes,
  isAuthenticated: state.auth.isAuthenticated,
  busStops: state.busStop.busStops,

});

const BusStopModalUpdate = (props)=> {
  const {
    className,
    toggleBusStopModalUpdate,
    BusStopModalUpdate,
    id,
    updateBusStop,
    routes,
    RouteUser,
    isAuthenticated,
    busStops
  } = props;

  const [formData, setFormData] = useState({busstopcode: '',busstop: '',routecode: '', heading: '', speed: '', accuracy: '', altitudeaccuracy: '', altitude: '', longitude: '', latitude: ''});
const [newBusStop, setNewBusStop] = useState([]);
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const {
    busstopcode,
    busstop,
    routecode,
    heading,
    speed,
    accuracy,
    altitudeaccuracy,
    altitude,
    longitude,
    latitude
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateBusStop(id, busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude);
    setFormData({busstopcode: '',busstop: '',routecode: '', heading: '', speed: '', accuracy: '', altitudeaccuracy: '', altitude: '', longitude: '', latitude: ''})

  };

  function getBusStop(id) {
    newBusStop.map(busStop => {
      if(busStop.id === id) {
        setFormData({
          busstopcode: busStop.busstopcode,
          busstop: busStop.busstop,
          routecode: busStop.routecode,
          heading: busStop.direction,
          speed: busStop.space,
          accuracy: busStop.accuracy,
          altitudeaccuracy: busStop.altitudeaccuracy,
          altitude: busStop.altitude,
          longitude: busStop.longitude,
          latitude: busStop.latitude})
      }
    })


  }


  useEffect(()=> {
    if(busStops) {
      setNewBusStop(busStops)
    }
  },[busStops]);

  useEffect(()=> {
    if(id) {
      getBusStop(id)
    }
  },[id]);

  useEffect(()=>{
    if(isAuthenticated) {
      RouteUser();
    }
  },[]);

  const toggle = () => {toggleBusStopModalUpdate()};



  return (
    <div>
      <Modal isOpen={BusStopModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Bus Stop</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Bus Stop Code</Label>
                <Input type="text"  name="busstopcode" onChange={onChange} value={busstopcode}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Bus Stop</Label>
                <Input type="text"  name="busstop" onChange={onChange} value={busstop} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Route</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="routecode"
                  value={routecode}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Route</option>
                  {routes && routes.map((route, index) =>
                    <option value={route.route} key={index}>{route.route}</option>
                  )}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Direction</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="heading"
                  value={heading}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Direction</option>
                  <option value="North">North</option>
                  <option value="South">South</option>
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Longitude</Label>
                <Input type="text"  name="longitude" onChange={onChange} value={longitude} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Latitude</Label>
                <Input type="text"  name="latitude" onChange={onChange} value={latitude} required/>
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

export default  connect( mapStateToProps, mapDispatchToProps)(BusStopModalUpdate);

