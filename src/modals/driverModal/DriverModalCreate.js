import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleDriverModalCreate, createDriver} from "../../store/actions/driverAction";
import {ZoneUser} from "../../store/actions/zoneAction";
import {RouteUser} from "../../store/actions/routeAction";
import Select from "react-select";
import makeAnimated from "react-select/animated/dist/react-select.esm";
// import {BusStopUser} from "../../store/actions/busStopAction";

const animatedComponents = makeAnimated();

const options = [
  { value: 'Bus', label: 'Zone1' },
  { value: 'Car', label: 'Zone2' },
  { value: 'MiniVan', label: 'Zone3' }
];




function mapDispatchToProps(dispatch) {
  return {
    toggleDriverModalCreate: () => dispatch(toggleDriverModalCreate()),
    createDriver: (firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus) =>
      dispatch(createDriver(firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus)),
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
    firstname: "", lastname: "", residentialaddress: "", email: "", phoneno: "", status: "0", pin: "Not available", bankname: "Not available", accountname: "Not available", accountnumber: "Not available", zone: "", area: "", route: "", geofencedarea: "", appstatus: ""
  });
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onClickContinue1 = () => {
    setForm1(false);
    setForm3(false);
    setForm2(true);
    setForm4(false);
  };

  const onClickContinue2 = () => {
    setForm1(false);
    setForm3(true);
    setForm2(false);
    setForm4(false);
  };
  const onClickContinue3 = () => {
    setForm1(false);
    setForm3(false);
    setForm2(false);
    setForm4(true);
  };

  const onClickBack1 = () => {
    setForm1(true);
    setForm3(false);
    setForm2(false);
    setForm4(false);
  };

  const onClickBack2 = () => {
    setForm1(false);
    setForm3(false);
    setForm2(true);
    setForm4(false);
  };
  const onClickBack3 = () => {
    setForm1(false);
    setForm3(true);
    setForm2(false);
    setForm4(false);
  };

  const {
    firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus
  } = formData;

  const onSubmit = async (e) => {
     e.preventDefault();
    createDriver( firstname, lastname, residentialaddress, email, phoneno, status, pin, bankname, accountname, accountnumber, zone, area, route, geofencedarea, appstatus);
    // setFormData({
    //   firstname: "", lastname: "", residentialaddress: "", email: "", phoneno: "", status: "0", pin: "", bankname: "", accountname: "", accountnumber: "", zone: "", area: "", route: "", geofencedarea: "", appstatus: ""
    // })

  };

  const toggle = () => {toggleDriverModalCreate()};

  return (
    <div>
      <Modal isOpen={driverModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Driver</ModalHeader>
        <ModalBody>
          <Form>
            {form1 &&
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">First Name</Label>
                <Input type="text"  name="firstname" onChange={onChange} value={firstname}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Last Name</Label>
                <Input type="text"  name="lastname" onChange={onChange} value={lastname} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">residentialaddress</Label>
                <Input type="text" name="residentialaddress" onChange={onChange} value={residentialaddress} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">email</Label>
                <Input type="email" name="email" onChange={onChange} value={email} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">phoneno</Label>
                <Input type="text"  name="phoneno" onChange={onChange} value={phoneno} required />
              </Col>
            </FormGroup>}
            {form2 &&
            <FormGroup row>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle type</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  // name="first_name"
                  // value={first_name}
                  onChange={onChange}
                  required
                >
                  <option value="">Vehicle type</option>
                  <option value="Bus">Bus</option>
                  <option value="Car">Car</option>
                  <option value="Mini Van">Mini Van</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle Plate no</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  // name="first_name"
                  // value={first_name}
                  onChange={onChange}
                  required
                >
                  <option value="">Vehicle Plate no</option>
                  <option value="Bus">xcd345r</option>
                  <option value="Car">dcx345</option>
                  <option value="Mini Van">5r4ef</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
            </FormGroup>}
            {form3 &&
            <FormGroup row>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Mode</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  // name="first_name"
                  // value={first_name}
                  onChange={onChange}
                  required
                >
                  Lyte, Shuttle, Bus, Car
                  <option value="">Modes</option>
                  <option value="Bus">Lyte</option>
                  <option value="Bus">Shuttle</option>
                  <option value="Bus">Bus</option>
                  <option value="Car">Car</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Zone</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options} />
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Area</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  // name="first_name"
                  // value={first_name}
                  onChange={onChange}
                  required
                >
                  <option value="">Area</option>
                  <option value="Bus">Area1</option>
                  <option value="Car">Area2</option>
                  <option value="Mini Van">Area3</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Route</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  // name="first_name"
                  // value={first_name}
                  onChange={onChange}
                  required
                >
                  <option value="">Route</option>
                  <option value="Bus">Route1</option>
                  <option value="Car">Route2</option>
                  <option value="Mini Van">Route3</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Route</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  // name="first_name"
                  // value={first_name}
                  onChange={onChange}
                  required
                >
                  <option value="">Geo Fenced Area</option>
                  <option value="Bus">Geo Fenced1</option>
                  <option value="Car">Geo Fenced2</option>
                  <option value="Mini Van">Geo Fenced3</option>
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
                </Input>
              </Col>
            </FormGroup>}
            {form4 &&
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Bank Name</Label>
                <Input type="text"  name="firstname" onChange={onChange} value={firstname}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info"> Bank Account Name</Label>
                <Input type="text"  name="lastname" onChange={onChange} value={lastname} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Bank Account Number</Label>
                <Input type="text"  name="lastname" onChange={onChange} value={lastname} required />
              </Col>
            </FormGroup>}

            <div className="d-flex justify-content-md-end">
              {form2  &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickBack1} >Back</Button>
              }
              {form3  &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickBack2} >Back</Button>
              }
              {form4  &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickBack3} >Back</Button>
              }
              {form1 &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickContinue1}>Continue</Button>
              }
              {form2 &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickContinue2}>Next</Button>
              }
              {form3 &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickContinue3}>Next</Button>
              }
              {form4 &&
              <Button color="primary" type="button" className="mr-1" >Submit</Button>
              }
              {/*<Button color="primary" type="submit" className="mr-1" >Submit</Button>{' '}*/}
              {/*<Button color="secondary" onClick={toggle}>Cancel</Button>*/}
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(DriverModalCreate);

