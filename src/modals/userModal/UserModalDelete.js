import React from 'react';
import {Button, Modal,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleUserModalDelete, deleteUser} from "../../store/actions/userAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleUserModalDelete: () => dispatch(toggleUserModalDelete()),
    deleteUser: (id) => dispatch(deleteUser(id))
  };
}

const mapStateToProps = state => ({
  UserModalDelete: state.user.UserModalDelete,
  id: state.user.DeleteID

});

const UserModalDelete = (props)=> {
  const {
    className,
    toggleUserModalDelete,
    UserModalDelete,
    id,
    deleteUser
  } = props;

  const toggle = () => {toggleUserModalDelete()};

  return (
    <div>
      <Modal isOpen={UserModalDelete} toggle={toggle} className={className}>
        <div className="bg-dark p-4">
          <div className="text-center" style={{fontSize: 15}}>Are you sure you want to delete this User?</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <Button className="btn-pill btn-instagram" onClick={()=>toggle()}>Cancel</Button>
            <Button className="btn-pill btn-danger" onClick={()=>deleteUser(id)}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(UserModalDelete);

