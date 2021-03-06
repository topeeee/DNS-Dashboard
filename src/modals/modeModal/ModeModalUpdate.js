import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleModeModalUpdate, updateMode} from "../../store/actions/modeAction";
import {getService} from "../../store/actions/serviceAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleModeModalUpdate: () => dispatch(toggleModeModalUpdate()),
    updateMode: (id, modecode, mode, statecode, service, servicecode) => dispatch(updateMode(id, modecode, mode, statecode, service, servicecode)),
    getService: () => dispatch(getService()),
  };
}

const mapStateToProps = state => ({
  ModeModalUpdate: state.mode.ModeModalUpdate,
  id: state.mode.updateID,
  states: state.state.states,
  modes: state.mode.modes,
  services: state.service.services,
  isAuthenticated: state.auth.isAuthenticated,

});

const ModeModalUpdate = (props)=> {
  const {
    className,
    toggleModeModalUpdate,
    ModeModalUpdate,
    id,
    updateMode,
    services,
    getService,
    modes,
    isAuthenticated
  } = props;

  const [formData, setFormData] = useState({modecode: "", mode: "", statecode: "Lagos", service: '', servicecode: '' });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {modecode, mode, statecode, service, servicecode} = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateMode(id, modecode, mode, statecode, service, servicecode);
    setFormData({modecode: "", mode: "", statecode: "", service: '', servicecode: ''})

  };

  useEffect(()=> {
    if(modes && id) {
      modes.map(mode=> {
        if(mode.id === id) {
          setFormData({modecode: mode.modecode, mode: mode.mode, statecode: mode.statecode, service: mode.service, servicecode: mode.servicecode})
        }
      })
    }
  },[modes, id]);

  useEffect(()=> {
    if(service !== "" && services) {
      services.map(mapService=> {
        if(service === mapService.service) {
          setFormData({...formData, servicecode: mapService.servicecode})
        }
      })
    }
  },[services, service]);

  useEffect(()=> {
    if(isAuthenticated) {
      getService();
    }
  },[])

  const toggle = () => {toggleModeModalUpdate()};


  return (
    <div>
      <Modal isOpen={ModeModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Mode</ModalHeader>
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
              <Label for="name" className="font-weight-bold mb-0 text-info"> Service code</Label>
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

export default  connect( mapStateToProps, mapDispatchToProps)(ModeModalUpdate);

