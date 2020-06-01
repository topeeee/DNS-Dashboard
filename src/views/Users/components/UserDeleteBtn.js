import React from 'react';
import {connect} from "react-redux"
import {toggleUserModalDelete} from "../../../store/actions/userAction";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



function mapDispatchToProps(dispatch) {
  return {
    toggleUserModalDelete: (id) => dispatch(toggleUserModalDelete(id))
  };
}


const UserDeleteBtn = ({toggleUserModalDelete, id})=> {
  return (
    <div>
      <FontAwesomeIcon
        className="text-danger"
                       title="Upload via Excel"
                       style={{fontSize: 20, cursor: "pointer"}}
                       icon={faTimesCircle}
                       onClick={()=>toggleUserModalDelete(id)} />
    </div>
  )

};

export default connect(null, mapDispatchToProps)(UserDeleteBtn);
