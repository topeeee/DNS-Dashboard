import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleModeModalUpdate, updateMode} from "../../store/actions/modeAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleModeModalUpdate: () => dispatch(toggleModeModalUpdate()),
    updateMode: (id, modecode, mode, statecode) => dispatch(updateMode(id, modecode, mode, statecode))
  };
}

const mapStateToProps = state => ({
  ModeModalUpdate: state.mode.ModeModalUpdate,
  id: state.mode.updateID,
  states: state.state.states,
  modes: state.mode.modes,

});

const ModeModalUpdate = (props)=> {
  const {
    className,
    toggleModeModalUpdate,
    ModeModalUpdate,
    id,
    updateMode,
    states,
    modes
  } = props;

  const [formData, setFormData] = useState({modecode: "", mode: "", statecode: "Lagos" });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {modecode, mode, statecode} = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateMode(id, modecode, mode, statecode);
    setFormData({modecode: "", mode: "", statecode: ""})

  };

  useEffect(()=> {
    if(modes && id) {
      modes.map(mode=> {
        if(mode.id === id) {
          setFormData({modecode: mode.modecode, mode: mode.mode, statecode: mode.statecode})
        }
      })
    }
  },[modes, id]);

  const toggle = () => {toggleModeModalUpdate()};

  return (
    <div>
      <Modal isOpen={ModeModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Service</ModalHeader>
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

export default  connect( mapStateToProps, mapDispatchToProps)(ModeModalUpdate);

