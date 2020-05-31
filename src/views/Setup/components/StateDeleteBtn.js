import React from 'react';
import {connect} from "react-redux"
import {toggleStateModalDelete} from "../../../store/actions/stateAction";
import {Button} from "reactstrap";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function mapDispatchToProps(dispatch) {
  return {
    toggleStateModalDelete: (id) => dispatch(toggleStateModalDelete(id))
  };
}


const StateDeleteBtn = ({toggleStateModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
        title="Upload via Excel"
        style={{fontSize: 20, cursor: "pointer"}}
        icon={faTimesCircle}
        onClick={()=>toggleStateModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(StateDeleteBtn);
