import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusStopModalDelete, deleteBusStop} from "../../store/actions/busStopAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleBusStopModalDelete: () => dispatch(toggleBusStopModalDelete()),
    deleteBusStop: (id) => dispatch(deleteBusStop(id))
  };
}

const mapStateToProps = state => ({
  BusStopModalDelete: state.busStop.BusStopModalDelete,
  id: state.busStop.DeleteID

});

const BusStopModalDelete = (props)=> {
  const {
    className,
    toggleBusStopModalDelete,
    BusStopModalDelete,
    id,
    deleteBusStop
  } = props;

  const toggle = () => {toggleBusStopModalDelete()};

  return (
    <div>
      <Modal isOpen={BusStopModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center" style={{fontSize: 15}}>Are you sure you want to delete this Bus Stop?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteBusStop(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(BusStopModalDelete);

