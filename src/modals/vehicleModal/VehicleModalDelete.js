import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleVehicleModalDelete, deleteVehicle} from "../../store/actions/vehicleAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleVehicleModalDelete: () => dispatch(toggleVehicleModalDelete()),
    deleteVehicle: (id) => dispatch(deleteVehicle(id))
  };
}

const mapStateToProps = state => ({
  VehicleModalDelete: state.vehicle.VehicleModalDelete,
  id: state.vehicle.DeleteID

});

const VehicleModalDelete = (props)=> {
  const {
    className,
    toggleVehicleModalDelete,
    VehicleModalDelete,
    id,
    deleteVehicle
  } = props;

  const toggle = () => {toggleVehicleModalDelete()};

  return (
    <div>
      <Modal isOpen={VehicleModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>Delete Vehicle?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteVehicle(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(VehicleModalDelete);

