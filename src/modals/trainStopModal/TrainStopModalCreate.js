import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {createTrainStop, toggleTrainStopModalCreate} from "../../store/actions/trainStopAction";
import {getTrainLines} from "../../store/actions/trainLineAction";
import {getService} from "../../store/actions/serviceAction";




function mapDispatchToProps(dispatch) {
  return {
    toggleTrainStopModalCreate: () => dispatch(toggleTrainStopModalCreate()),
    createTrainStop: (trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude) =>
      dispatch(createTrainStop(trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude)),
    getTrainLines: () => dispatch(getTrainLines()),
    getService: () => dispatch(getService()),
  };
}

const mapStateToProps = state => ({
  trainStopModalCreate: state.trainStop.TrainStopModalCreate,
  isAuthenticated: state.auth.isAuthenticated,
  trainLines: state.trainLine.trainLines,
  services: state.service.services,

});

const TrainStopModalCreate = (props) => {

  const {
    className,
    toggleTrainStopModalCreate,
    trainStopModalCreate,
    createTrainStop,
    isAuthenticated,
    trainLines,
    getTrainLines,
    getService,
    services
  } = props;

  useEffect(()=>{
    if(isAuthenticated) {
      getTrainLines();
      getService();
    }
  },[]);


  const [formData, setFormData] = useState({ trainstopcode: "",trainstop: "",trainlinecode: "", trainline: "",service: "", speed: "", accuracy: "", altitudeaccuracy: "", altitude: "", longitude: "",latitude: ""});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createTrainStop( trainstopcode,trainstop,trainlinecode, trainline,service, speed, accuracy, altitudeaccuracy, altitude, longitude,latitude);
    setFormData({trainstopcode: "",trainstop: "",trainlinecode: "", trainline: "",service: "", speed: "", accuracy: "", altitudeaccuracy: "", altitude: "", longitude: "",latitude: ""})

  };

  useEffect(()=> {
    if(trainline !== "" && trainLines) {
      trainLines.map(mapTrainline => {
        if(trainline === mapTrainline.trainline) {
          setFormData({...formData, trainlinecode: mapTrainline.trainlinecode})
        }
      })
    }
  },[trainline, trainLines]);


  const toggle = () => {toggleTrainStopModalCreate()};

  return (
    <div>
      <Modal isOpen={trainStopModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Train Stop</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Train Stop Code</Label>
                <Input type="text"  name="trainstopcode" onChange={onChange} value={trainstopcode}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Train Stop</Label>
                <Input type="text"  name="trainstop" onChange={onChange} value={trainstop} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Train Line</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="trainline"
                  value={trainline}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Train Line</option>
                  {trainLines && trainLines.map((trainLine, index) =>
                    <option value={trainLine.trainline} key={index}>{trainLine.trainline}</option>
                  )}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 ">Train Line Code</Label>
                <Input type="text" name="trainlinecode" value={trainlinecode} onChange={onChange} required />
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

export default  connect( mapStateToProps, mapDispatchToProps)(TrainStopModalCreate);

