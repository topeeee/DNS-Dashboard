import React from 'react';
import {connect} from "react-redux"
import {toggleDriverModalDelete} from "../../../store/actions/driverAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalDelete: (id) => dispatch(toggleDriverModalDelete(id))
  };
}


const DriverDeleteBtn = ({ toggleDriverModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=> toggleDriverModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(DriverDeleteBtn);
