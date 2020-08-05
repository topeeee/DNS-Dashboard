import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleModeModalCreate, createMode} from "../../store/actions/modeAction";
import {getStates} from "../../store/actions/stateAction";




function mapDispatchToProps(dispatch) {
  return {
    toggleModeModalCreate: () => dispatch(toggleModeModalCreate()),
    createMode: (modecode, mode, statecode) =>
      dispatch(createMode(modecode, mode, statecode)),
    getStates: () => dispatch(getStates()),

  };
}

const mapStateToProps = state => ({
  modeModalCreate: state.mode.ModeModalCreate,
  states: state.state.states,
  isAuthenticated: state.auth.isAuthenticated,




});

const ModeModalCreate = (props) => {

  const {
    className,
    toggleModeModalCreate,
    modeModalCreate,
    createMode,
    states,
    isAuthenticated,
    getStates
  } = props;


useEffect(()=> {
  if(isAuthenticated){
    getStates()
  }
}, []);


  const [formData, setFormData] = useState({modecode: "", mode: "", statecode: "Lagos" });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {modecode, mode, statecode} = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createMode(modecode, mode, statecode);
    setFormData({modecode: "", mode: "", statecode: "Lagos"})

  };

  const toggle = () => {toggleModeModalCreate()};

  return (
    <div>
      <Modal isOpen={modeModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Service</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Service Code</Label>
                <Input type="text"  name="modecode" onChange={onChange} value={modecode} required/>
                <Label for="name" className="font-weight-bold mb-0 text-info"> Service</Label>
                <Input type="text"  name="mode" onChange={onChange} value={mode} required />
                {/*<Label for="name" className="font-weight-bold mb-0 text-info">State Code</Label>*/}
                {/*<Input*/}
                {/*  style={{cursor: 'pointer'}}*/}
                {/*  type="select"*/}
                {/*  name="statecode"*/}
                {/*  value={statecode}*/}
                {/*  onChange={onChange}*/}
                {/*  required*/}
                {/*>*/}
                {/*  <option value="">Select State</option>*/}
                {/*  {states && states.map((state, index) =>*/}
                {/*    <option value={state.xstate} key={index}>{state.xstate}</option>*/}
                {/*  )}*/}
                {/*</Input>*/}
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

