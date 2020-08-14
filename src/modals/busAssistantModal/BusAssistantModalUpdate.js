import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusAssistantsModalUpdate, getBusAssistants, updateBusAssistants} from "../../store/actions/busAssistantAction";
import {ZoneUser} from "../../store/actions/zoneAction";
import {RouteUser} from "../../store/actions/routeAction";
import Select from "react-select";
import makeAnimated from "react-select/animated/dist/react-select.esm";
import  axios from "axios";
import {getOperators} from "../../store/actions/operatorAction";
import {getVehicles} from "../../store/actions/vehicleAction";
import {getAreas} from "../../store/actions/areaAction";
import api from "../../environments/environment";
import {getModes} from "../../store/actions/modeAction";
// import {BusStopUser} from "../../store/actions/busStopAction";

const animatedComponents = makeAnimated();






function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantsModalUpdate: () => dispatch(toggleBusAssistantsModalUpdate()),
    updateBusAssistants: (UpdateBusAssistantId, operatorId, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zoneInput, areaInput, routeInput, geoFencedArea, role) =>
      dispatch(updateBusAssistants(UpdateBusAssistantId, operatorId, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zoneInput, areaInput, routeInput, geoFencedArea, role)),
    ZoneUser: () => dispatch(ZoneUser()),
    RouteUser: () => dispatch(RouteUser()),
    getOperators: () => dispatch(getOperators()),
    getVehicles: () => dispatch(getVehicles()),
    getAreas: () => dispatch(getAreas()),
    getBusAssistants: () => dispatch(getBusAssistants()),
    getModes: () => dispatch(getModes())

  };
}


const mapStateToProps = state => ({
  busAssistantModalUpdate: state.busAssistants.BusAssistantModalUpdate,
  zones: state.zone.zones,
  routes: state.route.routes,
  isAuthenticated: state.auth.isAuthenticated,
  operators: state.operator.operators,
  vehicles: state.vehicle.vehicles,
  areas: state.area.areas,
  busAssistants: state.busAssistants.busAssistants,
  UpdateBusAssistantId: state.busAssistants.UpdateBusAssistantId,
  modes: state.mode.modes,
});

const BusAssistantModalUpdate = (props) => {
  const {
    className,
    toggleBusAssistantsModalUpdate,
    busAssistantModalUpdate,
    updateBusAssistants,
    routes,
    ZoneUser,
    RouteUser,
    isAuthenticated,
    getOperators,
    getVehicles,
    getAreas,
    areas,
    busAssistants,
    getBusAssistants,
    UpdateBusAssistantId,
    getModes,
    modes
  } = props;






  useEffect(()=>{
    if(isAuthenticated) {
      RouteUser();
      ZoneUser();
      getOperators();
      getVehicles();
      getAreas();
      getBusAssistants();
      getModes();
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", pin: "", residentialAddress: "", email: "", status: "", phoneNo: "", bankName: "", accountName: "", accountNumber: "", assignedMode: "", zone: "", area: "", route: "", geoFencedArea: "", role: ""

  });
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);
  const [routeSelected, setRouteSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [zoneInput, setZoneInput] = useState('');
  const [areaInput, setAreaInput] = useState('');
  const [routeInput, setRouteInput] = useState('');
  // const [modeInput, setModeInput] = useState('');
  const [operatorZone, setOperatorZone] = useState([]);
  const [operatorId, setOperatorId] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });





  const onClickContinue1 = () => {
    // register();
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
    firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea, role

  } = formData;



  const handleChange3 = (selected2) => {
    setSelected2(selected2);
  };
  const onSubmit = async (e) => {
     e.preventDefault();
    updateBusAssistants(UpdateBusAssistantId, operatorId, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zoneInput, areaInput, routeInput, geoFencedArea, role
    );
    setFormData({
      firstName: "", lastName: "", pin: "", residentialAddress: "", email: "", status: "", phoneNo: "", bankName: "", accountName: "", accountNumber: "", assignedMode: "", zone: "", area: "", route: "", geoFencedArea: "", role: ""

    })

  };




  useEffect(()=> {
    if (routes && areaInput) {
      const body = [];
      routes.filter((user) => user.areacode === areaInput).forEach((res)=> {
        body.push({ value: res.route, label: res.route });
        setRouteSelected(body);
      })
    }
  }, [areaInput]);

  useEffect(()=> {
    if(routeSelected){
      const body = [];
      routeSelected.forEach(res=> {
        body.push(res.value);
        setRouteInput(body.toString())
      })
    }
  },[routeSelected]);

  function setOperationAssistants() {
    if (busAssistants){
      busAssistants.map(driver=> {
        if(driver.id === UpdateBusAssistantId){
          setFormData({
            firstName: driver.firstName, lastName: driver.lastName, residentialAddress: driver.residentialAddress, email: driver.email, phoneNo: driver.phoneNo, status: "0", pin: "", bankName: driver.bankName, accountName: driver.accountName, accountNumber: driver.accountNumber, zone: driver.zone, area: driver.area, route: driver.route, assignedMode: driver.assignedMode, role: driver.role
          });
          setZoneInput(driver.zone);
          setAreaInput(driver.area);
          setRouteInput(driver.route);
        }
      })
    }
  }

  useEffect(()=> {
    setOperationAssistants();
  },[UpdateBusAssistantId]);




  const toggle = () => {toggleBusAssistantsModalUpdate()};

  return (
    <div>
      <Modal isOpen={busAssistantModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Operation Assistant</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            {form1 &&
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">First Name</Label>
                <Input type="text"  name="firstName" onChange={onChange} value={firstName}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Last Name</Label>
                <Input type="text"  name="lastName" onChange={onChange} value={lastName} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">residentialaddress</Label>
                <Input type="text" name="residentialAddress" onChange={onChange} value={residentialAddress} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">email</Label>
                <Input type="email" name="email" onChange={onChange} value={email} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">phoneno</Label>
                <Input type="text"  name="phoneNo" onChange={onChange} value={phoneNo} required />
              </Col>
            </FormGroup>}
            {form2 &&
            <FormGroup row>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Role</Label>
                <Input type="text"  name="role" onChange={onChange} value={role} required />
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Modes</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="assignedMode"
                  value={assignedMode}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Mode</option>
                  {modes && modes.map((mode, index) =>
                    <option value={mode.mode} key={index}>{mode.mode}</option>
                  )}
                </Input>
              </Col>
            </FormGroup>}
            {form3 &&
            <FormGroup row>
              {/*<Col md="12">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">Mode</Label>*/}
              {/*  <Input*/}
              {/*    style={{cursor: 'pointer'}}*/}
              {/*    type="select"*/}
              {/*    name="zoneInput"*/}
              {/*    value={modeInput}*/}
              {/*    onChange={e=>setModeInput(e.target.value)}*/}
              {/*    // required*/}
              {/*  >*/}
              {/*    <option value="">select Mode</option>*/}
              {/*    {(operatorMode && operatorInput) && operatorMode.filter((user) => user.operator_name === operatorInput).map((mode, index) =>*/}
              {/*      <option value={mode.modecode} key={index}>{mode.modecode}</option>*/}
              {/*    )}*/}
              {/*  </Input>*/}
              {/*</Col>*/}
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Zone</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="zoneInput"
                  value={zoneInput}
                  onChange={e=>setZoneInput(e.target.value)}
                  // required
                >
                  <option value="">select Zone</option>
                  {(operatorZone) && operatorZone.map((zone, index) =>
                    <option value={zone.zoneCode} key={index}>{zone.zoneCode}</option>
                  )}
                </Input>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Area</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="areaInput"
                  value={areaInput}
                  onChange={e=>setAreaInput(e.target.value)}
                  // required
                >
                  <option value="">select Area</option>
                  {(areas && zoneInput) && areas.filter((user) => user.zonecode === zoneInput).map((area, index) =>
                    <option value={area.xarea} key={index}>{area.xarea}</option>
                  )}
                </Input>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Route</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={routeSelected}
                  value={selected2}
                  onChange={handleChange3}/>
                {/*<Input*/}
                {/*  style={{cursor: 'pointer'}}*/}
                {/*  type="select"*/}
                {/*  name="routeInput"*/}
                {/*  value={routeInput}*/}
                {/*  onChange={e=>setRouteInput(e.target.value)}*/}
                {/*  // required*/}
                {/*>*/}
                {/*  <option value="">select Route</option>*/}
                {/*  {(routes && areaInput) && routes.filter((user) => user.areacode === areaInput).map((route, index) =>*/}
                {/*    <option value={route.route} key={index}>{route.route}</option>*/}
                {/*  )}*/}
                {/*</Input>*/}
              </Col>
              {/*<Col md="12">*/}
              {/*  <Label for="name" className="font-weight-bold mb-0 text-info">Route</Label>*/}
              {/*  <Select*/}
              {/*    closeMenuOnSelect={false}*/}
              {/*    components={animatedComponents}*/}
              {/*    isMulti*/}
              {/*    options={modeSelected}*/}
              {/*    value={selected2}*/}
              {/*    onChange={handleChange3}/>*/}
              {/*</Col>*/}
            </FormGroup>}
            {form4 &&
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Bank Name</Label>
                <Input type="text"  name="bankName" onChange={onChange} value={bankName}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info"> Bank Account Name</Label>
                <Input type="text"  name="accountName" onChange={onChange} value={accountName} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Bank Account Number</Label>
                <Input type="text"  name="accountNumber" onChange={onChange} value={accountNumber} required />
              </Col>
            </FormGroup>
            }

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
              <Button color="primary" type="submit" className="mr-1" >Submit</Button>
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

export default  connect( mapStateToProps, mapDispatchToProps)(BusAssistantModalUpdate);

