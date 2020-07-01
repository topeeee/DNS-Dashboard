import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {
  updateVehicle,
  toggleVehicleUpdate, getVehicles
} from "../../store/actions/vehicleAction";
import {getOperators} from "../../store/actions/operatorAction";




function mapDispatchToProps(dispatch) {
  return {
    toggleVehicleModalUpdate: () => dispatch(toggleVehicleUpdate()),
    updateVehicle: (vehicleId, vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator) =>
      dispatch(updateVehicle(vehicleId, vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator)),
    getOperators: () => dispatch(getOperators()),
    getVehicles: () => dispatch(getVehicles()),

  };
}

const mapStateToProps = state => ({
  vehicleModalUpdate: state.vehicle.VehicleModalUpdate,
  operators: state.operator.operators,
  vehicleId: state.vehicle.vehicleId,
  vehicles: state.vehicle.vehicles,
  isAuthenticated: state.auth.isAuthenticated,
});

const VehicleModalUpdate = (props) => {

  const {
    className,
    toggleVehicleModalUpdate,
    vehicleModalUpdate,
    updateVehicle,
    operators,
    getOperators,
    vehicleId,
    getVehicles,
    vehicles,
    isAuthenticated
  } = props;




  useEffect(()=> {
    if(isAuthenticated) {
      getOperators();
      getVehicles()
    }
  }, []);

  const [formData, setFormData] = useState({vehicle_make: "", vehicle_model: "", vehicle_type: "", plate_number: "", capacity: "", operator: "" });
  const [newOperator, setNewOperator] = useState([]);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateVehicle(vehicleId,vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator);
    setFormData({vehicle_make: "", vehicle_model: "", vehicle_type: "", plate_number: "", capacity: "", operator: "" })

  };

  function getNewVehicle() {
    if(newOperator){
      newOperator.map(operator => {
        if(operator.id === vehicleId) {
          setFormData({vehicle_make: operator.vehicle_make, vehicle_model: operator.vehicle_model, vehicle_type: operator.vehicle_type, plate_number: operator.plate_number, capacity: operator.capacity, operator: operator.operator})
        }
      });
    }
  };

  useEffect(()=> {
    if(vehicleId) {
      getNewVehicle()
    }
  },[vehicleId]);

  useEffect(()=> {
    if(vehicles) {
      setNewOperator(vehicles)
    }
  },[vehicles]);



  const toggle = () => {toggleVehicleModalUpdate()};

  return (
    <div>
      <Modal isOpen={vehicleModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Vehicle</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>

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
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="vehicle_type"
                  value={vehicle_type}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Vehicle Type</option>
                  Bus, car, minivan
                  <option value="Bus">Bus</option>
                  <option value="Car">Car</option>
                  <option value="MiniVan">MiniVan</option>
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle  Plate Number</Label>
                <Input type="text"  name="plate_number" onChange={onChange} value={plate_number} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">capacity</Label>
                <Input type="text"  name="capacity" onChange={onChange} value={capacity} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Operator</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="operator"
                  value={operator}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Operator</option>
                  {operators && operators.map((operator, index) =>
                    <option value={operator.name} key={index}>{operator.name}</option>
                  )}
                </Input>
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

export default  connect( mapStateToProps, mapDispatchToProps)(VehicleModalUpdate);

