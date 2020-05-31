import React from 'react';
import {connect} from "react-redux"
import {toggleZoneModalDelete} from "../../../store/actions/zoneAction";
import {Button} from "reactstrap";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function mapDispatchToProps(dispatch) {
  return {
    toggleZoneModalDelete: (id) => dispatch(toggleZoneModalDelete(id))
  };
}


const ZoneDeleteBtn = ({toggleZoneModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
        title="Upload via Excel"
        style={{fontSize: 20, cursor: "pointer"}}
        icon={faTimesCircle}
        onClick={()=>toggleZoneModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(ZoneDeleteBtn);
