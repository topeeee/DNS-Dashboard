import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverModalCreate, createDriver} from "../../store/actions/driverAction";
import {ZoneUser} from "../../store/actions/zoneAction";
import {RouteUser} from "../../store/actions/routeAction";
// import {BusStopUser} from "../../store/actions/busStopAction";



function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalCreate: () => dispatch(toggleDriverModalCreate()),
    createDriver: (residentialaddress, email, status,ratings,reviews, bankname, accountname, accountnumber, earnings, zone, area, route, geofencedarea, operatorname) =>
      dispatch(createDriver(residentialaddress, email, status,ratings,reviews, bankname, accountname, accountnumber, earnings, zone, area, route, geofencedarea, operatorname)),
    ZoneUser: () => dispatch(ZoneUser()),
    RouteUser: () => dispatch(RouteUser()),

  };
}

const mapStateToProps = state => ({
  driverModalCreate: state.driver.DriverModalCreate,
  zones: state.zone.zones,
  routes: state.route.routes,
  isAuthenticated: state.auth.isAuthenticated,


});

const DriverModalCreate = (props) => {
  const {
    className,
    toggleDriverModalCreate,
    driverModalCreate,
    createDriver,
    zones,
    routes,
    ZoneUser,
    RouteUser,
    isAuthenticate
  } = props;

  useEffect(()=>{
    if(isAuthenticate) {
      RouteUser();
      ZoneUser();
    }
  }, []);

  const [formData, setFormData] = useState({
    residentialaddress: "",
    email: "",
    status: "",
    ratings: "",
    reviews: "",
    bankname: "",
    accountname: "",
    accountnumber: "",
    earnings: "",
    zone: "",
    area: "",
    route: "",
    geofencedarea: "",
    operatorname: ""
  });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    residentialaddress, email, status,ratings,reviews, bankname, accountname, accountnumber, earnings, zone, area, route, geofencedarea, operatorname
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    createDriver(residentialaddress, email, status,ratings,reviews, bankname, accountname, accountnumber, earnings, zone, area, route, geofencedarea, operatorname);
    setFormData({
      residentialaddress: "",
      email: "",
      status: "",
      ratings: "",
      reviews: "",
      bankname: "",
      accountname: "",
      accountnumber: "",
      earnings: "",
      zone: "",
      area: "",
      route: "",
      geofencedarea: "",
      operatorname: ""
    })

  };

  const toggle = () => {toggleDriverModalCreate()};

  return (
    <div>
      <Modal isOpen={driverModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Driver</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Residential Address</Label>
                <Input type="text"  name="residentialaddress" onChange={onChange} value={residentialaddress}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Email</Label>
                <Input type="email"  name="email" onChange={onChange} value={email} required />
              </Col>
              {/*<Col md="6">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">Status</Label>*/}
              {/*  <Input*/}
              {/*    style={{cursor: 'pointer'}}*/}
              {/*    type="select"*/}
              {/*    name="status"*/}
              {/*    value={status}*/}
              {/*    onChange={onChange}*/}
              {/*    required*/}
              {/*  >*/}
              {/*    <option value="">Select Status</option>*/}
              {/*    <option value="Approved">Approved</option>*/}
              {/*    <option value="Unapproved">Unapproved</option>*/}
              {/*  </Input>*/}
              {/*</Col>*/}
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Ratings</Label>
                <Input type="text" name="ratings" onChange={onChange} value={ratings} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Reviews</Label>
                <Input type="text" name="reviews" onChange={onChange} value={reviews} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Bank Name</Label>
                <Input type="text"  name="bankname" onChange={onChange} value={bankname} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Account Name</Label>
                <Input type="text"  name="accountname" onChange={onChange} value={accountname} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Account Number</Label>
                <Input type="text"  name="accountnumber" onChange={onChange} value={accountnumber} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Earnings</Label>
                <Input type="text"  name="earnings" onChange={onChange} value={earnings} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Zone</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="zone"
                  value={zone}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Zone</option>
                  {zones &&  zones.map((zone, index) =>
                    <option value={zone.zonecode} key={index}>{zone.zonecode}</option>
                  )}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Area</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="area"
                  value={area}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Area</option>
                  <option value="Area1">Area1</option>
                  <option value="Area2">Area2</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Route</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="route"
                  value={route}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Route</option>
                  {routes && routes.map((route, index) =>
                    <option value={route.routecode} key={index}>{route.routecode}</option>
                  )}
                </Input>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Geo Fenced Area</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="geofencedarea"
                  value={geofencedarea}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Geo Fenced Area</option>
                  <option value="Geo Fenced Area 1">Geo Fenced Area 1</option>
                  <option value="Geo Fenced Area 2">Geo Fenced Area 2</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
                <Col md="6">
                  <Label for="name" className="font-weight-bold mb-0 text-info">Geo Fenced Area</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="operatorname"
                  value={operatorname}
                  onChange={onChange}
                  required
                >
                  <option value="">Select  Operator Name</option>
                  <option value="Operator Name 1">Operator Name 1</option>
                  <option value="Operator Name 2">Operator Name 2</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
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

export default  connect( mapStateToProps, mapDispatchToProps)(DriverModalCreate);

