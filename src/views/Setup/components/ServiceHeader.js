import React from 'react';
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
import {toggleLamataServiceModalCreate, toggleServiceModalCreate} from "../../../store/actions/serviceAction";
import {isAdmin, isLamata} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleServiceModalCreate: () => dispatch(toggleServiceModalCreate()),
    toggleLamataServiceModalCreate: () => dispatch(toggleLamataServiceModalCreate())
  };
}


const ServiceHeader = ({toggleServiceModalCreate, toggleLamataServiceModalCreate})=> {
  return (
    <div className="text-right w-75">
      {isLamata && <button className="btn btn-instagram float-right" onClick={()=> toggleLamataServiceModalCreate()}>Create</button>}
      {isAdmin &&  <button className="btn btn-instagram float-right" onClick={()=>toggleServiceModalCreate() }>Create</button>}
      <FontAwesomeIcon className="text-primary float-right py-2" title="Upload via Excel" style={{fontSize: 40, cursor: "pointer"}} icon={faFileExcel} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(ServiceHeader);
