import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverModalDelete, deleteDriver} from "../../store/actions/driverAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalDelete: () => dispatch(toggleDriverModalDelete()),
    deleteDriver: (id) => dispatch(deleteDriver(id))
  };
}

const mapStateToProps = state => ({
  DriverModalDelete: state.driver.DriverModalDelete,
  id: state.driver.DeleteID

});

const DriverModalDelete = (props)=> {
  const {
    className,
    toggleDriverModalDelete,
    DriverModalDelete,
    id,
    deleteDriver
  } = props;

  const toggle = () => {toggleDriverModalDelete()};

  return (
    <div>
      <Modal isOpen={DriverModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>Delete Driver?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteDriver(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverModalDelete);

