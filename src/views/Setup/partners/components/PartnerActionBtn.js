import React, { Component } from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {changePartnerStatus, togglePartnerModalUpdate} from "../../../../store/actions/partnerAction";



function mapDispatchToProps(dispatch) {
  return {
    togglePartnerModalUpdate: (id) => dispatch(togglePartnerModalUpdate(id)),
    changePartnerStatus: (id, status) => dispatch(changePartnerStatus(id, status))
  };
}

class PartnerActionBtn extends Component {
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
            {/*<DropdownItem className='bg-danger text-center p-0' onClick={()=>this.props.toggleOperatorModalDelete(this.props.id)}>Delete</DropdownItem>*/}
            <DropdownItem className='bg-info text-center p-0' onClick={()=>this.props.togglePartnerModalUpdate(this.props.id)}>Update</DropdownItem>
            {(this.props.user.status == 1) && <DropdownItem className='bg-warning text-center p-0' onClick={()=>this.props.changePartnerStatus(this.props.id, '0')}>Suspend</DropdownItem>}
            {(this.props.user.status == 0) && <DropdownItem className='bg-success text-center p-0' onClick={()=>this.props.changePartnerStatus(this.props.id, '1')}>Reactivate</DropdownItem>}
            {/*<Link to={`/operators/${this.props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>*/}
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PartnerActionBtn);
