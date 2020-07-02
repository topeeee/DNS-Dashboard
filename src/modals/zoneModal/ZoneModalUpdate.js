import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleZoneModalUpdate, updateZone} from "../../store/actions/zoneAction";
import axios from "axios";
import api from "../../environments/environment";


function mapDispatchToProps(dispatch) {
  return {
    toggleZoneModalUpdate: () => dispatch(toggleZoneModalUpdate()),
    updateZone: (id, zonecode, zone, statecode) => dispatch(updateZone(id, zonecode, zone, statecode))
  };
}

const mapStateToProps = state => ({
  ZoneModalUpdate: state.zone.ZoneModalUpdate,
  id: state.zone.updateID,
  states: state.state.states,
  isAuthenticated: state.auth.isAuthenticated,
  zones: state.zone.zones,

});



const ZoneModalUpdate = (props)=> {
  const {
    className,
    toggleZoneModalUpdate,
    ZoneModalUpdate,
    id,
    updateZone,
    states,
    zones
  } = props;

  const [formData, setFormData] = useState({zonecode: '', zone: '', statecode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { zonecode, zone, statecode } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateZone(id, zonecode, zone, statecode);
    setFormData({zonecode: '', zone: '', statecode: ''})

  };

  useEffect(()=> {
    if(zones && id) {
      zones.map(zone=> {
        if(zone.id === id) {
          setFormData({zonecode: zone.zonecode, zone: zone.zone, statecode: zone.statecode})
        }
      })
    }
  },[zones, id]);

  const toggle = () => {toggleZoneModalUpdate()};
console.log(zonecode)

  return (
    <div>
      <Modal isOpen={ ZoneModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Zone</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 ">Zone Code</Label>
              <Input
                type="text"
                name="zonecode"
                // placeholder="Zone Code"
                value={zonecode}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1">Zone</Label>
              <Input
                type="text"
                name="zone"
                // placeholder="Zone"
                value={zone}
                onChange={onChange}
                required
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1">State</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="statecode"
                value={statecode}
                onChange={onChange}
                required
              >
                <option value="">Select state</option>
                {states && states.map((state, index) =>
                  <option value={state.xstate} key={index}>{state.xstate}</option>
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

export default  connect( mapStateToProps, mapDispatchToProps)(ZoneModalUpdate);

