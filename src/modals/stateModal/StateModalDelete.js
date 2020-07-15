import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleStateModalUpdate, updateState} from "../../store/actions/stateAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleStateModalUpdate: () => dispatch(toggleStateModalUpdate()),
    updateState: (id) => dispatch(updateState(id))
  };
}

const mapStateToProps = state => ({
  StateModalUpdate: state.state.StateModalUpdate,
  id: state.state.updateId

});

const StateModalDelete = (props)=> {
  const {
    className,
    toggleStateModalUpdate,
    StateModalUpdate,
    id,
    deleteState
  } = props;


  const [formData, setFormData] = useState({stateCode: '', state: '', countryCode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // createState(stateCode, state, countryCode);
    setFormData({stateCode: '', state: '', countryCode: ''})

  };

  const { stateCode, state, countryCode } = formData;

  const toggle = () => {toggleStateModalUpdate()};

  return (
    <div>
      <Modal isOpen={StateModalUpdate} toggle={toggle} className={className}>
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

export default  connect( mapStateToProps, mapDispatchToProps)(StateModalDelete);

