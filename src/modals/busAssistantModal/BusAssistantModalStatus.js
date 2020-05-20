import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusAssistantModalStatus} from "../../store/actions/busAssistantAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantModalStatus: () => dispatch(toggleBusAssistantModalStatus())
  };
}

const mapStateToProps = state => ({
  busAssistantModalStatus: state.busAssistants.BusAssistantModalStatus,

});

const BusAssistantModalStatus = (props) => {
  const {
    className,
    busAssistantModalStatus,
    toggleBusAssistantModalStatus
  } = props;

  const toggle = () => {toggleBusAssistantModalStatus()};
  return (
    <div>
      <Modal isOpen={busAssistantModalStatus} toggle={toggle} className={className}>
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

export default  connect( mapStateToProps, mapDispatchToProps)(BusAssistantModalStatus);

