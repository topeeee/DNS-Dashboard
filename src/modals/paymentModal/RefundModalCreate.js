import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleRefundModalCreate} from "../../store/actions/paymentAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleRefundModalCreate: () => dispatch(toggleRefundModalCreate())
  };
}

const mapStateToProps = state => ({
  refundModalCreate: state.payment.RefundModalCreate,

});

const RefundModalCreate = (props) => {
  const {

    className,
    toggleRefundModalCreate,
    refundModalCreate
  } = props;



  const toggle = () => {toggleRefundModalCreate()};

  return (
    <div>
      <Modal isOpen={refundModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Refund</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
              <Label for="number"> Phone Number</Label>
              <Input type="number" name="email" id="exampleEmail" placeholder=" Phone Number" />
              <Label for="email"> Email Address</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder=" Email Address" />
              <Label for="ratings">Payment Reference</Label>
              <Input type="text" name="bank"  placeholder="Payment Reference" />
              <Label for="Amount">Amount to be refund</Label>
              <Input type="number" name="bank"  placeholder="Amount to be refund" />
              <Label for="bank">Payment method</Label>
              <Input type="text" name="bank"  placeholder="Payment method" />
              <Label for="date"> Date/time</Label>
              <Input type="date" name="account"  placeholder=" Date/time" />
              <Label for="account">Pickup</Label>
              <Input type="text" name="account"  placeholder="Pickup" />
              <Label for="account">Drop</Label>
              <Input type="text" name="account"  placeholder="Drop" />
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

export default  connect( mapStateToProps, mapDispatchToProps)( RefundModalCreate);

