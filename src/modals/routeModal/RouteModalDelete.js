import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleRouteModalDelete, deleteRoute} from "../../store/actions/routeAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleRouteModalDelete: () => dispatch(toggleRouteModalDelete()),
    deleteRoute: (id) => dispatch(deleteRoute(id))
  };
}

const mapStateToProps = state => ({
  RouteModalDelete: state.route.RouteModalDelete,
  id: state.route.DeleteID

});

const RouteModalDelete = (props)=> {
  const {
    className,
    toggleRouteModalDelete,
    RouteModalDelete,
    id,
    deleteRoute
  } = props;

  const toggle = () => {toggleRouteModalDelete()};

  return (
    <div>
      <Modal isOpen={RouteModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center" style={{fontSize: 15}}>Are you sure you want to delete this Route?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteRoute(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(RouteModalDelete);

