import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {createMessage} from "../../store/actions/messageAction";
import {toggleLamataModeModalCreate} from "../../store/actions/modeAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleLamataModeModalCreate: () => dispatch(toggleLamataModeModalCreate()),
    createMessage: ( subject, message) => dispatch(createMessage(subject, message)),

  };
}

const mapStateToProps = state => ({
  lamataModeModalCreate: state.mode.LamataModeModalCreate,

});

const LamataModeModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleLamataModeModalCreate,
    createMessage,
    lamataModeModalCreate
  } = props;

  const [formData, setFormData] = useState({subject: '', message: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { subject, message } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createMessage( subject, message);
    toggleLamataModeModalCreate()
    setFormData({subject: '', message: ''})

  };
  const toggle = () => {toggleLamataModeModalCreate()};

  return (
    <div>
      <Modal isOpen={lamataModeModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Mode</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Mode</Label>
              <Input
                type="text"
                name="subject"
                value={subject}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1 text-info">Mode Description</Label>
              <Input
                type="textarea"
                name="message"
                value={message}
                onChange={onChange}
                required
              />
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

export default  connect( mapStateToProps, mapDispatchToProps)(LamataModeModalCreate);

