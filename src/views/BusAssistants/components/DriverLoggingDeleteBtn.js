import React from 'react';
import {connect} from "react-redux"
import {toggleDriverLoggingModalDelete} from "../../../store/actions/driverLoggingAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverLoggingModalDelete: (id) => dispatch(toggleDriverLoggingModalDelete(id))
  };
}


const DriverLoggingDeleteBtn = ({ toggleDriverLoggingModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=> toggleDriverLoggingModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(DriverLoggingDeleteBtn);
