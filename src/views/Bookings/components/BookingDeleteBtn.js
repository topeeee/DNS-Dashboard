import React from 'react';
import {connect} from "react-redux"
import {toggleBookingModalDelete} from "../../../store/actions/bookingAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleBookingModalDelete: (id) => dispatch(toggleBookingModalDelete(id))
  };
}


const BookingDeleteBtn = ({toggleBookingModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=>toggleBookingModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(BookingDeleteBtn);
