import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleServiceModalUpdate, updateService} from "../../store/actions/serviceAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleServiceModalUpdate: () => dispatch(toggleServiceModalUpdate()),
    updateService: (id, servicecode, service, statecode) => dispatch(updateService(id, servicecode, service, statecode))
  };
}

const mapStateToProps = state => ({
  ServiceModalUpdate: state.service.ServiceModalUpdate,
  id: state.service.updateId,
  services: state.service.services

});

const ServiceModalUpdate = (props)=> {
  const {
    className,
    toggleServiceModalUpdate,
    ServiceModalUpdate,
    id,
    services,
    updateService
  } = props;


  const [formData, setFormData] = useState({servicecode: '', service: '', statecode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    updateService(id, servicecode, service, statecode);
    setFormData({servicecode: '', service: '', statecode: ''})

  };

  const { servicecode, service, statecode } = formData;

  useEffect(()=> {
    if(services && id){
      services.map(service=> {
        if(service.id === id) {
          setFormData({servicecode: service.servicecode, service: service.service, statecode: service.statecode})
        }
      })
    }
  },[services, id])

  const toggle = () => {toggleServiceModalUpdate()};

  return (
    <div>
      <Modal isOpen={ServiceModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update service</ModalHeader>
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
              <Label for="service" className="font-weight-bold mb-0 mt-1 text-info">Service</Label>
              <Input
                type="text"
                name="service"
                value={service}
                onChange={onChange}
                required
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1 text-info">State</Label>
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

export default  connect( mapStateToProps, mapDispatchToProps)(ServiceModalUpdate);

