import React from 'react';
import {connect} from "react-redux"
import {toggleBusStopModalDelete} from "../../../store/actions/busStopAction";
import {Button} from "reactstrap";



function mapDispatchToProps(dispatch) {
  return {
    toggleBusStopModalDelete: (id) => dispatch(toggleBusStopModalDelete(id))
  };
}


const BusStopDeleteBtn = ({toggleBusStopModalDelete, id})=> {
  return (
    <div>
      <Button size="sm" className="btn-pill  btn-danger" onClick={()=>toggleBusStopModalDelete(id)}>Delete</Button>
    </div>
  )

};

export default connect(null, mapDispatchToProps)(BusStopDeleteBtn);
