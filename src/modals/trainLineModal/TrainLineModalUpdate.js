import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {getService} from "../../store/actions/serviceAction";
import {toggleTrainLineModalUpdate, updateTrainLine} from "../../store/actions/trainLineAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleTrainLineModalUpdate: () => dispatch(toggleTrainLineModalUpdate()),
    updateTrainLine: (id,  trainlinecode, trainline, service, servicecode) => dispatch(updateTrainLine(id, trainlinecode, trainline, service, servicecode)),
    getService: () => dispatch(getService()),
  };
}

const mapStateToProps = state => ({
  TrainLineModalUpdate: state.trainLine.TrainLineModalUpdate,
  id: state.trainLine.updateId,
  trainLines: state.trainLine.trainLines,
  services: state.service.services,
  isAuthenticated: state.auth.isAuthenticated,

});

const TrainLineModalUpdate = (props)=> {
  const {
    className,
    updateTrainLine,
    TrainLineModalUpdate,
    id,
    toggleTrainLineModalUpdate,
    services,
    getService,
    trainLines,
    isAuthenticated
  } = props;

  const [formData, setFormData] = useState({trainlinecode: '', trainline: '', service: '', servicecode: ''});


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {trainlinecode, trainline, service, servicecode} = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateTrainLine(id, trainlinecode, trainline, service, servicecode);
    setFormData({trainlinecode: '', trainline: '', service: '', servicecode: ''})

  };

  useEffect(()=> {
    if(trainLines && id) {
      trainLines.map(trainLine=> {
        if(trainLine.id === id) {
          setFormData({trainlinecode: trainLine.trainlinecode, trainline: trainLine.trainline, service: trainLine.service, servicecode: trainLine.servicecode})
        }
      })
    }
  },[trainLines, id]);

  useEffect(()=> {
    if(isAuthenticated) {
      getService();
    }
  },[])

  useEffect(()=> {
    if(service !== "" && services) {
      services.map(mapService=> {
        if(service === mapService.service) {
          setFormData({...formData, servicecode: mapService.servicecode})
        }
      })
    }
  },[services, service]);

  const toggle = () => {toggleTrainLineModalUpdate()};


  return (
    <div>
      <Modal isOpen={TrainLineModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Train Line</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Train Line</Label>
              <Input type="text"  name="trainline" onChange={onChange} value={trainline} required />
              <Label for="name" className="font-weight-bold mb-0 text-info">Train Line Code</Label>
              <Input type="text"  name="trainlinecode" onChange={onChange} value={trainlinecode} required/>
              <Label for="name" className="font-weight-bold mb-0 text-info">Service</Label>
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
              <Label for="name" className="font-weight-bold mb-0 text-info">Service Code</Label>
              <Input type="text"  name="servicecode" onChange={onChange} value={servicecode} required />
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

export default  connect( mapStateToProps, mapDispatchToProps)(TrainLineModalUpdate);

