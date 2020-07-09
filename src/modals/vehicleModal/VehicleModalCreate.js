import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleVehicleModalCreate, createVehicle} from "../../store/actions/vehicleAction";
import {getOperators} from "../../store/actions/operatorAction";
import {isOperator, OperatorName} from "../../environments/constants";



const isAdmin = sessionStorage.getItem('isAdmin');

function mapDispatchToProps(dispatch) {
  return {
    toggleVehicleModalCreate: () => dispatch(toggleVehicleModalCreate()),
    createVehicle: (vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator) =>
      dispatch(createVehicle(vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator)),
    getOperators: () => dispatch(getOperators()),

  };
}

const mapStateToProps = state => ({
  vehicleModalCreate: state.vehicle.VehicleModalCreate,
  operators: state.operator.operators,
  isAuthenticated: state.auth.isAuthenticated,




});

const VehicleModalCreate = (props) => {

  const {
    className,
    toggleVehicleModalCreate,
    vehicleModalCreate,
    createVehicle,
    operators,
    getOperators,
    isAuthenticated
  } = props;




  useEffect(()=> {
    if(isAuthenticated){
      getOperators()
    }
  }, []);


  const [formData, setFormData] = useState({vehicle_make: "", vehicle_model: "", vehicle_type: "", plate_number: "", capacity: "", operator: "" });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createVehicle(vehicle_make, vehicle_model, vehicle_type, plate_number, capacity, operator);
    setFormData({vehicle_make: "", vehicle_model: "", vehicle_type: "", plate_number: "", capacity: "", operator: "" })

  };

  useEffect(()=> {
   if(isOperator) {
     setFormData({...formData, operator: OperatorName })
   }
   }, [isOperator]);

  const toggle = () => {toggleVehicleModalCreate()};

  return (
    <div>
      <Modal isOpen={vehicleModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Vehicle</ModalHeader>
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
                {(operators && isAdmin) &&<Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="operator"
                  value={operator}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Operator</option>
                  {(operators && isAdmin) && operators.map((operator, index) =>
                    <option value={operator.name} key={index}>{operator.name}</option>
                  )}
                  {/*{(operators && isAdmin !== admin) && operators.filter(user =>(user.email === isAdmin)).map((operator, index) =>*/}
                  {/*  <option value={operator.name} key={index}>{operator.name}</option>*/}
                  {/*)}*/}


                </Input>}
                {(operators && isOperator) && <Input type="text"  name="operator" readOnly={true} onChange={onChange} value={operator} required />}
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

