import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleOperatorModalDelete, deleteOperator} from "../../store/actions/operatorAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalDelete: () => dispatch(toggleOperatorModalDelete()),
    deleteOperator: (id) => dispatch(deleteOperator(id))
  };
}

const mapStateToProps = state => ({
  OperatorModalDelete: state.operator.OperatorModalDelete,
  id: state.operator. DeleteID

});

const OperatorModalDelete = (props)=> {
  const {
    className,
    toggleOperatorModalDelete,
    OperatorModalDelete,
    id,
    deleteOperator
  } = props;

  const toggle = () => {toggleOperatorModalDelete()};

  return (
    <div>
      <Modal isOpen={OperatorModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>delete operator?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteOperator(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(OperatorModalDelete);

