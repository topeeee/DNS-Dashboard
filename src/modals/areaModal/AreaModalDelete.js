import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleAreaModalDelete, deleteArea} from "../../store/actions/areaAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleAreaModalDelete: () => dispatch(toggleAreaModalDelete()),
    deleteArea: (id) => dispatch(deleteArea(id))
  };
}

const mapStateToProps = state => ({
  AreaModalDelete: state.area.AreaModalDelete,
  id: state.area.DeleteID

});

const AreaModalDelete = (props)=> {
  const {
    className,
    toggleAreaModalDelete,
    AreaModalDelete,
    id,
    deleteState
  } = props;

  const toggle = () => {toggleAreaModalDelete()};

  return (
    <div>
      <Modal isOpen={AreaModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>delete Area?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteState(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(AreaModalDelete);

