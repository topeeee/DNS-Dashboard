import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {createService, toggleServiceModalCreate} from "../../store/actions/serviceAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleServiceModalCreate: () => dispatch(toggleServiceModalCreate()),
    createService: (servicecode, service, statecode) => dispatch(createService(servicecode, service, statecode)),

  };
}

const mapStateToProps = state => ({
  serviceModalCreate: state.service.ServiceModalCreate,
  services: state.service.services

});

const ServiceModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleServiceModalCreate,
    serviceModalCreate,
    createService,
  } = props;

  const [formData, setFormData] = useState({servicecode: '', service: '', statecode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { servicecode, service, statecode } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createService(servicecode, service, statecode);
    setFormData({servicecode: '', service: '', statecode: ''})

  };

  const toggle = () => {toggleServiceModalCreate()};

  return (
    <div>
      <Modal isOpen={ serviceModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Service</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 text-info">Service Code</Label>
              <Input
                type="text"
                name="servicecode"
                value={servicecode}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1 text-info">Service</Label>
              <Input
                type="text"
                name="service"
                value={service}
                onChange={onChange}
                required
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1 text-info">State Code</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="statecode"
                placeholder=" Country Code"
                value={statecode}
                onChange={onChange}
                required>
                <option value="">Select State</option>
                <option value={"Lagos"}>Lagos</option>
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

export default  connect( mapStateToProps, mapDispatchToProps)(ServiceModalCreate);

