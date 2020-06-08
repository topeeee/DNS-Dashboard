import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {updateOperator, toggleOperatorModalUpdate} from "../../store/actions/operatorAction";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
  { value: 'Bus', label: 'Bus' },
  { value: 'Car', label: 'Car' },
  { value: 'MiniVan', label: 'MiniVan' }
];



function mapDispatchToProps(dispatch) {
  return {
    toggleOperatorModalUpdate: () => dispatch(toggleOperatorModalUpdate()),
    updateOperator: (id, name, email, phoneNo, officeAddress,  numberOfVehicle) => dispatch(updateOperator(id, name, email, phoneNo, officeAddress, numberOfVehicle)),


  };
}

const mapStateToProps = state => ({
  operatorModalUpdate: state.operator.OperatorModalUpdate,
  operatorUpdateId: state.operator.operatorUpdateId,
  operators: state.operator.operators

});

const OperatorModalUpdate = (props) => {
  const {
    className,
    updateOperator,
    operatorModalUpdate,
    toggleOperatorModalUpdate,
    operatorUpdateId,
    operators
  } = props;

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "",  numberOfVehicle: ""});
  const [id, setId] = useState({});
  const [selected, setSelected] = useState([]);
  const [newSelected, setNewSelected] = useState('');
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [newOperator, setNewOperator] = useState([]);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, numberOfVehicle } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    updateOperator(id, name, email, phoneNo, officeAddress,  numberOfVehicle);
  };


  function getNewOperator() {
      if(newOperator){
        newOperator.map(operator => {
          if(operator.id === operatorUpdateId) {
            setFormData({name: operator.name, email: operator.email, phoneNo: operator.phoneNo, officeAddress: operator.officeAddress,  numberOfVehicle: operator.numberOfVehicle})
          }
        });
      }
  };

 const handleChange = (selected) => {
     setSelected(selected);
 };
  const sweeterArray = selected.map(sweetItem => {
    return sweetItem.value
  });


 useEffect(()=> {
   setNewSelected(sweeterArray.toString());
   },[selected]);

  const toggle = () => {toggleOperatorModalUpdate()};

  const onClickContinue1 = () => {
    setForm1(false);
    setForm2(true);
  };

  const onClickBack1 = () => {
    setForm1(true);
    setForm2(false);
  };

  useEffect(()=> {
    setId(operatorUpdateId);
    setNewOperator(operators);
    },[operatorUpdateId]);

  useEffect(()=> {
    getNewOperator();
  }, [newOperator]);

  return (
    <div>
      <Modal isOpen={operatorModalUpdate} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">Update Operator</ModalHeader>
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
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default  connect( mapStateToProps, mapDispatchToProps)(OperatorModalUpdate);

