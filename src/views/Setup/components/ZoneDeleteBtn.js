import React from 'react';
import {connect} from "react-redux"
import {toggleZoneModalDelete} from "../../../store/actions/zoneAction";
import {Button} from "reactstrap";



function mapDispatchToProps(dispatch) {
  return {
    toggleZoneModalDelete: (id) => dispatch(toggleZoneModalDelete(id))
  };
}


const ZoneDeleteBtn = ({toggleZoneModalDelete, id})=> {
  return (
    <div>
      <Button size="sm" className="btn-pill  btn-danger" onClick={()=>toggleZoneModalDelete(id)}>Delete</Button>
    </div>
  )

};

export default connect(null, mapDispatchToProps)(ZoneDeleteBtn);
