import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import {toggleRouteModalCreate, createRoute} from "../../store/actions/routeAction";
import {getAreas} from "../../store/actions/areaAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleRouteModalCreate: () => dispatch(toggleRouteModalCreate()),
    createRoute: (routeCode, route, areaCode) => dispatch(createRoute(routeCode, route, areaCode)),
    getAreas: () => dispatch(getAreas()),

  };
}

const mapStateToProps = state => ({
  routeModalCreate: state.route.RouteModalCreate,
  areas: state.area.areas,
  isAuthenticated: state.auth.isAuthenticated,
});

const RouteModalCreate = (props) => {
  const {
    className,
    toggleRouteModalCreate,
    routeModalCreate,
    createRoute,
    areas,
    getAreas,
    isAuthenticated

  } = props;

  useEffect(()=> {
    if(isAuthenticated){
      getAreas()
    }
  }, []);

  const [formData, setFormData] = useState({routeCode: '', route: '', areaCode: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { routeCode, route, areaCode } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createRoute(routeCode, route, areaCode);
    setFormData({routeCode: '', route: '', areaCode: ''})

  };

  const toggle = () => { toggleRouteModalCreate()};

  return (
    <div>
      <Modal isOpen={ routeModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Route</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name" className="font-weight-bold mb-0 ">Route Code</Label>
              <Input
                type="text"
                name="routeCode"
                // placeholder="Route Code"
                value={routeCode}
                onChange={onChange}
                required
              />
              <Label for="state" className="font-weight-bold mb-0 mt-1">Route</Label>
              <Input
                type="text"
                name="route"
                // placeholder="Route"
                value={route}
                onChange={onChange}
                required
              />
              <Label for="country" className="font-weight-bold mb-0 mt-1">Area</Label>
              <Input
                style={{cursor: 'pointer'}}
                type="select"
                name="areaCode"
                // placeholder=" Area Code"
                value={areaCode}
                onChange={onChange}
                required
              >
                <option value="">Select Area</option>
                {areas &&  areas.map((area, index) =>
                  <option value={area.xarea} key={index}>{area.xarea}</option>
                )}
              </Input>
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

export default  connect( mapStateToProps, mapDispatchToProps)(RouteModalCreate);

