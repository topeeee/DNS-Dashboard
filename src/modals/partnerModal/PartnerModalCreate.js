import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {registerPartner, togglePartnerModalCreate} from "../../store/actions/partnerAction";







function mapDispatchToProps(dispatch) {
  return {
    togglePartnerModalCreate: () => dispatch(togglePartnerModalCreate()),
    registerPartner: (username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle) => dispatch(registerPartner(username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle)),
  };
}

const mapStateToProps = state => ({
  PartnerModalCreate: state.partners.PartnerModalCreate,

});

const PartnerModalCreate = (props) => {
  const {
    className,
    PartnerModalCreate,
    togglePartnerModalCreate,
    registerPartner,
  } = props;

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "", status: "1", numberOfVehicle: ""});


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, status, numberOfVehicle } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    registerPartner(email, "password",  name, email, phoneNo, officeAddress, status, numberOfVehicle);

  };



  const toggle = () => {togglePartnerModalCreate()};

  return (
    <div>
      <Modal isOpen={PartnerModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Partner</ModalHeader>
        {/*<button onClick={forMe}>button</button>*/}
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Partner Name</Label>
                <Input type="text"  name="name" onChange={onChange}  value={name}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info"> Partner Phone</Label>
                <Input type="text"  name="phoneNo" onChange={onChange} value={phoneNo}  required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Partner Email</Label>
                <Input type="email"  name="email" onChange={onChange}  value={email} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Office Address</Label>
                <Input type="text"  name="officeAddress" onChange={onChange}  value={officeAddress} required />
              </Col>
              {/*<Col md="6">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">Number of Vehicles</Label>*/}
              {/*  <Input type="number"  name="numberOfVehicle" onChange={onChange} value={numberOfVehicle} required />*/}
              {/*</Col>*/}
            </FormGroup>
            <div className="d-flex justify-content-md-end">
              <Button color="primary" type="submit" className="mr-1 float-right">Submit</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(PartnerModalCreate);

