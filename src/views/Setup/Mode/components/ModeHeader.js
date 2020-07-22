import React from 'react';
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
// import {toggleModeModalCreate} from "../../../store/actions/modeAction";



// function mapDispatchToProps(dispatch) {
//   return {
//     toggleModeModalCreate: () => dispatch(toggleModeModalCreate())
//   };
// }


const ModeHeader = ({ toggleModeModalCreate})=> {
  return (
    <div className="text-right w-75">
      <button className="btn btn-instagram float-right">Create</button>
      <FontAwesomeIcon className="text-primary float-right py-2" title="Upload via Excel" style={{fontSize: 40, cursor: "pointer"}} icon={faFileExcel} />
    </div>
  )

};

export default ModeHeader;
