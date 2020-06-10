// import React from 'react';
// import {connect} from "react-redux"
// import {toggleAreaModalDelete} from "../../../store/actions/areaAction";
// import {Button} from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
//
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     toggleAreaModalDelete: (id) => dispatch(toggleAreaModalDelete(id))
//   };
// }
//
//
// const AreaDeleteBtn = ({ toggleAreaModalDelete, id})=> {
//   return (
//     <div>
//       <FontAwesomeIcon
//         className="text-danger"
//                        title="Upload via Excel"
//                        style={{fontSize: 20, cursor: "pointer"}}
//                        icon={faTimesCircle}
//                        onClick={()=> toggleAreaModalDelete(id)} />
//     </div>
//   )
//
// };
//
// export default connect(null, mapDispatchToProps)(AreaDeleteBtn);


import React, {Component, useEffect, useState} from 'react';
import {Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {
  changeDriverStatus, getDriverVehicleId, getDriverVehicleId2,
  toggleDriverModalDelete,
  toggleDriverModalUpdate
} from "../../../store/actions/driverAction";
import axios from "axios";
import api from "../../../environments/environment";



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
            {/*<DropdownItem className='bg-danger text-center p-0' onClick={()=>this.props.toggleOperatorModalDelete(this.props.id)}>Delete</DropdownItem>*/}
            <DropdownItem className='bg-info text-center p-0' onClick={()=>props.toggleDriverModalUpdate(props.id)}>Update</DropdownItem>
            {(props.user.status === "1") && <DropdownItem className='bg-warning text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '0'); props.getDriverVehicleId(props.id)}}>Suspend</DropdownItem>}
            {(props.user.status === "0") && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '1'); props.getDriverVehicleId2(props.id)}}>Reactivate</DropdownItem>}
            {(props.user.status === "") && <DropdownItem className='bg-success text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '1')}}>Approve</DropdownItem>}
            {(props.user.status === "") && <DropdownItem className='bg-danger text-center p-0' onClick={()=>{props.changeDriverStatus(props.id, '0')}}>Deny</DropdownItem>}

            <Link to={`/drivers/${props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );

};

export default connect( mapStateToProps, mapDispatchToProps)(DriverActionBtn);
