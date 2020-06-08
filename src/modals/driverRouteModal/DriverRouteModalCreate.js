import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverRouteModalCreate, createDriverRoute} from "../../store/actions/driverRouteAction";
import {RouteUser} from "../../store/actions/routeAction";




function mapDispatchToProps(dispatch) {
  return {
    toggleDriverRouteModalCreate: () => dispatch(toggleDriverRouteModalCreate()),
    createDriverRoute: (routecode, driverUsername, driverLicense) => dispatch(createDriverRoute(routecode, driverUsername, driverLicense)),
    routeUser: () => dispatch(RouteUser()),


  };
}

const mapStateToProps = state => ({
  driverRouteModalCreate: state.driverRoute.DriverRouteModalCreate,
  routes: state.route.routes,
  isAuthenticated: state.auth.isAuthenticated,


});

const DriverRouteModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    toggleDriverRouteModalCreate,
    driverRouteModalCreate,
    createDriverRoute,
    routes,
    routeUser,
    isAuthenticated

  } = props;


useEffect(()=>{
  if(isAuthenticated){
    routeUser()
  }
}, []);


  const [formData, setFormData] = useState({routecode: "", driverUsername: "", driverLicense: ""});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const {routecode, driverUsername, driverLicense } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createDriverRoute( routecode, driverUsername, driverLicense);
    setFormData({routecode: "", driverUsername: "", driverLicense: ""})

  };

  const toggle = () => {toggleDriverRouteModalCreate()};

  return (
    <div>
      <Modal isOpen={driverRouteModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Area</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              routecode, driverUsername, driverLicense
              <Label for="country" className="font-weight-bold mb-0 mt-1 text-info">Route Code</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="routecode"
                value={routecode}
                onChange={onChange}
                required>
                <option value="">Select Zone</option>
                {routes &&  routes.map((route, index) =>
                  <option value={route.routecode} key={index}>{route.routecode}</option>
                )}
              </Input>
              <Label for="state" className="font-weight-bold mb-0 mt-1 text-info">Driver Username</Label>
              <Input
                type="text"
                name="driverUsername"
                value={driverUsername}
                onChange={onChange}
                required
              />
              <Label for="name" className="font-weight-bold mb-0 text-info">driver License</Label>
              <Input
                type="text"
                name="driverLicense"
                value={driverLicense}
                onChange={onChange}
                required
              />
            </FormGroup>
            <div className="d-flex justify-content-md-end">
              <Button color="primary" type="submit" className="mr-1" >Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverRouteModalCreate);

