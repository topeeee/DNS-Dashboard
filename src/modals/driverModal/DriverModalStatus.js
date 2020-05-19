import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverModalStatus} from "../../store/actions/driverAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalStatus: () => dispatch(toggleDriverModalStatus())
  };
}

const mapStateToProps = state => ({
  driverModalStatus: state.drivers.DriverModalStatus,

});

const DriverModalStatus = (props) => {
  const {
    className,
    driverModalStatus,
    toggleDriverModalStatus
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {toggleDriverModalStatus()};

  return (
    <div>
      <Modal isOpen={driverModalStatus} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center text-info">Change Status</ModalHeader>
        <ModalBody>
          <div className="box cus-status">
            <input type="radio" id="radio1" name="radio1"/>
            <label htmlFor="radio1">Active</label>

            <input type="radio" id="radio2" name="radio1"/>
            <label htmlFor="radio2">Inactive</label>

            <input type="radio" id="radio3" name="radio1"/>
            <label htmlFor="radio3">Pending</label>


          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverModalStatus);

