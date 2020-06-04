import React from 'react';
import {connect} from "react-redux"
import {toggleModeModalDelete} from "../../../store/actions/modeAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleModeModalDelete: (id) => dispatch(toggleModeModalDelete(id))
  };
}


const ModeDeleteBtn = ({ toggleModeModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=> toggleModeModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(ModeDeleteBtn);
