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

  const onSubmit = async (e) => {
    e.preventDefault();
    createState(stateCode, state, countryCode);
    setFormData({stateCode: '', state: '', countryCode: ''})

  };

  const toggle = () => {toggleStateModalCreate()};

  return (
    <div>
      <Modal isOpen={ stateModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create State</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">State Code</Label>
              <Input
                type="text"
                name="stateCode"
                value={stateCode}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1 text-info">State</Label>
              <Input
                type="text"
                name="state"
                value={state}
                onChange={onChange}
                required
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1 text-info">Country Code</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="countryCode"
                placeholder=" Country Code"
                value={countryCode}
                onChange={onChange}
                required>
                <option value="">Select Country</option>
                <option value={"Nigeria"}>Nigeria</option>
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

export default  connect( mapStateToProps, mapDispatchToProps)( StateModalCreate);

