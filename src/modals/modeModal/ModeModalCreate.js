import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleModeModalCreate, createMode} from "../../store/actions/modeAction";
import {getStates} from "../../store/actions/stateAction";
import {getService} from "../../store/actions/serviceAction";




function mapDispatchToProps(dispatch) {
  return {
    toggleModeModalCreate: () => dispatch(toggleModeModalCreate()),
    createMode: (modecode, mode, statecode, service, servicecode) =>
      dispatch(createMode(modecode, mode, statecode, service, servicecode)),
    getStates: () => dispatch(getStates()),
    getService: () => dispatch(getService()),


  };
}

const mapStateToProps = state => ({
  modeModalCreate: state.mode.ModeModalCreate,
  isAuthenticated: state.auth.isAuthenticated,
  services: state.service.services




});

const ModeModalCreate = (props) => {

  const {
    className,
    toggleModeModalCreate,
    modeModalCreate,
    createMode,
    isAuthenticated,
    getStates,
    services,
    getService
  } = props;


useEffect(()=> {
  if(isAuthenticated){
    getStates();
    getService();
  }
}, []);




  const [formData, setFormData] = useState({modecode: "", mode: "", statecode: "Lagos", service: '', servicecode: '' });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {modecode, mode, statecode, service, servicecode } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createMode(modecode, mode, statecode, service, servicecode);
    setFormData({modecode: "", mode: "", statecode: "Lagos", service: '', servicecode: ''})

  };
  useEffect(()=> {
    if(service !== "" && services) {
      services.map(mapService=> {
        if(service === mapService.service) {
          setFormData({...formData, servicecode: mapService.servicecode})
        }
      })
    }
  },[services, service]);

  const toggle = () => {toggleModeModalCreate()};

  return (
    <div>
      <Modal isOpen={modeModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Mode</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Mode Code</Label>
                <Input type="text"  name="modecode" onChange={onChange} value={modecode} required/>
                <Label for="name" className="font-weight-bold mb-0 text-info">Mode</Label>
                <Input type="text"  name="mode" onChange={onChange} value={mode} required />
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

export default  connect( mapStateToProps, mapDispatchToProps)(ModeModalCreate);

