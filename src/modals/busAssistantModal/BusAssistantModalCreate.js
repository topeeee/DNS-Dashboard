import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusAssistantModalCreate} from "../../store/actions/busAssistantAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantModalCreate: () => dispatch(toggleBusAssistantModalCreate())
  };
}

const mapStateToProps = state => ({
  busAssistantModalCreate: state.busAssistants.BusAssistantModalCreate,

});

const BusAssistantModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleBusAssistantModalCreate,
    busAssistantModalCreate
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {toggleBusAssistantModalCreate()};

  return (
    <div>
      <Modal isOpen={busAssistantModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Bus Assistant</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">First Name</Label>
              <Input type="text" name="email" id="exampleEmail" placeholder="First Name" />
              <Label for="name">Last Name</Label>
              <Input type="text" name="email" id="exampleEmail" placeholder="Last Name" />
              <Label for="number"> Phone Number</Label>
              <Input type="number" name="email" id="exampleEmail" placeholder=" Phone Number" />
              <Label for="address">Residential Address</Label>
              <Input type="text" name="email" id="exampleEmail" placeholder="Residential Address" />
              <Label for="email"> Email Address</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder=" Email Address" />
              <Label>Status</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Offline
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Online
                </Label>
              </FormGroup>
              <Label for="ratings">Ratings</Label>
              <Input type="text" name="bank"  placeholder="Ratings" />
              <Label for="ratings">Reviews</Label>
              <Input type="text" name="bank"  placeholder="Reviews" />
              <Label for="bank">Bank Name</Label>
              <Input type="text" name="bank"  placeholder="Bank Name" />
              <Label for="account">Account Name</Label>
              <Input type="text" name="account"  placeholder="Account Name" />
              <Label for="account">Account Number</Label>
              <Input type="number" name="account"  placeholder="Account Number" />
              <Label for="account">Vehicle Type</Label>
              <Input type="text" name="account"  placeholder="Vehicle Type" />
              <Label for="account">Vehicle Make</Label>
              <Input type="text" name="account"  placeholder="Vehicle Make" />
              <Label for="account">Vehicle Model</Label>
              <Input type="text" name="account"  placeholder="Vehicle Model" />
              <Label for="account">Assigned Area</Label>
              <Input type="text" name="account"  placeholder="Assigned Area" />
              <Label for="account"> Zone</Label>
              <Input type="text" name="account"  placeholder="Zone" />
              <Label for="account">Area</Label>
              <Input type="text" name="account"  placeholder="Area" />
              <Label for="account">Route</Label>
              <Input type="text" name="account"  placeholder="Route" />
              <Label for="account">Geo-fence Area</Label>
              <Input type="text" name="account"  placeholder="Geo-fence Area" />
              <Label for="account">ActiveOperator Name</Label>
              <Input type="text" name="account"  placeholder="ActiveOperator Name" />
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

export default  connect( mapStateToProps, mapDispatchToProps)( BusAssistantModalCreate);

