import React, { useState } from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {setRequestMe, rejectRequestMe} from "../../../store/actions/vehicleAction";



function mapDispatchToProps(dispatch) {
  return {
    setRequestMe: (id) => dispatch(setRequestMe(id)),
    rejectRequestMe: (id) => dispatch(rejectRequestMe(id)),

  };
}

const MeRequestVehicleActionBtn  = (props) => {

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
            {(props.user.approved_status === "0") && <DropdownItem className='bg-success text-center p-0' onClick={()=>props.setRequestMe(props.id)}>Accept</DropdownItem>}
            {(props.user.approved_status === "0") && <DropdownItem className='bg-danger text-center p-0' onClick={()=>props.rejectRequestMe(props.id)}>Reject</DropdownItem>}

          </DropdownMenu>
        </Dropdown>
      </div>
    );
};

export default connect(null, mapDispatchToProps)(MeRequestVehicleActionBtn);
