import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleStateModalCreate, createState} from "../../store/actions/stateAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleStateModalCreate: () => dispatch(toggleStateModalCreate()),
    createState: (stateCode, state, countryCode) => dispatch(createState(stateCode, state, countryCode)),

  };
}

const mapStateToProps = state => ({
  stateModalCreate: state.state.StateModalCreate,

});

const StateModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleStateModalCreate,
    stateModalCreate,
    createState
  } = props;

  const [formData, setFormData] = useState({stateCode: '', state: '', countryCode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { stateCode, state, countryCode } = formData;

  const onSubmit = async () => {
    console.log('submitted');
    createState(stateCode, state, countryCode);

  };

  const toggle = () => {toggleStateModalCreate()};

  return (
    <div>
      <Modal isOpen={ stateModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create State</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 ">State Code</Label>
              <Input
                type="text"
                name="stateCode"
                placeholder="State Code"
                value={stateCode}
                onChange={onChange}
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1">State</Label>
              <Input
                type="text"
                name="state"
                placeholder="State"
                value={state}
                onChange={onChange}
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1">Country Code</Label>
              <Input
                type="text"
                name="countryCode"
                placeholder=" Country Code"
                value={countryCode}
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

export default  connect( mapStateToProps, mapDispatchToProps)( StateModalCreate);

