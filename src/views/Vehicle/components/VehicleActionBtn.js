import React, { useState } from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {changeVehicleStatus, toggleVehicleModalDelete, toggleVehicleUpdate} from "../../../store/actions/vehicleAction";
import {isAdmin} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleVehicleModalDelete: (id) => dispatch(toggleVehicleModalDelete(id)),
    toggleVehicleUpdate: (id) => dispatch(toggleVehicleUpdate(id)),
    changeVehicleStatus: (id, status) => dispatch(changeVehicleStatus(id, status))
  };
}

const VehicleActionBtn  = (props) => {

  const [dropdownOpen, setDropdown] = useState(new Array(6).fill(false));

  const route = () =>
    (isAdmin) ? `/vehicles/${props.id}` : `/operator/vehicles/${props.id}`;

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
            {/*<DropdownItem className='bg-danger text-center p-0' onClick={()=>this.props.toggleVehicleModalDelete(this.props.id)}>Delete</DropdownItem>*/}
            <DropdownItem className='bg-info text-center p-0' onClick={()=>props.toggleVehicleUpdate(props.id)}>Update</DropdownItem>
            {(props.user.status === "1") && <DropdownItem className='bg-warning text-center p-0' onClick={()=>props.changeVehicleStatus(props.id, '0')}>Suspend</DropdownItem>}
            {(props.user.status === "0") && <DropdownItem className='bg-success text-center p-0' onClick={()=>props.changeVehicleStatus(props.id, '1')}>Reactivate</DropdownItem>}
            {(props.user.status == null) && <DropdownItem className='bg-danger text-center p-0' onClick={()=>props.changeVehicleStatus(props.id, '0')}>Deny</DropdownItem>}
            {(props.user.status === null) && <DropdownItem className='bg-success text-center p-0' onClick={()=>props.changeVehicleStatus(props.id, '1')}>Approve</DropdownItem>}
            <Link to={route} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
};

export default connect(null, mapDispatchToProps)(VehicleActionBtn);
