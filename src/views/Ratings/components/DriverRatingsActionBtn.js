import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeDriverStatus, getDriverVehicleId, getDriverVehicleId2,
  toggleDriverModalDelete, toggleDriverModalFlag,
  toggleDriverModalUpdate
} from "../../../store/actions/driverAction";
// import {isAdmin, isLamata, isOperator} from "../../../environments/constants";



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



const DriverRatingsActionBtn = (props) => {

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
            <Link to={`/lamata/driverratings/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( mapStateToProps, mapDispatchToProps)(DriverRatingsActionBtn);
