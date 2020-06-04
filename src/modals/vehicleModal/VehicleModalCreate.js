import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleVehicleModalCreate, createVehicle} from "../../store/actions/vehicleAction";




function mapDispatchToProps(dispatch) {
  return {
    toggleVehicleModalCreate: () => dispatch(toggleVehicleModalCreate()),
    createVehicle: (approved, vehicle_make, vehicle_model, vehicle_type, status) =>
      dispatch(createVehicle(approved, vehicle_make, vehicle_model, vehicle_type, status)),

  };
}

const mapStateToProps = state => ({
  vehicleModalCreate: state.vehicle.VehicleModalCreate,




});

const VehicleModalCreate = (props) => {

  const {
    className,
    toggleVehicleModalCreate,
    vehicleModalCreate,
    createVehicle,
  } = props;





  const [formData, setFormData] = useState({approved: "", vehicle_make: "", vehicle_model: "", vehicle_type: "", status: "" });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    approved, vehicle_make, vehicle_model, vehicle_type, status
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createVehicle(approved, vehicle_make, vehicle_model, vehicle_type, status);
    setFormData({approved: "", vehicle_make: "", vehicle_model: "", vehicle_type: "", status: "" })

  };

  const toggle = () => {toggleVehicleModalCreate()};

  return (
    <div>
      <Modal isOpen={vehicleModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Vehicle</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Approved</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="approved"
                  value={approved}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="False">False</option>
                  <option value="True">True</option>
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle Make</Label>
                <Input type="text"  name="vehicle_make" onChange={onChange} value={vehicle_make} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info"> Vehicle Model</Label>
                <Input type="text"  name="vehicle_model" onChange={onChange} value={vehicle_model} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle Type</Label>
                <Input type="text"  name="vehicle_type" onChange={onChange} value={vehicle_type} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle  status</Label>
                <Input type="text"  name="status" onChange={onChange} value={status} required />
              </Col>
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

export default  connect( mapStateToProps, mapDispatchToProps)(VehicleModalCreate);

