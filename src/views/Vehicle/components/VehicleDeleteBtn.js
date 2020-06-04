import React from 'react';
import {connect} from "react-redux"
import {toggleVehicleModalDelete} from "../../../store/actions/vehicleAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleVehicleModalDelete: (id) => dispatch(toggleVehicleModalDelete(id))
  };
}


const VehicleDeleteBtn = ({toggleVehicleModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=>toggleVehicleModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(VehicleDeleteBtn);
