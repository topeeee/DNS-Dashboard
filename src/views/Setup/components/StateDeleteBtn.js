import React from 'react';
import {connect} from "react-redux"
import {toggleStateModalDelete} from "../../../store/actions/stateAction";
import {Button} from "reactstrap";



function mapDispatchToProps(dispatch) {
  return {
    toggleStateModalDelete: (id) => dispatch(toggleStateModalDelete(id))
  };
}


const StateDeleteBtn = ({toggleStateModalDelete, id})=> {
  return (
    <div>
      <Button size="sm" className="btn-pill  btn-danger" onClick={()=>toggleStateModalDelete(id)}>Delete</Button>
    </div>
  )

};

export default connect(null, mapDispatchToProps)(StateDeleteBtn);
