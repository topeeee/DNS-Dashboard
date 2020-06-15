import React from 'react';
import {connect} from "react-redux"
import {toggleDriverRouteModalDelete} from "../../../store/actions/driverRouteAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverRouteModalDelete: (id) => dispatch(toggleDriverRouteModalDelete(id))
  };
}


const DriverRouteDeleteBtn = ({ toggleDriverRouteModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=> toggleDriverRouteModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)( DriverRouteDeleteBtn);
