import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleUserModalCreate} from "../../store/actions/userAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleUserModalCreate: () => dispatch(toggleUserModalCreate())
  };
}

const mapStateToProps = state => ({
  userModalCreate: state.users.UserModalCreate,

});

const UserModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleUserModalCreate,
    userModalCreate
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {toggleUserModalCreate()};

  return (
    <div>
      <Modal isOpen={userModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default  connect( mapStateToProps, mapDispatchToProps)( UserModalCreate);

// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { connect } from "react-redux";
// import {toggleUserModalCreate} from "../../store/actions/userAction";
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     toggleUserModalCreate: () => dispatch(toggleUserModalCreate())
//   };
// }
//
// const mapStateToProps = state => ({
//   userModalCreate: state.users.userModalCreate,
//
// });
//
// const UserModalCreate = (props) => {
//   const {
//     buttonLabel,
//     className,
//     toggleUserModalCreate,
//     userModalCreate
//   } = props;
//
//   // const [modal, setModal] = useState(false);
//
//   // const toggle = () => {
//   //   // setModal(!modal);
//   //   // addMobileNumber()
//   // };
//
//   return (
//     <div>
//       <Button color="primary" onClick={toggleUserModalCreate}>Do Something</Button>
//       <Modal isOpen={userModalCreate} toggle={toggleUserModalCreate} className={className}>
//         <ModalHeader toggle={toggleUserModalCreate}>sklcscsc</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggleUserModalCreate}>Do Something</Button>{' '}
//           <Button color="secondary" onClick={toggleUserModalCreate}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(UserModalCreate);
