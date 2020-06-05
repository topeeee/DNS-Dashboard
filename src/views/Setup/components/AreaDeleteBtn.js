import React from 'react';
import {connect} from "react-redux"
import {toggleAreaModalDelete} from "../../../store/actions/areaAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleAreaModalDelete: (id) => dispatch(toggleAreaModalDelete(id))
  };
}


const AreaDeleteBtn = ({ toggleAreaModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=> toggleAreaModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(AreaDeleteBtn);
