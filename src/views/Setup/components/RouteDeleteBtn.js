import React from 'react';
import {connect} from "react-redux"
import {toggleRouteModalDelete} from "../../../store/actions/routeAction";
import {Button} from "reactstrap";



function mapDispatchToProps(dispatch) {
  return {
    toggleRouteModalDelete: (id) => dispatch(toggleRouteModalDelete(id))
  };
}


const RouteDeleteBtn = ({toggleRouteModalDelete, id})=> {
  return (
    <div>
      <Button size="sm" className="btn-pill  btn-danger" onClick={()=>toggleRouteModalDelete(id)}>Delete</Button>
    </div>
  )

};

export default connect(null, mapDispatchToProps)(RouteDeleteBtn);
