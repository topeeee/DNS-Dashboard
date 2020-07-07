import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {Link} from "react-router-dom";
import {isAdmin} from "../../../environments/constants";

const TripActionBtn = ({id}) => {

  const [dropdownOpen, setDropdown] = useState(new Array(6).fill(false));

  function toggle(i) {
    const newArray = dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    setDropdown(newArray)
  }
  const route = () =>
    (isAdmin) ? `/trips/${id}` : `/operator/trips/${id}`;


  return (
    <div className="animated fadeIn">

      <Dropdown isOpen={dropdownOpen[0]} toggle={() => {
        toggle(0);
      }}>
        <DropdownToggle caret>
        </DropdownToggle>
        <DropdownMenu>
          <Link to={route} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );

};

export default TripActionBtn;
