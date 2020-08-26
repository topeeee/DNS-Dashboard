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
import {BusStopUser} from "../../store/actions/busStopAction";
// import {BusStopUser} from "../../store/actions/busStopAction";

const animatedComponents = makeAnimated();






function mapDispatchToProps(dispatch) {
  return {
    toggleBusAssistantsModalUpdate: () => dispatch(toggleBusAssistantsModalUpdate()),
    updateBusAssistants: (UpdateBusAssistantId, operatorId, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zoneInput, areaInput, routeInput, geoFencedArea, selected, oaStation) =>
      dispatch(updateBusAssistants(UpdateBusAssistantId, operatorId, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zoneInput, areaInput, routeInput, geoFencedArea, selected, oaStation)),
    ZoneUser: () => dispatch(ZoneUser()),
    RouteUser: () => dispatch(RouteUser()),
    getOperators: () => dispatch(getOperators()),
    getVehicles: () => dispatch(getVehicles()),
    getAreas: () => dispatch(getAreas()),
    getBusAssistants: () => dispatch(getBusAssistants()),
    getModes: () => dispatch(getModes()),
    getStations: () => dispatch(BusStopUser())

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
  stations: state.busStop.busStops,
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
    modes,
    stations,
    getStations
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
      getStations();
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", pin: "", residentialAddress: "", email: "", status: "", phoneNo: "", bankName: "", accountName: "", accountNumber: "", assignedMode: "", zone: "", area: "", route: "", geoFencedArea: ""

  });
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [routeSelected, setRouteSelected] = useState([]);
  const [zoneInput, setZoneInput] = useState('');
  const [areaInput, setAreaInput] = useState('');
  const [routeInput, setRouteInput] = useState('');
  const [oaStation, setOaStation]= useState([]);
  const [selected, setSelected] = useState([]);
  const [stationSelected, setStationSelected] = useState([]);
  const [operatorid] = useState('None')

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });





  const onClickContinue1 = () => {
    // register();
    setForm1(false);
    setForm2(true);
  };

  const onClickBack1 = () => {
    setForm1(true);
    setForm2(false);
  };




  const {
    firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zone, area, route, geoFencedArea

  } = formData;




  const onSubmit = async (e) => {
     e.preventDefault();
    updateBusAssistants(UpdateBusAssistantId, operatorid, firstName, lastName, pin, residentialAddress, email, status, phoneNo, bankName, accountName, accountNumber, assignedMode, zoneInput, areaInput, routeInput, geoFencedArea, selected, oaStation
    );
    setFormData({
      firstName: "", lastName: "", pin: "", residentialAddress: "", email: "", status: "", phoneNo: "", bankName: "", accountName: "", accountNumber: "", assignedMode: "", zone: "", area: "", route: "", geoFencedArea: "", role: ""

    })
    setStationSelected([])
  };

async function getOaStation(id) {
  try {
    const res = await axios.get(`${api.oastation}/api/oastations/`)
    setOaStation(res.data.filter(user => user.operationassitantId == id))
  }catch (e) {

  }
}


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
    if(UpdateBusAssistantId) {
      setOperationAssistants();
      getOaStation(UpdateBusAssistantId);
    }
  },[UpdateBusAssistantId]);

  useEffect(()=> {
    if (stations) {
      const body = [];
      stations.forEach((res)=> {
        body.push({ value: res.station, label: res.station });
        setStationSelected(body);
      })
    }
  }, [stations]);

  useEffect(()=> {
    if (oaStation) {
      const body = [];
      oaStation.forEach((res)=> {
        body.push({ value: res.stationCode, label: res.stationCode });
        setSelected(body);
      })
    }
  }, [oaStation]);


  const handleChange = (selected) => {
    setSelected(selected);
  };





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
                <Label for="name" className="font-weight-bold mb-0 text-info">Station</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  value={selected}
                  options={stationSelected}
                  onChange={handleChange}
                  required
                />

              </Col>
            </FormGroup>}
            <div className="d-flex justify-content-md-end">
              {form2  &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickBack1} >Back</Button>
              }
              {form1 &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickContinue1}>Continue</Button>
              }
              {form2 &&
              <Button color="primary" type="submit" className="mr-1" >Submit</Button>
              }
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(BusAssistantModalUpdate);

