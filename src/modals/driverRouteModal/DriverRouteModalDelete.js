import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverRouteModalDelete, deleteDriverRoute} from "../../store/actions/driverRouteAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleDriverRouteModalDelete: () => dispatch(toggleDriverRouteModalDelete()),
    deleteDriverRoute: (id) => dispatch(deleteDriverRoute(id))
  };
}

const mapStateToProps = state => ({
  driverRouteModalDelete: state.driverRoute.DriverRouteModalDelete,
  id: state.driverRoute.DeleteID

});

const DriverRouteModalDelete = (props)=> {
  const {
    className,
    toggleDriverRouteModalDelete,
    deleteDriverRoute,
    id,
    driverRouteModalDelete
  } = props;

  const toggle = () => {toggleDriverRouteModalDelete()};

  return (
    <div>
      <Modal isOpen={driverRouteModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center text-danger text-capitalize font-weight-bold" style={{fontSize: 15}}>delete Driver Route?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteDriverRoute(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverRouteModalDelete);

