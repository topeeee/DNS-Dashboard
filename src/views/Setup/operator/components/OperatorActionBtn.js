import React, { Component } from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {connect} from "react-redux"
import {toggleOperatorModalReactivate, toggleOperatorModalSuspend, toggleOperatorModalUpdate} from "../../../../store/actions/operatorAction";
import {Link} from "react-router-dom";
import {isAdmin} from "../../../../environments/constants";



function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalUpdate: (id) => dispatch(toggleOperatorModalUpdate(id)),
    toggleOperatorModalSuspend: (id) => dispatch(toggleOperatorModalSuspend(id)),
    toggleOperatorModalReactivate: (id) => dispatch(toggleOperatorModalReactivate(id)),
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
            {/*<DropdownItem className='bg-danger text-center p-0' onClick={()=>this.props.toggleOperatorModalDelete(this.props.id)}>Delete</DropdownItem>*/}
            <DropdownItem className='bg-info text-center p-0' onClick={()=>this.props.toggleOperatorModalUpdate(this.props.id)}>Update</DropdownItem>
            {(this.props.user.status == 1) && <DropdownItem className='bg-warning text-center p-0' onClick={()=>this.props.toggleOperatorModalSuspend(this.props.id)}>Suspend</DropdownItem>}
            {(this.props.user.status == 0) && <DropdownItem className='bg-success text-center p-0' onClick={()=>this.props.toggleOperatorModalReactivate(this.props.id)}>Reactivate</DropdownItem>}
            <Link to={isAdmin? `/operators/${this.props.id}`: `/lamata/operators/${this.props.id}`} style={{textDecoration: "none"}}><DropdownItem className='bg-primary text-center p-0'>View</DropdownItem></Link>
            {/*<DropdownItem className='bg-warning text-center' onClick={()=>this.props.toggleBusAssistantModalStatus()}>Change Status</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(OperatorActionBtn);
