import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeDriverStatus, getDriverVehicleId, getDriverVehicleId2,
  toggleDriverModalDelete, toggleDriverModalFlag, toggleDriverModalFlagDetails,
  toggleDriverModalUpdate
} from "../../../store/actions/driverAction";
import {isAdmin, isLamata, isOperator} from "../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalFlagDetails: (id) => dispatch(toggleDriverModalFlagDetails(id)),
  };
}

const mapStateToProps = state => ({
  approveId: state.driver.approveId,
});



const FlaggedDriverActionBtn = (props) => {

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
            {((props.user.status === "3") && isLamata) && <DropdownItem className='bg-warning text-center p-0' onClick={()=>{props.toggleDriverModalFlagDetails(props.id)}}>Reason(s) for Flagging</DropdownItem>}
            {isAdmin? <Link to={`/drivers/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link> :null}
            {isLamata? <Link to={`/lamata/drivers/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link> :null}
            {isOperator? <Link to={`/operator/drivers/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link> :null}
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( mapStateToProps, mapDispatchToProps)(FlaggedDriverActionBtn);
