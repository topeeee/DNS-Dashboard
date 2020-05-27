import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleZoneModalDelete, deleteZone} from "../../store/actions/zoneAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleZoneModalDelete: () => dispatch(toggleZoneModalDelete()),
    deleteZone: (id) => dispatch(deleteZone(id))
  };
}

const mapStateToProps = state => ({
  ZoneModalDelete: state.zone.ZoneModalDelete,
  id: state.zone.DeleteID

});

const ZoneModalDelete = (props)=> {
  const {
    className,
    toggleZoneModalDelete,
    ZoneModalDelete,
    id,
    deleteZone
  } = props;

  const toggle = () => {toggleZoneModalDelete()};

  return (
    <div>
      <Modal isOpen={ZoneModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center" style={{fontSize: 15}}>Are you sure you want to delete this Zone?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteZone(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(ZoneModalDelete);

