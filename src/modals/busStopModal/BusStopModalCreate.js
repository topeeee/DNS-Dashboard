import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusStopModalCreate, createBusStop} from "../../store/actions/busStopAction";
import {RouteUser} from "../../store/actions/routeAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleBusStopModalCreate: () => dispatch(toggleBusStopModalCreate()),
    createBusStop: (busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude) =>
      dispatch(createBusStop(busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude)),
    RouteUser: () => dispatch(RouteUser()),

  };
}

const mapStateToProps = state => ({
  busStopModalCreate: state.busStop.BusStopModalCreate,
 routes: state.route.routes,
  isAuthenticated: state.auth.isAuthenticated

});

const BusStopModalCreate = (props) => {
  // useEffect(()=>{
  //   console.log(busStopModalCreate)
  // });
  const {
    className,
    toggleBusStopModalCreate,
    busStopModalCreate,
    createBusStop,
    routes,
    RouteUser,
    isAuthenticated
  } = props;

  useEffect(()=>{
    if(isAuthenticated) {
      RouteUser();
    }
  },[]);

  const [formData, setFormData] = useState({busstopcode: '',busstop: '',routecode: '', heading: '', speed: '', accuracy: '', altitudeaccuracy: '', altitude: '', longitude: '', latitude: ''});

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
    createBusStop(busstopcode,busstop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude);
    setFormData({busstopcode: '',busstop: '',routecode: '', heading: '', speed: '', accuracy: '', altitudeaccuracy: '', altitude: '', longitude: '', latitude: ''})

  };

  const toggle = () => {toggleBusStopModalCreate()};

  return (
    <div>
      <Modal isOpen={busStopModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Bus Stop</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Bus Stop Code</Label>
                <Input type="text" placeholder="Bus Stop Code" name="busstopcode" onChange={onChange} value={busstopcode}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Bus Stop</Label>
                <Input type="text" placeholder="Bus Stop" name="busstop" onChange={onChange} value={busstop}required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Route Code</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="routecode"
                  value={routecode}
                  onChange={onChange}
                  required
                >
                  <option value="">Select state code</option>
                  {routes && routes.map((route, index) =>
                    <option value={route.routecode} key={index}>{route.routecode}</option>
                  )}
                </Input>
                {/*<Input type="text" placeholder="Route code" name="routecode" onChange={onChange}  value={routecode} />*/}
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Heading</Label>
                <Input type="text" placeholder="Heading" name="heading" onChange={onChange} value={heading} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Speed</Label>
                <Input type="text" placeholder="Speeding" name="speed" onChange={onChange} value={speed} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Accuracy</Label>
                <Input type="text" placeholder="Accuracy" name="accuracy" onChange={onChange} value={accuracy} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Altitude Accuracy</Label>
                <Input type="text" placeholder="Altitude Accuracy" name="altitudeaccuracy" onChange={onChange} value={altitudeaccuracy} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Altitude</Label>
                <Input type="text" placeholder="Altitude" name="altitude" onChange={onChange} value={altitude} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Longitude</Label>
                <Input type="text" placeholder="Longitude" name="longitude" onChange={onChange} value={longitude} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Latitude</Label>
                <Input type="text" placeholder="Latitude" name="latitude" onChange={onChange} value={latitude} required/>
              </Col>
            </FormGroup>
            {/*<FormGroup>*/}
            {/*  <Label for="name" className="font-weight-bold mb-0 ">Zone Code</Label>*/}
            {/*  <Input*/}
            {/*    type="text"*/}
            {/*    name="zoneCode"*/}
            {/*    placeholder="Zone Code"*/}
            {/*    // value={zoneCode}*/}
            {/*    onChange={onChange}*/}
            {/*    required*/}
            {/*  />*/}
            {/*  <Label for="state" className="font-weight-bold mb-0 mt-1">Zone</Label>*/}
            {/*  <Input*/}
            {/*    type="text"*/}
            {/*    name="zone"*/}
            {/*    placeholder="Zone"*/}
            {/*    // value={zone}*/}
            {/*    onChange={onChange}*/}
            {/*    required*/}
            {/*  />*/}
            {/*  <Label for="country" className="font-weight-bold mb-0 mt-1">State Code</Label>*/}
            {/*  <Input*/}
            {/*    style={{cursor: 'pointer'}}*/}
            {/*    type="select"*/}
            {/*    name="stateCode"*/}
            {/*    // value={stateCode}*/}
            {/*    onChange={onChange}*/}
            {/*    required*/}
            {/*  >*/}
            {/*    <option>Select state code</option>*/}
            {/*    {routes && routes.map((route, index) =>*/}
            {/*      <option value={route.routecode} key={index}>{route.routecode}</option>*/}
            {/*    )}*/}
            {/*  </Input>*/}
            {/*</FormGroup>*/}
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

export default  connect( mapStateToProps, mapDispatchToProps)(BusStopModalCreate);

