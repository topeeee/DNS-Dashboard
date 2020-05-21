import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {togglePromoModalCreate} from "../../store/actions/paymentAction";


function mapDispatchToProps(dispatch) {
  return {
    togglePromoModalCreate: () => dispatch(togglePromoModalCreate())
  };
}

const mapStateToProps = state => ({
  promoModalCreate: state.payment.PromoModalCreate,

});

const PromoModalCreate = (props) => {
  const {

    className,
    togglePromoModalCreate,
    promoModalCreate
  } = props;



  const toggle = () => {togglePromoModalCreate()};

  return (
    <div>
      <Modal isOpen={promoModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Promo</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
              <Label for="number">Type</Label>
              <Input type="number" name="email" id="exampleEmail" placeholder=" Type" />
              <Label for="email"> Code</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Code" />
              <Label for="ratings"> Percentile</Label>
              <Input type="text" name="bank"  placeholder="Percentile" />
              <Label for="Amount">Flat rate</Label>
              <Input type="number" name="bank"  placeholder="Flat rate" />
              <Label for="bank">Users Limit</Label>
              <Input type="text" name="bank"  placeholder="Users Limit" />
              <Label for="date"> User count</Label>
              <Input type="number" name="account"  placeholder="User count" />
              <Label for="account">Expiry Date</Label>
              <Input type="date" name="account"  placeholder="Expiry Date" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)( PromoModalCreate);

