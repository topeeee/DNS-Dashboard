import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from "react-redux";
import {toggleZoneModalCreate, createZone} from "../../store/actions/zoneAction";
import {getStates} from "../../store/actions/stateAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleZoneModalCreate: () => dispatch(toggleZoneModalCreate()),
    createZone: (zoneCode, zone, stateCode) => dispatch(createZone(zoneCode, zone, stateCode)),
    getStates: () => dispatch(getStates()),

  };
}

const mapStateToProps = state => ({
  zoneModalCreate: state.zone.ZoneModalCreate,
  states: state.state.states,
  isAuthenticated: state.auth.isAuthenticated

});

const ZoneModalCreate = (props) => {
  const {
    className,
    toggleZoneModalCreate,
    zoneModalCreate,
    createZone,
    states,
    StateUser,
    isAuthenticated
  } = props;

  useEffect(()=>{
    if(isAuthenticated){
      getStates();
    }
    },[]);

  const [formData, setFormData] = useState({zoneCode: '', zone: '', stateCode: ''});





  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { zoneCode, zone, stateCode } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createZone(zoneCode, zone, stateCode);
    setFormData({zoneCode: '', zone: '', stateCode: ''})

  };

  const toggle = () => {toggleZoneModalCreate()};

  return (
    <div>
      <Modal isOpen={ zoneModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Zone</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 ">Zone Code</Label>
              <Input
                type="text"
                name="zoneCode"
                placeholder="Zone Code"
                value={zoneCode}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1">Zone</Label>
              <Input
                type="text"
                name="zone"
                placeholder="Zone"
                value={zone}
                onChange={onChange}
                required
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1">State Code</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="stateCode"
                value={stateCode}
                onChange={onChange}
                required
              >
                <option value="">Select state code</option>
                {states && states.map((state, index) =>
                  <option value={state.xstatecode} key={index}>{state.xstatecode}</option>
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

export default  connect( mapStateToProps, mapDispatchToProps)( ZoneModalCreate);

