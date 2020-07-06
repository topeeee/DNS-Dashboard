

import React, {Component, useEffect, useState} from 'react';
import {Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import axios from "axios";
import api from "../../../environments/environment";
import {changeUserStatus} from "../../../store/actions/userAction";
import {admin, isAdmin} from "../../../environments/constants";



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
  const route = () =>
    (isAdmin === admin) ? `/users/${props.id}` : `/operator/passenger/${props.id}`;


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
            <Link to={route} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( null, mapDispatchToProps)(UserActionBtn);
