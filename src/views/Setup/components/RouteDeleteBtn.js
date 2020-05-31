import React from 'react';
import {connect} from "react-redux"
import {toggleRouteModalDelete} from "../../../store/actions/routeAction";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";



function mapDispatchToProps(dispatch) {
  return {
    toggleRouteModalDelete: (id) => dispatch(toggleRouteModalDelete(id))
  };
}


const RouteDeleteBtn = ({toggleRouteModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
        title="Upload via Excel"
        style={{fontSize: 20, cursor: "pointer"}}
        icon={faTimesCircle}
        onClick={()=>toggleRouteModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(RouteDeleteBtn);
