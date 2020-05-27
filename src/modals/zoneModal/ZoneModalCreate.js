import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleZoneModalCreate, createZone} from "../../store/actions/zoneAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleZoneModalCreate: () => dispatch(toggleZoneModalCreate()),
    createZone: (zoneCode, zone, stateCode) => dispatch(createZone(zoneCode, zone, stateCode)),

  };
}

const mapStateToProps = state => ({
  zoneModalCreate: state.zone.ZoneModalCreate,

});

const ZoneModalCreate = (props) => {
  const {
    className,
    toggleZoneModalCreate,
    zoneModalCreate,
    createZone
  } = props;

  const [formData, setFormData] = useState({zoneCode: '', zone: '', stateCode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { zoneCode, zone, stateCode } = formData;

  const onSubmit = async () => {
    createZone(zoneCode, zone, stateCode);

  };

  const toggle = () => {toggleZoneModalCreate()};

  return (
    <div>
      <Modal isOpen={ zoneModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Zone</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 ">Zone Code</Label>
              <Input
                type="text"
                name="zoneCode"
                placeholder="State Code"
                value={zoneCode}
                onChange={onChange}
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1">Zone</Label>
              <Input
                type="text"
                name="zone"
                placeholder="State"
                value={zone}
                onChange={onChange}
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1">State Code</Label>
              <Input
                type="text"
                name="stateCode"
                placeholder=" Country Code"
                value={stateCode}
                onChange={onChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>onSubmit()}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)( ZoneModalCreate);

