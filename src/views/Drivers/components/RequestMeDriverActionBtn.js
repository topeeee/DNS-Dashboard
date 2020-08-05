import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {setDriversRequest} from "../../../store/actions/driverAction";
import {OperatorName} from "../../../environments/constants";




function mapDispatchToProps(dispatch) {
  return {
    setDriversRequest: (id, status, operator) => dispatch(setDriversRequest(id, status, operator)),
  };
}





const RequestMeDriverActionBtn = ({setDriversRequest, id}) => {

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
            <DropdownItem className='bg-success text-center p-0' onClick={()=> setDriversRequest(id, 1, OperatorName)}>Accept</DropdownItem>
             <DropdownItem className='bg-warning text-center p-0' onClick={()=>setDriversRequest(id, 0, "All")}>Reject</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( null, mapDispatchToProps)(RequestMeDriverActionBtn);
