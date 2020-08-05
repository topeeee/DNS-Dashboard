import React, {useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {getOperators, searchOperator} from "../../../store/actions/operatorAction";
import {connect} from "react-redux";
import axios from "axios"
import api from "../../../environments/environment";


const Operator = ({getOperators, operators, operator, isLoading,  searchOperator, error, match, states})=> {

  const [newOperator, setNewOperator] = useState({});
  const [operatorVehicle, setOperatorVehicle] = useState([]);
  const [operatorZone, setOperatorZone] = useState([]);
  const [operatorMode, setOperatorMode] = useState([]);

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'danger' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  };

 async function getOperatorVehicle() {
   try {
     const  res = await  axios.get(`${api.operatorVehicleTypes}/api/operators/?operatorId=${match.params.id}`);
     setOperatorVehicle(res.data);
   }catch (e) {
   }
  }
 async function getOperatorMode() {
    try {
    const res = await  axios.get(`${api.operatorMode}/api/mode/?operator_name=${newOperator.name}`);
      setOperatorMode(res.data);
    }catch (e) {

    }
  }

 async function getOperatorZone() {
    try {
      const res = await axios.get(`${api.operatorZone}/api/operators/?operatorId=${match.params.id}`)
      setOperatorZone(res.data);
    }catch (e) {

    }
  }

  function setOperator() {
    if (operators){
      operators.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op)
        }
      })
    }
  }
  useEffect(()=>{
    getOperators();
    getOperatorVehicle();
    getOperatorZone()
  },[]);

useEffect(()=>{
  setOperator();
},[operators]);

  useEffect(()=>{
  if(newOperator.name) {
    getOperatorMode()
  }
  },[newOperator]);


    return (
      <div className="animated fadeIn">
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={6}>
            <Card>
              <CardHeader className="bg-dark">
                <strong><i className="icon-info pr-1"></i>User id: {match.params.id}</strong>
              </CardHeader>
              <CardBody >
                <Table>
                  {newOperator &&
                  <tbody>
                  <tr>
                    <td><strong>Operator Name</strong></td>
                    <td>{newOperator.name}</td>
                  </tr>
                  <tr className="w-100">
                    <td><strong>Operator Phone</strong></td>
                    <td>{newOperator.phoneNo}</td>
                  </tr>
                  <tr>
                    <td><strong>Operator Email</strong></td>
                    <td>{newOperator.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Office Address</strong></td>
                    <td>{newOperator.officeAddress}</td>
                  </tr>
                  <tr>
                    <td><strong>Number of Vehicles</strong></td>
                    <td>{newOperator.numberOfVehicle}</td>
                  </tr>
                  <tr>
                    <td><strong>Operator Email</strong></td>
                    <td>{newOperator.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Vehicle Modes</strong></td>
                    {operatorVehicle && operatorVehicle.map((vehicle, index) =>
                      <td  key={index}>{vehicle.vehicleType}</td>
                    )}
                  </tr>
                  <tr>
                    <td><strong>Service</strong></td>
                    {operatorMode && operatorMode.map((mode, index) =>
                      <td  key={index}>{mode.modecode}</td>
                    )}
                  </tr>
                  <tr>
                    <td><strong>Zone</strong></td>
                    {operatorZone && operatorZone.map((zone, index) =>
                      <td  key={index}>{zone.zoneCode}</td>
                    )}
                  </tr>
                  {/*<tr>*/}
                  {/*  <td><strong>State</strong></td>*/}
                  {/*  {states && states.map((state, index) =>*/}
                  {/*    <td  key={index}>{state.xstate}</td>*/}
                  {/*  )}*/}
                  {/*</tr>*/}
                  <tr>
                    <td><strong>Status</strong></td>
                    {(newOperator.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
                    {(newOperator.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
                  </tr>
                  </tbody>
                  }

                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )

}

function mapDispatchToProps(dispatch) {
  return {
    getOperators: () => dispatch(getOperators()),
    searchOperator: (id) => dispatch(searchOperator(id)),
  };
}

const mapStateToProps = state => ({
  drivers: state.driver.drivers,
  operators: state.operator.operators,
  operator: state.operator.operator,
  error: state.operator.error,
  isLoading: state.operator.isLoading,
  states: state.state.states,


});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
