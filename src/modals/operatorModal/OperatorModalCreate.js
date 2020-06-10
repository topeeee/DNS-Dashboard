import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {
  createOperator,
  getOperators,
  registerOperator,
  toggleOperatorModalCreate
} from "../../store/actions/operatorAction";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from "axios";
import {getStates} from "../../store/actions/stateAction";
import {ZoneUser} from "../../store/actions/zoneAction";
import {getModes} from "../../store/actions/modeAction";

const animatedComponents = makeAnimated();





function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalCreate: () => dispatch(toggleOperatorModalCreate()),
    createOperator: (pin, name, email, phoneNo, officeAddress, status, numberOfVehicle) => dispatch(createOperator(pin, name, email, phoneNo, officeAddress, status, numberOfVehicle)),
    registerOperator: (username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle) => dispatch(registerOperator(username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle)),
    getStates: () => dispatch(getStates()),
    ZoneUser: () => dispatch(ZoneUser()),
    getModes: () => dispatch(getModes()),
    getOperators: () => dispatch(getOperators()),


  };
}

const mapStateToProps = state => ({
  operatorModalCreate: state.operator.OperatorModalCreate,
  operatorCreated: state.operator.operatorCreated,
  states: state.state.states,
  zones: state.zone.zones,
  modes: state.mode.modes,

});

const OperatorModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    operatorModalCreate,
    toggleOperatorModalCreate,
    registerOperator,
    zones,
    states,
    getStates,
    ZoneUser,
    getModes,
    modes,
    operatorCreated,
    getOperators
  } = props;

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "", status: "1", numberOfVehicle: ""});
  // const [pin, setPin] = useState({});
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [zoneSelected, setZoneSelected] = useState([]);
  const [stateSelected, setStateSelected] = useState([]);
  const [modeSelected, setModeSelected] = useState([]);
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, status, numberOfVehicle } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    setOperatorVehicleTypes();
    setOperatorZones();
    setOperatorModes();
    getOperators();
  };

  const setOperatorZones= () => {
    selected1.forEach((res)=> {
      const body = {zoneCode: res.value, operatorId: operatorCreated.id, operatorName: operatorCreated.name};
      axios.post("http://165.22.116.11:7052/api/me/operatorzones/", body)
        .then(res => {
        })
    })
  };

  const setOperatorVehicleTypes= () => {
    selected.forEach((res)=> {
      const body = {vehicleType: res.value, operatorId: operatorCreated.id, operatorName: operatorCreated.name};
      axios.post("http://165.22.116.11:7055/api/me/operatorvehicletypes/", body)
        .then(res => {
        })
    })
  };

  const setOperatorModes= () => {
    selected2.forEach((res)=> {
      const body = {modecode: res.value,  operator_name: operatorCreated.name};
      axios.post(" http://165.22.116.11:7053/api/me/operatormodes/", body)
        .then(res => {
        })
    })
  };

 const handleChange = (selected) => {
     setSelected(selected);
 };

  const handleChange2 = (selected1) => {
    setSelected1(selected1);
  };

  const handleChange3 = (selected2) => {
    setSelected2(selected2);
  };

  const toggle = () => {toggleOperatorModalCreate()};

  const onClickContinue1 = async (e) => {
    e.preventDefault();
    registerOperator(email, "password",  name, email, phoneNo, officeAddress, status, numberOfVehicle);
    setForm1(false);
    setForm2(true);
  };

  const onClickBack1 = () => {
    setForm1(true);
    setForm2(false);
  };

  useEffect(()=> {
    getStates();
    ZoneUser();
    getModes()
  },[]);

  useEffect(()=> {
    if (zones) {
      const body = [];
      zones.forEach((res)=> {
      body.push({ value: res.zone, label: res.zone });
        setZoneSelected(body);
      })
    }
  }, [zones]);


  useEffect(()=> {
    if (states) {
      const body = [];
      states.forEach((res)=> {
        body.push({ value: res.xstate, label: res.xstate });
        setStateSelected(body);
      })
    }
  }, [states]);

  useEffect(()=> {
    if (modes) {
      const body = [];
      modes.forEach((res)=> {
        body.push({ value: res.mode, label: res.mode });
        setModeSelected(body);
      })
    }
  }, [modes]);

  const options = [
    { value: 'Bus', label: 'Bus' },
    { value: 'Car', label: 'Car' },
    { value: 'MiniVan', label: 'MiniVan' }
  ];


  return (
    <div>
      <Modal isOpen={operatorModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Operator</ModalHeader>
        {/*<button onClick={forMe}>button</button>*/}
        <ModalBody>

            {form1 &&
            <Form onSubmit={onClickContinue1}>
            <FormGroup row>
              <Col md="6">
                <Label for="name" className="font-weight-bolder mb-0 text-info">Operator Name</Label>
                <Input type="text"  name="name" onChange={onChange}  value={name}  required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info"> Operator Phone</Label>
                <Input type="text"  name="phoneNo" onChange={onChange} value={phoneNo}  required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Operator Email</Label>
                <Input type="email"  name="email" onChange={onChange}  value={email} required/>
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Office Address</Label>
                <Input type="text"  name="officeAddress" onChange={onChange}  value={officeAddress} required />
              </Col>
              <Col md="6">
                <Label for="name" className="font-weight-bold mb-0 text-info">Number of Vehicles</Label>
                <Input type="number"  name="numberOfVehicle" onChange={onChange} value={numberOfVehicle} required />
              </Col>
            </FormGroup>
              <div className="d-flex justify-content-md-end">
              {form1 &&

              <Button color="primary" type="type" className="mr-1 float-right">Continue</Button>
              }
              </div>
            </Form>}
            {form2 &&
            <Form onSubmit={onSubmit}>
            <FormGroup>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle Types</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                  value={selected}
                  onChange={handleChange}
                  required
                />

              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">State</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={stateSelected}


                />

              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Mode</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={modeSelected}
                  value={selected2}
                  onChange={handleChange3}/>
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Zone</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  value={selected1}
                  options={zoneSelected}
                  onChange={handleChange2}
                  required
                />

              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Geo-fenced area</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options} />
              </Col>
            </FormGroup>
              <div className="d-flex justify-content-md-end">
                {form2  &&
                <Button color="primary" type="button" className="mr-1" onClick={onClickBack1}>Back</Button>
                }
                {form2 &&
                <Button color="primary" type="submit" className="mr-1">Submit</Button>
                }
              </div>
            </Form>}
            <div className="d-flex justify-content-md-end">

              {/*<Button color="primary" type="submit" className="mr-1" >Submit</Button>{' '}*/}
              {/*<Button color="secondary" onClick={toggle}>Cancel</Button>*/}
            </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)( OperatorModalCreate);

