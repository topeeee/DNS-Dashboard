import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeDriverStatus, getDriverVehicleId, getDriverVehicleId2,
  toggleDriverModalDelete,
  toggleDriverModalUpdate
} from "../../../store/actions/driverAction";
import {isAdmin} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalDelete: (id) => dispatch(toggleDriverModalDelete(id)),
    toggleDriverModalUpdate: (id) => dispatch(toggleDriverModalUpdate(id)),
    changeDriverStatus: (id, status) => dispatch(changeDriverStatus(id, status)),
    getDriverVehicleId: (id) => dispatch(getDriverVehicleId(id)),
    getDriverVehicleId2: (id) => dispatch(getDriverVehicleId2(id)),
  };
}

const mapStateToProps = state => ({
  approveId: state.driver.approveId,
});



const DriverActionBtn = (props) => {
  const route = () =>
    (isAdmin) ? `/drivers/${props.id}` : `/operator/drivers/${props.id}`;

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
            <DropdownItem className='bg-info text-center p-0' onClick={()=>props.toggleDriverModalUpdate(props.id)}>Update</DropdownItem>
            {(props.user.status === "1" && isAdmin) && <DropdownItem className='bg-warning text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '0'); props.getDriverVehicleId(props.id)}}>Suspend</DropdownItem>}
            {(props.user.status === "0" && isAdmin) && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '1'); props.getDriverVehicleId2(props.id)}}>Reactivate</DropdownItem>}
            {(props.user.status === "" && isAdmin) && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '1');props.getDriverVehicleId2(props.id)}}>Approve</DropdownItem>}
            {(props.user.status === "" && isAdmin) && <DropdownItem className='bg-danger text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '0'); props.getDriverVehicleId(props.id)}}>Deny</DropdownItem>}

            <Link to={route} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( mapStateToProps, mapDispatchToProps)(DriverActionBtn);
