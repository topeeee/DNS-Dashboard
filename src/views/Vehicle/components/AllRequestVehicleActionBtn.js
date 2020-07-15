import React, { useState } from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {RequestAll} from "../../../store/actions/vehicleAction";



function mapDispatchToProps(dispatch) {
  return {
    RequestAll: (id) => dispatch(RequestAll(id)),
  };
}

const AllRequestVehicleActionBtn  = (props) => {

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
            {(props.user.approved_status === "0") && <DropdownItem className='bg-success text-center p-0' onClick={()=>props.RequestAll(props.id)}>Accept</DropdownItem>}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
};

export default connect(null, mapDispatchToProps)(AllRequestVehicleActionBtn);
