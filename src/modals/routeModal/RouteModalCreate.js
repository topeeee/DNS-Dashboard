import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleRouteModalCreate, createRoute} from "../../store/actions/routeAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleRouteModalCreate: () => dispatch(toggleRouteModalCreate()),
    createRoute: (routeCode, route, areaCode) => dispatch(createRoute(routeCode, route, areaCode)),

  };
}

const mapStateToProps = state => ({
  routeModalCreate: state.route.RouteModalCreate,

});

const RouteModalCreate = (props) => {
  const {
    className,
    toggleRouteModalCreate,
    routeModalCreate,
    createRoute
  } = props;

  const [formData, setFormData] = useState({routeCode: '', route: '', areaCode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { routeCode, route, areaCode } = formData;

  const onSubmit = async () => {
    createRoute(routeCode, route, areaCode);

  };

  const toggle = () => { toggleRouteModalCreate()};

  return (
    <div>
      <Modal isOpen={ routeModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Route</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 ">Route Code</Label>
              <Input
                type="text"
                name="routeCode"
                placeholder="Route Code"
                value={routeCode}
                onChange={onChange}
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1">Route</Label>
              <Input
                type="text"
                name="route"
                placeholder="Route"
                value={route}
                onChange={onChange}
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1">Area Code</Label>
              <Input
                type="text"
                name="areaCode"
                placeholder=" Area Code"
                value={areaCode}
                onChange={onChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>onSubmit()}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(RouteModalCreate);

