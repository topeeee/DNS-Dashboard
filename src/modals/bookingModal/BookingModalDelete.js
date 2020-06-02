import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBookingModalDelete, deleteBooking} from "../../store/actions/bookingAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleBookingModalDelete: () => dispatch(toggleBookingModalDelete()),
    deleteBooking: (id) => dispatch(deleteBooking(id))
  };
}

const mapStateToProps = state => ({
  BookingModalDelete: state.booking.BookingModalDelete,
  id: state.booking.DeleteID

});

const BookingModalDelete = (props)=> {
  const {
    className,
    toggleBookingModalDelete,
    BookingModalDelete,
    id,
    deleteBooking
  } = props;

  const toggle = () => {toggleBookingModalDelete()};

  return (
    <div>
      <Modal isOpen={BookingModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>Delete Booking?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteBooking(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(BookingModalDelete);

