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


import React, { Component } from 'react';
import {Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {changeOperatorStatus, toggleOperatorModalDelete, toggleOperatorModalUpdate} from "../../../../store/actions/operatorAction";
import {Link} from "react-router-dom";



function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalDelete: (id) => dispatch(toggleOperatorModalDelete(id)),
    toggleOperatorModalUpdate: (id) => dispatch(toggleOperatorModalUpdate(id)),
    changeOperatorStatus: (id, status) => dispatch(changeOperatorStatus(id, status))
  };
}

class OperatorActionBtn extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">

        <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
          this.toggle(0);
        }}>
          <DropdownToggle caret>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem className='bg-danger text-center p-0' onClick={()=>this.props.toggleOperatorModalDelete(this.props.id)}>Delete</DropdownItem>
            <DropdownItem className='bg-info text-center p-0' onClick={()=>this.props.toggleOperatorModalUpdate(this.props.id)}>Update</DropdownItem>
            {(this.props.user.status == 1) && <DropdownItem className='bg-warning text-center p-0' onClick={()=>this.props.changeOperatorStatus(this.props.id, '0')}>Suspend</DropdownItem>}
            {(this.props.user.status == 0) && <DropdownItem className='bg-success text-center p-0' onClick={()=>this.props.changeOperatorStatus(this.props.id, '1')}>Reactivate</DropdownItem>}
            <Link to={`/operators/${this.props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(OperatorActionBtn);
