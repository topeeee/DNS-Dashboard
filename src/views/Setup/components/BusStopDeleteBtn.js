import React from 'react';
import {connect} from "react-redux"
import {toggleBusStopModalDelete} from "../../../store/actions/busStopAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleBusStopModalDelete: (id) => dispatch(toggleBusStopModalDelete(id))
  };
}


const BusStopDeleteBtn = ({toggleBusStopModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=>toggleBusStopModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(BusStopDeleteBtn);
