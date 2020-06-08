import React from 'react';
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
import {toggleBusAssistantModalCreate} from "../../../store/actions/busAssistantAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantModalCreate: () => dispatch(toggleBusAssistantModalCreate())
  };
}


const BusAssistantHeader = ({toggleBusAssistantModalCreate})=> {
  return (
    <div className="text-right w-75">
      <button className="btn btn-instagram float-right" onClick={()=>toggleBusAssistantModalCreate() }>Create</button>
      <FontAwesomeIcon className="text-primary float-right py-2" title="Upload via Excel" style={{fontSize: 40, cursor: "pointer"}} icon={faFileExcel} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(BusAssistantHeader);
