import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import {connect} from "react-redux"
import {toggleDriverModalDelete,toggleDriverModalUpdate, toggleDriverModalStatus} from "../../../store/actions/driverAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalDelete: () => dispatch(toggleDriverModalDelete()),
    toggleDriverModalUpdate: () => dispatch(toggleDriverModalUpdate()),
    toggleDriverModalStatus: () => dispatch(toggleDriverModalStatus())
  };
}

class DriverDropDown extends Component {
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
            <DropdownItem className='bg-danger text-center' onClick={()=>this.props.toggleDriverModalDelete()}>Delete</DropdownItem>
            <DropdownItem className='bg-info text-center' onClick={()=>this.props.toggleDriverModalUpdate()}>Update</DropdownItem>
            <DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleDriverModalStatus()}>Change Status</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(DriverDropDown);
