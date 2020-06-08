// import React from 'react';
// import {connect} from "react-redux"
// import {toggleBusStopModalDelete} from "../../../store/actions/busStopAction";
// import {Button} from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
//
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     toggleBusStopModalDelete: (id) => dispatch(toggleBusStopModalDelete(id))
//   };
// }
//
//
// const BusStopDeleteBtn = ({toggleBusStopModalDelete, id})=> {
//   return (
//     <div>
//       <FontAwesomeIcon
//         className="text-danger"
//                        title="Upload via Excel"
//                        style={{fontSize: 20, cursor: "pointer"}}
//                        icon={faTimesCircle}
//                        onClick={()=>toggleBusStopModalDelete(id)} />
//     </div>
//   )
//
// };
//
// export default connect(null, mapDispatchToProps)(BusStopDeleteBtn);



import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {connect} from "react-redux"
import {toggleBusStopModalDelete} from "../../../store/actions/busStopAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleBusStopModalDelete: (id) => dispatch(toggleBusStopModalDelete(id))
  };
}

class BusStopDeleteBtn extends Component {
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
            <DropdownItem className='bg-danger text-center' onClick={()=>this.props.toggleBusStopModalDelete(this.props.id)}>Delete</DropdownItem>
            <DropdownItem className='bg-info text-center'>Update</DropdownItem>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(BusStopDeleteBtn);
