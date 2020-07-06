

import React, {Component, useEffect, useState} from 'react';
import {Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeDriverStatus, getDriverVehicleId, getDriverVehicleId2,
  toggleDriverModalDelete,
  toggleDriverModalUpdate
} from "../../../store/actions/driverAction";
import axios from "axios";
import api from "../../../environments/environment";
import {admin, isAdmin} from "../../../environments/constants";

const TripActionBtn = ({id}) => {

  const [dropdownOpen, setDropdown] = useState(new Array(6).fill(false));

  function toggle(i) {
    const newArray = dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    setDropdown(newArray)
  }
  const route = () =>
    (isAdmin === admin) ? `/trips/${id}` : `/operator/trips/${id}`;


  return (
    <div className="animated fadeIn">

      <Dropdown isOpen={dropdownOpen[0]} toggle={() => {
        toggle(0);
      }}>
        <DropdownToggle caret>
        </DropdownToggle>
        <DropdownMenu>
          <Link to={route} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
          {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
        </DropdownMenu>
      </Dropdown>
    </div>
  );

};

export default TripActionBtn;
