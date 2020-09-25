import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeDriverStatus, getDriverVehicleId, getDriverVehicleId2,
  toggleDriverModalDelete, toggleDriverModalFlag,
  toggleDriverModalUpdate
} from "../../../store/actions/driverAction";
import {isAdmin, isLamata, isOperator} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalDelete: (id) => dispatch(toggleDriverModalDelete(id)),
    toggleDriverModalUpdate: (id) => dispatch(toggleDriverModalUpdate(id)),
    changeDriverStatus: (id, status) => dispatch(changeDriverStatus(id, status)),
    getDriverVehicleId: (id) => dispatch(getDriverVehicleId(id)),
    getDriverVehicleId2: (id) => dispatch(getDriverVehicleId2(id)),
    toggleDriverModalFlag: (id) => dispatch(toggleDriverModalFlag(id)),
  };
}

const mapStateToProps = state => ({
  approveId: state.driver.approveId,
});



const DriverActionBtn = (props) => {

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
            {/*{(isAdmin || isOperator) && <DropdownItem className='bg-info text-center p-0' onClick={()=>props.toggleDriverModalUpdate(props.id)}>Update</DropdownItem>}*/}
            {(props.user.status === "1" && isAdmin) && <DropdownItem className='bg-warning text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '0'); props.getDriverVehicleId(props.id)}}>Suspend</DropdownItem>}
            {/*{((props.user.status === "1" || props.user.status === "3") && isLamata) && <DropdownItem className='bg-warning text-center p-0' onClick={()=>{props.toggleDriverModalFlag(props.id)}}>Flag</DropdownItem>}*/}
            {(props.user.status === "0" && (isAdmin)) && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '1'); props.getDriverVehicleId2(props.id)}}>Reactivate</DropdownItem>}
            {(props.user.status === "" && isAdmin ) && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '1');props.getDriverVehicleId2(props.id)}}>Approve</DropdownItem>}
            {(props.user.status === "" && (isAdmin)) && <DropdownItem className='bg-danger text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '0'); props.getDriverVehicleId(props.id)}}>Deny</DropdownItem>}
            {isAdmin? <Link to={`/drivers/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link> :null}
            {isLamata? <Link to={`/lamata/drivers/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link> :null}
            {isOperator? <Link to={`/operator/drivers/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link> :null}
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( mapStateToProps, mapDispatchToProps)(DriverActionBtn);
