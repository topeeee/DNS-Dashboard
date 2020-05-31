import React from 'react';
import {connect} from "react-redux"
import {toggleTripModalDelete} from "../../../store/actions/tripAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleTripModalDelete: (id) => dispatch(toggleTripModalDelete(id))
  };
}


const TripDeleteBtn = ({toggleTripModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=>toggleTripModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(TripDeleteBtn);
