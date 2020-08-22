import React from 'react';
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
import {toggleLamataModeModalCreate, toggleModeModalCreate} from "../../../store/actions/modeAction";
import {isAdmin, isLamata} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleModeModalCreate: () => dispatch(toggleModeModalCreate()),
    toggleLamataModeModalCreate: () => dispatch(toggleLamataModeModalCreate())
  };
}


const ModeHeader = ({ toggleModeModalCreate, toggleLamataModeModalCreate})=> {
  return (
    <div className="text-right w-75">
      {isLamata &&  <button className="btn btn-instagram float-right" onClick={()=> toggleLamataModeModalCreate() }>Create</button>}
      {isAdmin &&   <button className="btn btn-instagram float-right" onClick={()=> toggleModeModalCreate() }>Create</button>}
      <FontAwesomeIcon className="text-primary float-right py-2" title="Upload via Excel" style={{fontSize: 40, cursor: "pointer"}} icon={faFileExcel} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(ModeHeader);
