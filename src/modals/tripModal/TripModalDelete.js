import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleTripModalDelete, deleteTrip} from "../../store/actions/tripAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleTripModalDelete: () => dispatch(toggleTripModalDelete()),
    deleteTrip: (id) => dispatch(deleteTrip(id))
  };
}

const mapStateToProps = state => ({
  TripModalDelete: state.trip.TripModalDelete,
  id: state.trip.DeleteID

});

const TripModalDelete = (props)=> {
  const {
    className,
    toggleTripModalDelete,
    TripModalDelete,
    id,
    deleteTrip
  } = props;

  const toggle = () => {toggleTripModalDelete()};

  return (
    <div>
      <Modal isOpen={TripModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center" style={{fontSize: 15}}>Are you sure you want to delete this Trip?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteTrip(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(TripModalDelete);

