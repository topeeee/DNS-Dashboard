import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleModeModalDelete, deleteMode} from "../../store/actions/modeAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleModeModalDelete: () => dispatch(toggleModeModalDelete()),
    deleteMode: (id) => dispatch(deleteMode(id))
  };
}

const mapStateToProps = state => ({
  ModeModalDelete: state.mode.ModeModalDelete,
  id: state.mode.DeleteID

});

const ModeModalDelete = (props)=> {
  const {
    className,
    toggleModeModalDelete,
    ModeModalDelete,
    id,
    deleteMode
  } = props;

  const toggle = () => {toggleModeModalDelete()};

  return (
    <div>
      <Modal isOpen={ModeModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>Delete Mode?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteMode(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(ModeModalDelete);

