import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card, CardBody, Col
} from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverModalDelete} from "../../store/actions/driverAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalDelete: () => dispatch(toggleDriverModalDelete())
  };
}

const mapStateToProps = state => ({
  DriverModalDelete : state.drivers.DriverModalDelete,

});

const DriverModalDelete = (props)=> {
  const {
    buttonLabel,
    className,
    toggleDriverModalDelete,
    DriverModalDelete
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {toggleDriverModalDelete()};

  return (
    <div>
      <Modal isOpen={DriverModalDelete} toggle={toggle} className={className}>

        <div className="bg-dark p-4">
          <div className="text-center" style={{fontSize: 15}}>Are you sure you want to delete this Driver?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn btn-warning">Continue</Button>
          </div>

        </div>

      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverModalDelete);

