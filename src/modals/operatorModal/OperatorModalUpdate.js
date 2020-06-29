import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {
  createOperator,
  getOperators,
  registerOperator,
  toggleOperatorModalUpdate, updateOperator
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
    toggleOperatorModalUpdate: () => dispatch(toggleOperatorModalUpdate()),
    getStates: () => dispatch(getStates()),
    ZoneUser: () => dispatch(ZoneUser()),
    getModes: () => dispatch(getModes()),
    getOperators: () => dispatch(getOperators()),
    updateOperator: (id, name, email, phoneNo, officeAddress,  numberOfVehicle) => dispatch(updateOperator(id, name, email, phoneNo, officeAddress, numberOfVehicle)),


  };
}

const mapStateToProps = state => ({
  operatorModalUpdate: state.operator.OperatorModalUpdate,
  operatorCreated: state.operator.operatorCreated,
  states: state.state.states,
  zones: state.zone.zones,
  modes: state.mode.modes,
  operatorUpdateId: state.operator.operatorUpdateId,
  operators: state.operator.operators,
  isAuthenticated: state.auth.isAuthenticated,

});

const OperatorModalUpdate = (props) => {
  const {
    buttonLabel,
    className,
    operatorModalUpdate,
    toggleOperatorModalUpdate,
    registerOperator,
    zones,
    states,
    getStates,
    ZoneUser,
    getModes,
    modes,
    operatorCreated,
    getOperators,
    operatorUpdateId,
    operators,
    updateOperator,
    isAuthenticated
  } = props;

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "", status: "1", numberOfVehicle: ""});
  // const [pin, setPin] = useState({});
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selected3, setSelected3] = useState([]);
  const [selectedPut, setSelectedPut] = useState([]);
  const [selectedPut1, setSelectedPut1] = useState([]);
  const [selectedPut2, setSelectedPut2] = useState([]);
  const [selectedPut3, setSelectedPut3] = useState([]);
  const [zoneSelected, setZoneSelected] = useState([]);
  const [stateSelected, setStateSelected] = useState([]);
  const [modeSelected, setModeSelected] = useState([]);
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [newOperator, setNewOperator] = useState([]);
  const [operatorName, setOperatorName] = useState('');
  const [operatorVehicle, setOperatorVehicle] = useState([]);
  const [operatorZone, setOperatorZone] = useState([]);
  const [operatorMode, setOperatorMode] = useState([]);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, status, numberOfVehicle } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateOperator(operatorUpdateId, name, email, phoneNo, officeAddress,  numberOfVehicle);
    setOperatorVehicleTypes();
    setOperatorZones();
    setOperatorModes();
    getOperators();
  };


  const setOperatorZones= () => {
    selected1.forEach((res)=> {
      const body = {zoneCode: res.value, operatorId: operatorUpdateId, operatorName: operatorName};
      axios.post("http://165.22.116.11:7052/api/me/operatorzones/", body)
        .then(res => {
        })
    });
    operatorZone.forEach((res)=> {
      axios.delete(`http://165.22.116.11:7052/admin/operatorzones/${res.id}/`)
        .then(res=> {

        })
    })
  };

  const setOperatorVehicleTypes= () => {
    selected.forEach((res)=> {
      const body = {vehicleType: res.value, operatorId: operatorUpdateId, operatorName: operatorName};
      axios.post("http://165.22.116.11:7055/api/me/operatorvehicletypes/", body)
        .then(res => {
        })
    });
    operatorVehicle.forEach((res)=> {
      axios.delete(`http://165.22.116.11:7055/admin/operatorvehicletypes/${res.id}/`)
        .then(res=> {

        })
    })
  };

  const setOperatorModes= () => {
    selected2.forEach((res)=> {
      const body = {modecode: res.value,  operator_name: operatorName};
      axios.post(" http://165.22.116.11:7053/api/me/operatormodes/", body)
        .then(res => {
        })
    });

    operatorMode.forEach((res)=> {
      axios.delete(`http://165.22.116.11:7053/admin/operatormodes/${res.id}/`)
        .then(res=> {

        })
    })
  };

  // const setOperatorZones= () => {
  //   let newOperatorZone = [];
  //
  //   for(let i=0; i<selected1.length; i++) {
  //     newOperatorZone.push({
  //       ...selected1[i],
  //       ...(operatorZone.find((itmInner) => itmInner.zoneCode === selected1[i].value))}
  //     );
  //   }
  //   newOperatorZone.forEach((res)=> {
  //     const body = {zoneCode: res.value, operatorId: res.operatorId, operatorName: res.operatorName};
  //     axios.put(`http://165.22.116.11:7052/api/operatorzones/${res.id}/`, body)
  //       .then(res => {
  //       })
  //   })
  // };
  //
  // const setOperatorVehicleTypes= () => {
  //   let newOperatorVehicle = [];
  //
  //   for(let i=0; i<selected.length; i++) {
  //     newOperatorVehicle.push({
  //       ...selected[i],
  //       ...(operatorVehicle.find((itmInner) => itmInner.vehicleType === selected[i].value))}
  //     );
  //   }
  //   newOperatorVehicle.forEach((res)=> {
  //     const body = {vehicleType: res.value, operatorId: res.operatorId, operatorName: res.operatorName};
  //     axios.put(`http://165.22.116.11:7055/api/operatorvehicletypes/${res.id}/`, body)
  //       .then(res => {
  //       })
  //   })
  // };
  //
  // const setOperatorModes= () => {
  //   let newOperatorMode = [];
  //
  //   for(let i=0; i<selected2.length; i++) {
  //     newOperatorMode.push({
  //       ...selected2[i],
  //       ...(operatorMode.find((itmInner) => itmInner.modecode === selected2[i].value))}
  //     );
  //   }
  //   newOperatorMode.forEach((res)=> {
  //     const body = {modecode: res.value,  operator_name: res.operator_name};
  //     axios.put(` http://165.22.116.11:7053/api/operatormodes/${res.id}/`, body)
  //       .then(res => {
  //       })
  //   })
  // };

  function getNewOperator() {
      if(newOperator){
        newOperator.map(operator => {
          if(operator.id === operatorUpdateId) {
            setOperatorName(operator.name);
            setFormData({name: operator.name, email: operator.email, phoneNo: operator.phoneNo, officeAddress: operator.officeAddress,  numberOfVehicle: operator.numberOfVehicle})
          }
        });
      }
  };

  function getOperatorVehicle(id) {
    axios.get(`http://165.22.116.11:7055/api/operators/?operatorId=${id}`)
      .then(res=> {
        setOperatorVehicle(res.data);
      })
  }

    function getOperatorMode(operatorname) {
    axios.get(`http://165.22.116.11:7053/api/mode/?operator_name=${operatorname}`)
      .then(res=> {
        setOperatorMode(res.data);
      })
  }

  function getOperatorZone(id) {
    axios.get(`http://165.22.116.11:7052/api/operators/?operatorId=${id}`)
      .then(res=> {
        setOperatorZone(res.data);
      })
  }

  const handleChange = (selected) => {
    setSelected(selected);
  };

  const handleChange2 = (selected1) => {
    setSelected1(selected1);
  };

  const handleChange3 = (selected2) => {
    setSelected2(selected2);
  };

  const toggle = () => {toggleOperatorModalUpdate()};

  const onClickContinue1 = async (e) => {
    e.preventDefault();
    setForm1(false);
    setForm2(true);
  };

  const onClickBack1 = () => {
    setForm1(true);
    setForm2(false);
  };

  useEffect(()=> {
  if(operatorUpdateId && operatorName) {
    getOperatorVehicle(operatorUpdateId);
    getOperatorMode(operatorName);
    getOperatorZone(operatorUpdateId)
  }
},[operatorUpdateId, operatorName]);

  useEffect(()=> {
    if (operatorVehicle) {
      const body = [];
      operatorVehicle.forEach((res)=> {
        body.push({ value: res.vehicleType, label: res.vehicleType });
        setSelected(body);
      })
    }
  }, [operatorVehicle]);

  useEffect(()=> {
    if (selected) {

    }
  }, [selected]);

  useEffect(()=> {
    if (operatorZone) {
      const body = [];
      operatorZone.forEach((res)=> {
        body.push({ value: res.zoneCode, label: res.zoneCode });
        setSelected1(body);
      })
    }
  }, [operatorZone]);

  useEffect(()=> {
    if (operatorMode) {
      const body = [];
      operatorMode.forEach((res)=> {
        body.push({ value: res.modecode, label: res.modecode });
        setSelected2(body);
      })
    }
  }, [operatorMode]);


  useEffect(()=> {
    // setId(operatorUpdateId);
    setNewOperator(operators);
    },[operatorUpdateId]);

  useEffect(()=> {
    getNewOperator();
  }, [newOperator, operatorUpdateId]);

  useEffect(()=> {
    if(isAuthenticated) {
      getStates();
      ZoneUser();
      getModes()
    }
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
        setSelected3(body)
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
      <Modal isOpen={operatorModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Operator</ModalHeader>
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
                  value={selected3}


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

export default  connect( mapStateToProps, mapDispatchToProps)( OperatorModalUpdate);

