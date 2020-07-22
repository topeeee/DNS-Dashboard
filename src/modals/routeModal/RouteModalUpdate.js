import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader,} from 'reactstrap';
import { connect } from "react-redux";
import {toggleRouteModalUpdate, updateRoute} from "../../store/actions/routeAction";


function mapDispatchToProps(dispatch) {
  return {
    toggleRouteModalUpdate: () => dispatch(toggleRouteModalUpdate()),
    updateRoute: (id, routeCode, route, areaCode, price) => dispatch(updateRoute(id, routeCode, route, areaCode, price))
  };
}

const mapStateToProps = state => ({
  RouteModalUpdate: state.route.RouteModalUpdate,
  id: state.route.updateID,
  areas: state.area.areas,
  routes: state.route.routes,

});

const RouteModalUpdate = (props)=> {
  const {
    className,
    toggleRouteModalUpdate,
    RouteModalUpdate,
    id,
    updateRoute,
    areas,
    routes
  } = props;

  const [formData, setFormData] = useState({routeCode: '', route: '', areaCode: '', price: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { routeCode, route, areaCode, price } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateRoute(id, routeCode, route, areaCode, price);
    setFormData({routeCode: '', route: '', areaCode: '', price: ''})

  };

  useEffect(()=> {
    if(routes && id) {
      routes.map(route=> {
        if(route.id === id) {
          setFormData({routeCode: route.routecode, route: route.route, areaCode: route.areacode, price: route.price})
        }
      })
    }

  },[routes, id]);

  const toggle = () => {toggleRouteModalUpdate()};

  return (
    <div>
      <Modal isOpen={RouteModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Route</ModalHeader>
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
              <Label for="state" className="font-weight-bold mb-0 mt-1">Price (₦)</Label>
              <Input
                type="number"
                name="price"
                // placeholder="Route"
                value={price}
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

export default  connect( mapStateToProps, mapDispatchToProps)(RouteModalUpdate);

