import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleStateModalDelete, deleteState} from "../../store/actions/stateAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleStateModalDelete: () => dispatch(toggleStateModalDelete()),
    deleteState: (id) => dispatch(deleteState(id))
  };
}

const mapStateToProps = state => ({
  StateModalDelete: state.state.StateModalDelete,
  id: state.state. DeleteID

});

const StateModalDelete = (props)=> {
  const {
    className,
    toggleStateModalDelete,
    StateModalDelete,
    id,
    deleteState
  } = props;

  const toggle = () => {toggleStateModalDelete()};

  return (
    <div>
      <Modal isOpen={StateModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>delete State?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteState(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(StateModalDelete);

