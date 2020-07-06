


import React, {Component, useEffect, useState} from 'react';
import {Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeBusAssistants, getBusAssistantsVehicleId, getBusAssistantsVehicleId2,
  toggleBusAssistantsModalUpdate
} from "../../../store/actions/busAssistantAction";
import axios from "axios";
import api from "../../../environments/environment";
import {admin, isAdmin} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantsModalUpdate: (id) => dispatch(toggleBusAssistantsModalUpdate(id)),
    changeBusAssistants: (id, status) => dispatch(changeBusAssistants(id, status)),
    getBusAssistantsVehicleId: (id) => dispatch(getBusAssistantsVehicleId(id)),
    getBusAssistantsVehicleId2: (id) => dispatch(getBusAssistantsVehicleId2(id)),
  };
}

const mapStateToProps = state => ({
  approveId: state.driver.approveId,
});

const BusAssistantActionBtn = (props) => {

      const [dropdownOpen, setDropdown] = useState(new Array(6).fill(false));

 function toggle(i) {
    const newArray = dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    setDropdown(newArray)
 }

  const route = () =>
    (isAdmin === admin) ? `/busassisstants/${props.id}` : `/operator/busassisstants/${props.id}`;


  return (
      <div className="animated fadeIn">

        <Dropdown isOpen={dropdownOpen[0]} toggle={() => {
          toggle(0);
        }}>
          <DropdownToggle caret>
          </DropdownToggle>
          <DropdownMenu>
            {/*<DropdownItem className='bg-danger text-center p-0' onClick={()=>this.props.toggleOperatorModalDelete(this.props.id)}>Delete</DropdownItem>*/}
            <DropdownItem className='bg-info text-center p-0' onClick={()=>props.toggleBusAssistantsModalUpdate(props.id)}>Update</DropdownItem>
            {(props.user.status === "1") && <DropdownItem className='bg-warning text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '0');props.getBusAssistantsVehicleId(props.id)}}>Suspend</DropdownItem>}
            {(props.user.status === "0") && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '1');props.getBusAssistantsVehicleId2(props.id)}}>Reactivate</DropdownItem>}
            {(props.user.status === "") && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '1');props.getBusAssistantsVehicleId2(props.id)}}>Approve</DropdownItem>}
            {(props.user.status === "") && <DropdownItem className='bg-danger text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '0');props.getBusAssistantsVehicleId(props.id)}}>Deny</DropdownItem>}

            <Link to={route} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( mapStateToProps, mapDispatchToProps)(BusAssistantActionBtn);
