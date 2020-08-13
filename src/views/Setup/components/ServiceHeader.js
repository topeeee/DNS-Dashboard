import React from 'react';
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
import {toggleServiceModalCreate} from "../../../store/actions/serviceAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleServiceModalCreate: () => dispatch(toggleServiceModalCreate())
  };
}


const ServiceHeader = ({toggleServiceModalCreate})=> {
  return (
    <div className="text-right w-75">
      <button className="btn btn-instagram float-right" onClick={()=>toggleServiceModalCreate() }>Create</button>
      <FontAwesomeIcon className="text-primary float-right py-2" title="Upload via Excel" style={{fontSize: 40, cursor: "pointer"}} icon={faFileExcel} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(ServiceHeader);
