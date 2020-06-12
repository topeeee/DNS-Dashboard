// import React from 'react';
// import {connect} from "react-redux"
// import {toggleAreaModalDelete} from "../../../store/actions/areaAction";
// import {Button} from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
//
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     toggleAreaModalDelete: (id) => dispatch(toggleAreaModalDelete(id))
//   };
// }
//
//
// const AreaDeleteBtn = ({ toggleAreaModalDelete, id})=> {
//   return (
//     <div>
//       <FontAwesomeIcon
//         className="text-danger"
//                        title="Upload via Excel"
//                        style={{fontSize: 20, cursor: "pointer"}}
//                        icon={faTimesCircle}
//                        onClick={()=> toggleAreaModalDelete(id)} />
//     </div>
//   )
//
// };
//
// export default connect(null, mapDispatchToProps)(AreaDeleteBtn);


import React, {Component, useEffect, useState} from 'react';
import {Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import axios from "axios";
import api from "../../../environments/environment";
import {changeUserStatus} from "../../../store/actions/userAction";



function mapDispatchToProps(dispatch) {
  return {
    changeUserStatus: (id, status) => dispatch(changeUserStatus(id, status)),
  };
}



const UserActionBtn = (props) => {

      const [dropdownOpen, setDropdown] = useState(new Array(6).fill(false));

 function toggle(i) {
    const newArray = dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    setDropdown(newArray)
 }


    return (
      <div className="animated fadeIn">

        <Dropdown isOpen={dropdownOpen[0]} toggle={() => {
          toggle(0);
        }}>
          <DropdownToggle caret>
          </DropdownToggle>
          <DropdownMenu>
            {(props.user.status === "1") && <DropdownItem className='bg-warning text-center p-0' onClick={()=>props.changeUserStatus(props.id, '0')}>Suspend</DropdownItem>}
            {(props.user.status === "0") && <DropdownItem className='bg-success text-center p-0' onClick={()=>props.changeUserStatus(props.id, '1')}>Reactivate</DropdownItem>}
            <Link to={`/users/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( null, mapDispatchToProps)(UserActionBtn);
