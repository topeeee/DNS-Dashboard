import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { connect } from "react-redux";
import {toggleBusAssistantsModalCreate, createBusAssistants} from "../../store/actions/busAssistantAction";
import {ZoneUser} from "../../store/actions/zoneAction";
import {RouteUser} from "../../store/actions/routeAction";
import Select from "react-select";
import makeAnimated from "react-select/animated/dist/react-select.esm";
import  axios from "axios";
import {getOperators} from "../../store/actions/operatorAction";
import {getVehicles} from "../../store/actions/vehicleAction";
import {getAreas} from "../../store/actions/areaAction";

import api from '../../environments/environment'
import {isAdmin, OperatorName, isOperator} from "../../environments/constants";

const animatedComponents = makeAnimated();






function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantsModalCreate: () => dispatch(toggleBusAssistantsModalCreate()),
    createBusAssistants: (vehicleId, operatorInput, operatorId, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea
    ) =>
      dispatch(createBusAssistants(vehicleId, operatorInput, operatorId, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea
      )),
    ZoneUser: () => dispatch(ZoneUser()),
    RouteUser: () => dispatch(RouteUser()),
    getOperators: () => dispatch(getOperators()),
    getVehicles: () => dispatch(getVehicles()),
    getAreas: () => dispatch(getAreas()),

  };
}


const mapStateToProps = state => ({
  BusAssistantModalCreate: state.busAssistants.BusAssistantModalCreate,
  zones: state.zone.zones,
  routes: state.route.routes,
  isAuthenticated: state.auth.isAuthenticated,
  operators: state.operator.operators,
  vehicles: state.vehicle.vehicles,
  areas: state.area.areas,


});

const BusAssistantModalCreate = (props) => {
  const {
    className,
    toggleBusAssistantsModalCreate,
    BusAssistantModalCreate,
    createBusAssistants,
    zones,
    routes,
    ZoneUser,
    RouteUser,
    isAuthenticated,
    operators,
    getOperators,
    vehicles,
    getVehicles,
    getAreas,
    areas
  } = props;

 async function getOperatorZone() {
    try {
    const res = await  axios.get(`${api.operatorZone}/api/all/operatorzones/`);
          setOperatorZone(res.data);
    }catch (e) {

    }
  }

  async function getOperatorMode() {
    try {
    const res = await  axios.get(`${api.operatorMode}/api/me/operatormodes/`);
          setOperatorMode(res.data);
    }catch (e) {

    }
  }


  useEffect(()=>{
   if(isAuthenticated) {
     getOperatorZone();
     getOperatorMode();
   }
  },[]);



  const [formData, setFormData] = useState({
    firstName: "", lastName: "", pin: "", residentialAddress: "", email: "", status: "", phoneNo: "", bankName: "", accountName: "", accountNumber: "", assignedMode: "", zone: "", area: "", route: "", geoFencedArea: ""

  });
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);
  const [routeSelected, setRouteSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [regPin, setRegpin] = useState('');
  const [operatorInput, setOperatorInput] = useState('');
  const [vehicleInput, setVehicleInput] = useState('');
  const [plateInput, setPlateInput] = useState('');
  const [zoneInput, setZoneInput] = useState('');
  const [areaInput, setAreaInput] = useState('');
  const [routeInput, setRouteInput] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  // const [modeInput, setModeInput] = useState('');
  const [operatorZone, setOperatorZone] = useState([]);
  const [operatorMode, setOperatorMode] = useState([]);
  const [operatorId, setOperatorId] = useState('');


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });





  const onClickContinue1 = () => {
    register();
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

  // useEffect(()=> {
  //   console.log(areas)
  // }, [areas]);

  const {
    firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea
  } = formData;

 async function register() {
    try {
    const res = await  axios.post(`${api.login}/admin/users/`, {username: email, password: "password"})
      setRegpin(res.data.id)
    }catch (e) {

    }
  }

 async function assignVehicle(id, status) {
   try {
    await axios.put(`${api.vehicle}/api/assign/busassitant/${id}/?assign=${status}`)
   }catch (e) {

   }
  }


  const handleChange3 = (selected2) => {
    setSelected2(selected2);
  };


  const onSubmit = async (e) => {
     e.preventDefault();
    createBusAssistants(vehicleId, operatorInput, operatorId, firstName, lastName, regPin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zoneInput, areaInput, routeInput, geoFencedArea
    );
    assignVehicle(vehicleId, "1");
    setFormData({
      firstName: "", lastName: "", pin: "", residentialAddress: "", email: "", status: "", phoneNo: "", bankName: "", accountName: "", accountNumber: "", assignedMode: "", zone: "", area: "", route: "", geoFencedArea: ""

    });
    setForm1(true);
    setForm3(false);
    setForm2(false);
    setForm4(false);

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


  useEffect(()=> {
    if(vehicles && plateInput) {
      vehicles.map(vehicle => {
        if(vehicle.plate_number === plateInput) {
          setVehicleId(vehicle.id);
        }
      })
    }
  }, [plateInput]);


  useEffect(()=> {
    if(isOperator) {
      setOperatorInput(OperatorName)
    }
  }, [isOperator]);

  useEffect(()=>{
    if(isAuthenticated) {
      RouteUser();
      ZoneUser();
      getOperators();
      getVehicles();
      getAreas()
    }
  }, [operatorInput]);

  useEffect(()=> {
    if(operators && operatorInput) {
      operators.map(operator=> {
        if(operator.name === operatorInput) {
          setOperatorId(operator.id)
        }
      })
    }
  },[operators, operatorInput]);



  const toggle = () => {toggleBusAssistantsModalCreate()};

  return (
    <div>
      <Modal isOpen={BusAssistantModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Bus Assistant</ModalHeader>
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
                <Label for="name" className="font-weight-bold mb-0 text-info">residential Address</Label>
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
                <Label for="name" className="font-weight-bold mb-0 text-info">Operator</Label>
                {(operators && isAdmin) && <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="operatorInput"
                  value={operatorInput}
                  onChange={e=>setOperatorInput(e.target.value)}
                  // required
                >
                  <option value="">Select Operator</option>

                  {operators && operators.map((operator, index) =>
                    <option value={operator.name} key={index}>{operator.name}</option>
                  )}
                </Input>}
                {(operators && isOperator) &&
                <Input type="text"  name="operatorInput" onChange={onChange} value={operatorInput} readOnly={true} required />}
                {/*<Input*/}
                {/*  style={{cursor: 'pointer'}}*/}
                {/*  type="select"*/}
                {/*  name="operatorInput"*/}
                {/*  value={operatorInput}*/}
                {/*  onChange={e=>setOperatorInput(e.target.value)}*/}
                {/*  // required*/}
                {/*>*/}
                {/*  <option value="">Select Operator</option>*/}

                {/*  {operators && operators.map((operator, index) =>*/}
                {/*    <option value={operator.name} key={index}>{operator.name}</option>*/}
                {/*  )}*/}
                {/*</Input>*/}
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle type</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="vehicleInput"
                  value={vehicleInput}
                  onChange={e=>setVehicleInput(e.target.value)}
                  // required
                >
                  <option value="">Select Vehicle type</option>
                  {(vehicles && operatorInput) && vehicles.filter((user) => user.operator === operatorInput).map((vehicle, index) =>
                    <option value={vehicle.vehicle_type} key={index}>{vehicle.vehicle_type}</option>
                  )}
                </Input>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle Plate no</Label>
                <Input
                  style={{cursor: 'pointer'}}
                  type="select"
                  name="plateInput"
                  value={plateInput}
                  onChange={e=>setPlateInput(e.target.value)}
                  // required
                >
                  <option value="">Select Vehicle Plate no</option>
                  {(vehicles && vehicleInput) && vehicles.filter((user) => (user.vehicle_type === vehicleInput) && (user.operator === operatorInput) && (user.assigned_BA === null || user.assigned_BA === "null") && (user.status === "1")).map((vehicle, index) =>
                    <option value={vehicle.plate_number} key={index}>{vehicle.plate_number}</option>
                  )}
                  {/*{routes && routes.map((route, index) =>*/}
                  {/*  <option value={route.routecode} key={index}>{route.routecode}</option>*/}
                  {/*)}*/}
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
                  {(operatorZone && operatorInput) && operatorZone.filter((user) => user.operatorName === operatorInput).map((zone, index) =>
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

export default  connect( mapStateToProps, mapDispatchToProps)(BusAssistantModalCreate);

