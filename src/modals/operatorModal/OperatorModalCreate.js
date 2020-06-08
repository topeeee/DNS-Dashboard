import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {createOperator, registerOperator, toggleOperatorModalCreate} from "../../store/actions/operatorAction";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from "axios";

const animatedComponents = makeAnimated();

const options = [
  { value: 'Bus', label: 'Bus' },
  { value: 'Car', label: 'Car' },
  { value: 'MiniVan', label: 'MiniVan' }
];



function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalCreate: () => dispatch(toggleOperatorModalCreate()),
    createOperator: (pin, name, email, phoneNo, officeAddress, status, numberOfVehicle) => dispatch(createOperator(pin, name, email, phoneNo, officeAddress, status, numberOfVehicle)),
    registerOperator: (username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle) => dispatch(registerOperator(username, password, name, email, phoneNo, officeAddress, status, numberOfVehicle))


  };
}

const mapStateToProps = state => ({
  operatorModalCreate: state.operator.OperatorModalCreate,
  operatorId: state.operator.operatorId

});

const OperatorModalCreate = (props) => {
  const {
    buttonLabel,
    className,
    createOperator,
    operatorModalCreate,
    toggleOperatorModalCreate,
    registerOperator,
    operatorId
  } = props;

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "", status: "1", numberOfVehicle: ""});
  // const [pin, setPin] = useState({});
  const [selected, setSelected] = useState([]);
  const [newSelected, setNewSelected] = useState('');
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, status, numberOfVehicle } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

  };

  const forMe = () => {
    newSelected.forEach((res)=> {
      const body = {vehicleType: res, operatorId: 46, operatorName: "zeno"};
      axios.post("http://165.22.116.11:7055/api/me/operatorvehicletypes/", body)
        .then(res => {
          console.log(res.data)
        })
    })
  };

 const handleChange = (selected) => {
     setSelected(selected);
 };
  const sweeterArray = () => {
    if(selected) {
      selected.map(sweetItem => {
        return sweetItem.value
      });

    }
  };

 useEffect(()=> {
   setNewSelected(sweeterArray);
   },[selected]);

  const toggle = () => {toggleOperatorModalCreate()};

  const onClickContinue1 = () => {
    registerOperator(email, "password",  name, email, phoneNo, officeAddress, status, numberOfVehicle);
    setForm1(false);
    setForm2(true);
  };

  const onClickBack1 = () => {
    setForm1(true);
    setForm2(false);
  };

  // useEffect(()=> {
  //   if(operatorId){
  //     setPin(operatorId.id);
  //
  //   }
  //
  // },[operatorId]);

  // useEffect(()=> {
  //   if(pin) {
  //     createOperator(pin, name, email, phoneNo, officeAddress, status, numberOfVehicle);
  //   }
  // },[pin]);

  return (
    <div>
      <Modal isOpen={operatorModalCreate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Create Operator</ModalHeader>
        {/*<button onClick={forMe}>button</button>*/}
        <ModalBody>
          <Form onSubmit={onSubmit}>
            {form1 &&
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
            </FormGroup>}
            {form2 &&
            <FormGroup>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Vehicle Types</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options} />
              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">State</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                  value={selected}
                  onChange={handleChange}
                />

              </Col>
              <Col md="12">
                <Label for="name" className="font-weight-bold mb-0 text-info">Mode</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options} />
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
                <Label for="name" className="font-weight-bold mb-0 text-info">Geo-fenced area</Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options} />
              </Col>
            </FormGroup>}

            <div className="d-flex justify-content-md-end">
              {form2  &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickBack1}>Back</Button>
              }
              {form1 &&
              <Button color="primary" type="button" className="mr-1" onClick={onClickContinue1}>Continue</Button>
              }
              {form2 &&
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

export default  connect( mapStateToProps, mapDispatchToProps)( OperatorModalCreate);

