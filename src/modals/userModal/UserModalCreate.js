import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleUserModalCreate, createUser} from "../../store/actions/userAction";
// import {BusStopUser} from "../../store/actions/busStopAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleUserModalCreate: () => dispatch(toggleUserModalCreate()),
    createUser: (first_name, last_name, email, date_of_birth, pax_code, home_location, home_pickup_time, status, payment_method) =>
      dispatch(createUser(first_name, last_name, email, date_of_birth, pax_code, home_location, home_pickup_time, status, payment_method)),

  };
}

const mapStateToProps = state => ({
  userModalCreate: state.user.UserModalCreate,


});

const UserModalCreate = (props) => {

  const {
    className,
    toggleUserModalCreate,
    userModalCreate,
    createUser,
  } = props;



  const [formData, setFormData] = useState({first_name: "", last_name: "", email: "", date_of_birth: "", pax_code: "", home_location: "", home_pickup_time: "", status:"", payment_method: "" });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    first_name, last_name, email, date_of_birth, pax_code, home_location, home_pickup_time, status, payment_method
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createUser(first_name, last_name, email, date_of_birth, pax_code, home_location, home_pickup_time, status, payment_method);
    setFormData({first_name: "", last_name: "", email: "", date_of_birth: "", pax_code: "", home_location: "", home_pickup_time: "", status:"", payment_method: ""})

  };

  const toggle = () => {toggleUserModalCreate()};

  return (
    <div>
      <Modal isOpen={userModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create User</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              {/*<Col md="6">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">First Name</Label>*/}
              {/*  <Input*/}
              {/*    style={{cursor: 'pointer'}}*/}
              {/*    type="select"*/}
              {/*    name="first_name"*/}
              {/*    value={first_name}*/}
              {/*    onChange={onChange}*/}
              {/*    required*/}
              {/*  >*/}
              {/*    <option value="">Select Mode</option>*/}
              {/*    <option value="Zeno Bus">Zeno Bus</option>*/}
              {/*    <option value="Zeno Shuttle">Zeno Shuttle</option>*/}
              {/*    /!*{routes && routes.map((route, index) =>*!/*/}
              {/*    /!*  <option value={route.routecode} key={index}>{route.routecode}</option>*!/*/}
              {/*    /!*)}*!/*/}
              {/*  </Input>*/}
              {/*</Col>*/}
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">First Name</Label>
                <Input type="text"  name="first_name" onChange={onChange} value={first_name}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Last Name</Label>
                <Input type="text" name="last_name" onChange={onChange} value={last_name} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Email</Label>
                <Input type="email"  name="email" onChange={onChange} value={email} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Date of birth</Label>
                <Input type="date" name="date_of_birth" onChange={onChange} value={date_of_birth} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Pax Code</Label>
                <Input type="text"  name="pax_code" onChange={onChange} value={pax_code} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Home Location</Label>
                <Input type="text"  name="home_location" onChange={onChange} value={home_location} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Home Pickup Time</Label>
                <Input type="text"  name="home_pickup_time" onChange={onChange} value={home_pickup_time} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Status</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="status"
                  value={status}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Suspended">Suspended</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Payment Method</Label>
                <Input type="text"  name="payment_method" onChange={onChange} value={payment_method} required />
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

export default  connect( mapStateToProps, mapDispatchToProps)(UserModalCreate);

