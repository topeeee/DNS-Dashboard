import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {setDriversRequest} from "../../../store/actions/driverAction";
import {isLamata} from "../../../environments/constants";
import {Link} from "react-router-dom";




function mapDispatchToProps(dispatch) {
  return {
    setDriversRequest: (id, status, operator) => dispatch(setDriversRequest(id, status, operator)),
  };
}





const ApplicationDriverActionBtn = ({setDriversRequest, user}) => {

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
            <DropdownItem className='bg-success text-center p-0' onClick={()=> setDriversRequest(user.id, 'certified', user.operator)}>certify</DropdownItem>
            <DropdownItem className='bg-danger text-center p-0' onClick={()=> setDriversRequest(user.id, '0', user.operator)}>Deny</DropdownItem>
            <Link to={`/lamata/drivers/${user.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( null, mapDispatchToProps)(ApplicationDriverActionBtn);
