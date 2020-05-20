import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusAssistantModalDelete} from "../../store/actions/busAssistantAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantModalDelete: () => dispatch(toggleBusAssistantModalDelete())
  };
}

const mapStateToProps = state => ({
  busAssistantModalDelete: state.busAssistants.BusAssistantModalDelete,

});

const BusAssistantModalDelete = (props)=> {
  const {
    className,
    toggleBusAssistantModalDelete,
    busAssistantModalDelete
  } = props;

  const toggle = () => {toggleBusAssistantModalDelete()};

  return (
    <div>
      <Modal isOpen={busAssistantModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center" style={{fontSize: 15}}>Are you sure you want to delete this Bus Assistant?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn btn-warning">Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(BusAssistantModalDelete);

