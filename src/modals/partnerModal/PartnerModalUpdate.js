import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {togglePartnerModalUpdate, updatePartner} from "../../store/actions/partnerAction";







function mapDispatchToProps(dispatch) {
  return {
    togglePartnerModalUpdate: () => dispatch(togglePartnerModalUpdate()),
    updatePartner: (id, name, email, phoneNo, officeAddress, status, numberOfVehicle) => dispatch(updatePartner(id, name, email, phoneNo, officeAddress, status, numberOfVehicle)),
  };
}

const mapStateToProps = state => ({
  PartnerModalUpdate: state.partners.PartnerModalUpdate,
  partners: state.partners.partners,
  id: state.partners.partnerUpdateId,

});

const PartnerModalUpdate = (props) => {
  const {
    className,
    PartnerModalUpdate,
    togglePartnerModalUpdate,
    id,
    updatePartner,
    partners
  } = props;

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "", status: "1", numberOfVehicle: ""});


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, status, numberOfVehicle } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updatePartner(id,  name, email, phoneNo, officeAddress, status, numberOfVehicle);

  };

useEffect(()=> {
  if(partners && id) {
    partners.map(partner=> {
      if(partner.id === id) {
        setFormData({name: partner.name, email: partner.email, phoneNo: partner.phoneNo, officeAddress: partner.officeAddress, status: partner.status, numberOfVehicle: partner.numberOfVehicle})
      }
    })
  }
},[partners, id]);

  const toggle = () => {togglePartnerModalUpdate()};

  return (
    <div>
      <Modal isOpen={PartnerModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Partner</ModalHeader>
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

export default  connect( mapStateToProps, mapDispatchToProps)(PartnerModalUpdate);

