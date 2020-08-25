import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {getService} from "../../store/actions/serviceAction";
import {
  toggleFerryStopModalUpdate, updateFerryStop
} from "../../store/actions/ferryStopAction";





function mapDispatchToProps(dispatch) {
  return {
    toggleFerryStopModalUpdate: () => dispatch(toggleFerryStopModalUpdate()),
    updateFerryStop: (id,ferrystopcode, ferrystop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service) =>
      dispatch(updateFerryStop(id,ferrystopcode, ferrystop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service)),
    getService: () => dispatch(getService()),
  };
}

const mapStateToProps = state => ({
  ferryStopModalUpdate: state.ferryStop.FerryStopModalUpdate,
  isAuthenticated: state.auth.isAuthenticated,
  services: state.service.services,
  ferryStops: state.ferryStop.ferryStops,
  id: state.ferryStop.updateId

});

const FerryStopModalUpdate = (props) => {

  const {
    className,
    toggleFerryStopModalUpdate,
    ferryStopModalUpdate,
    updateFerryStop,
    isAuthenticated,
    getService,
    services,
    ferryStops,
    id
  } = props;

  useEffect(()=>{
    if(isAuthenticated) {
      getService();
    }
  },[]);


  const [formData, setFormData] = useState({ ferrystopcode: "", ferrystop: "", service: "", speed: "", accuracy: "", altitudeaccuracy: "", altitude: "", longitude: "",latitude: "", routecode: '', heading: ''});


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    ferrystopcode, ferrystop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateFerryStop(id, ferrystopcode, ferrystop,routecode, heading, speed, accuracy, altitudeaccuracy, altitude, longitude, latitude, service);
    setFormData({ferrystopcode: "", ferrystop: "", service: "", speed: "", accuracy: "", altitudeaccuracy: "", altitude: "", longitude: "",latitude: "", routecode: '', heading: ''})

  };


  useEffect(()=> {
    if(ferryStops && id) {
      ferryStops.map(ferryStop => {
        if(ferryStop.id === id) {
          setFormData({ferrystopcode: ferryStop.stationcode, ferrystop: ferryStop.station, service: ferryStop.service, speed: ferryStop.speed, accuracy: ferryStop.accuracy, altitudeaccuracy: ferryStop.altitudeaccuracy, altitude: ferryStop.altitude, longitude: ferryStop.longitude, latitude: ferryStop.latitude, routecode: ferryStop.routecode, heading: ferryStop.heading})
        }
      })
    }
  },[id, ferryStops])


  const toggle = () => {toggleFerryStopModalUpdate()};

  return (
    <div>
      <Modal isOpen={ferryStopModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Ferry Stop</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Ferry Stop Code</Label>
                <Input type="text"  name="ferrystopcode" onChange={onChange} value={ferrystopcode}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Ferry Stop</Label>
                <Input type="text"  name="ferrystop" onChange={onChange} value={ferrystop} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Service</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="service"
                  value={service}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Service</option>
                  {services && services.map((service, index) =>
                    <option value={service.service} key={index}>{service.service}</option>
                  )}
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

export default  connect( mapStateToProps, mapDispatchToProps)(FerryStopModalUpdate);

