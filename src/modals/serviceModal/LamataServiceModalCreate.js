import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from "react-redux";
import {toggleLamataServiceModalCreate,} from "../../store/actions/serviceAction";
import {createMessage} from "../../store/actions/messageAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleLamataServiceModalCreate: () => dispatch(toggleLamataServiceModalCreate()),
    createMessage: ( subject, message) => dispatch(createMessage(subject, message)),

  };
}

const mapStateToProps = state => ({
  lamataServiceModalCreate: state.service.LamataServiceModalCreate,

});

const LamataServiceModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleLamataServiceModalCreate,
    createMessage,
    lamataServiceModalCreate
  } = props;

  const [formData, setFormData] = useState({subject: '', message: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { subject, message } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createMessage( subject, message);
    toggleLamataServiceModalCreate();
    setFormData({subject: '', message: ''})

  };
  const toggle = () => {toggleLamataServiceModalCreate()};

  return (
    <div>
      <Modal isOpen={lamataServiceModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Service</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Service</Label>
              <Input
                type="text"
                name="subject"
                value={subject}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1 text-info">Service Description</Label>
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

export default  connect( mapStateToProps, mapDispatchToProps)(LamataServiceModalCreate);

