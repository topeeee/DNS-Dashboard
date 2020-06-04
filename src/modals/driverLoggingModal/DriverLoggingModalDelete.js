import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverLoggingModalDelete, deleteDriverLogging} from "../../store/actions/driverLoggingAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleDriverLoggingModalDelete: () => dispatch(toggleDriverLoggingModalDelete()),
    deleteDriverLogging: (id) => dispatch(deleteDriverLogging(id))
  };
}

const mapStateToProps = state => ({
  DriverLoggingModalDelete: state.driverLogging.DriverLoggingModalDelete,
  id: state.driverLogging.DeleteID

});

const DriverLoggingModalDelete = (props)=> {
  const {
    className,
    toggleDriverLoggingModalDelete,
    DriverLoggingModalDelete,
    id,
    deleteDriverLogging
  } = props;

  const toggle = () => {toggleDriverLoggingModalDelete()};

  return (
    <div>
      <Modal isOpen={DriverLoggingModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>Delete DriverLogging?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=> deleteDriverLogging(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverLoggingModalDelete);

