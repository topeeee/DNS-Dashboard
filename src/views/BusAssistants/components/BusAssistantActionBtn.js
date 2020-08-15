import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeBusAssistants,
  toggleBusAssistantsModalUpdate
} from "../../../store/actions/busAssistantAction";
import {isAdmin, isLamata, isOperator} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantsModalUpdate: (id) => dispatch(toggleBusAssistantsModalUpdate(id)),
    changeBusAssistants: (id, status) => dispatch(changeBusAssistants(id, status)),
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

  return (
      <div className="animated fadeIn">

        <Dropdown isOpen={dropdownOpen[0]} toggle={() => {
          toggle(0);
        }}>
          <DropdownToggle caret>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem className='bg-info text-center p-0' onClick={()=>props.toggleBusAssistantsModalUpdate(props.id)}>Update</DropdownItem>
            {(props.user.status === "1") && <DropdownItem className='bg-warning text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '0');}}>Suspend</DropdownItem>}
            {(props.user.status === "0") && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '1');}}>Reactivate</DropdownItem>}
            {(props.user.status === "") && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '1');}}>Approve</DropdownItem>}
            {(props.user.status === "") && <DropdownItem className='bg-danger text-center p-0' onClick={()=>{props.changeBusAssistants(props.id, '0');}}>Deny</DropdownItem>}
            {isAdmin && <Link to={`/operationassisstants/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>}
            {isOperator && <Link to={`/operator/operationassisstants/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>}
            {isLamata && <Link to={`/lamata/operationassisstants/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>}
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( mapStateToProps, mapDispatchToProps)(BusAssistantActionBtn);
