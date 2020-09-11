import React, {useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {getOperators, searchOperator} from "../../../store/actions/operatorAction";
import {connect} from "react-redux";
import axios from "axios"
import api from "../../../environments/environment";
import {getVehicles} from "../../../store/actions/vehicleAction";
import {isAdmin, isLamata} from "../../../environments/constants";


const Operator = ({getOperators, operators, match, states, vehicles, getVehicles})=> {

  const [operator, setOperator] = useState({});
  const [operatorZone, setOperatorZone] = useState('');
  const [operatorStation, setOperatorStation] = useState('');
  const [operatorMode, setOperatorMode] = useState('');
  const [operatorService, setOperatorService] = useState('')
  const [suspension, setSuspension] = useState('');
  const [penalty, setPenalty] = useState('')

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'danger' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  };


 async function getOperatorMode() {
   const modeArray = [];
    try {
    const res = await  axios.get(`${api.operatorMode}/api/mode/?operator_name=${operator.name}`);
    res.data.map(mode=> {
      modeArray.push(mode.modecode)
    })
      setOperatorMode(modeArray.join(", "));
    }catch (e) {

    }
  }

 async function getOperatorZone() {
   const zoneArray = [];
   try {
     const res = await axios.
     get(`${api.operatorZone}/api/operators/?operatorId=${match.params.id}`)
     res.data.map(zone=> {
       zoneArray.push(zone.zoneCode)
     })
     setOperatorZone(zoneArray.join(", "));

   } catch (e) {

   }
 }


  async function getOperatorStation() {
    const stationArray = [];
    try {
      const res = await axios.get(`${api.operatorStation}/api/station/?operator_name=${operator.name}`)
      res.data.map(station=> {
        stationArray.push(station.stationcode)
      })
      setOperatorStation(stationArray.join(", "));
    }catch (e) {

    }
  }

  async function getOperatorService() {
    const serviceArray = [];
    try {
      const res = await axios.get(`${api.operatorService}/api/mode/?operator_name=${operator.name}`)
      res.data.map(service=> {
        serviceArray.push(service.servicecode)
      })
      setOperatorService(serviceArray.join(", "));
    }catch (e) {

    }
  }




  async function getComment() {
    try {
      const res = await axios.get(`${api.comment}/api/query/comments?role=Operator&userId=${match.params.id}`)
      setSuspension(res.data[0].comment)
      setPenalty(res.data[0].commentType)
    }catch (e) {}
  }

  function getOperator() {
    if (operators){
      operators.map(operator=> {
        if(operator.id == match.params.id){
          setOperator(operator)
        }
      })
    }
  }
  useEffect(()=>{
    getOperators();
    getComment();
    getVehicles();
  },[]);

useEffect(()=>{
  getOperator();
},[operators]);

  useEffect(()=>{
  if(operator.name) {
    getOperatorMode()
    getOperatorZone();
    getOperatorStation();
    getOperatorService();
  }
  },[operator]);


    return (
      <div className="animated fadeIn">
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={6}>
            <Card>
              <CardHeader className={isAdmin? 'bg-dark': 'bg-twitter'} style={{color: '#696969'}}>
                <strong className="text-white"><i className="icon-info pr-1"></i>User id: {match.params.id}</strong>
              </CardHeader>
              <CardBody >
                <Table>
                  {operator &&
                  <tbody>
                  <tr>
                    <td><strong>Company Name</strong></td>
                    <td>{operator.name}</td>
                  </tr>
                  <tr className="w-100">
                    <td><strong>Company Phone</strong></td>
                    <td>{operator.phoneNo}</td>
                  </tr>
                  <tr>
                    <td><strong>Company Email</strong></td>
                    <td>{operator.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Office Address</strong></td>
                    <td>{operator.officeAddress}</td>
                  </tr>
                  <tr>
                    <td><strong>Number of Vehicles</strong></td>
                    {(vehicles && operator.name) ? <td>{vehicles.filter(vehicle => vehicle.operator === operator.name).length}</td>
                      :<td>0</td>}
                  </tr>
                  <tr>
                    <td><strong>Company Email</strong></td>
                    <td>{operator.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Contact Person Name</strong></td>
                    <td>{operator.contactName}</td>
                  </tr>
                  <tr>
                    <td><strong>Contact Person Phone</strong></td>
                    <td>{operator.contactPhoneNo}</td>
                  </tr>
                  <tr>
                    <td><strong>Contact Person Email</strong></td>
                    <td>{operator.contactEmail}</td>
                  </tr>
                  <tr>
                    <td><strong>Mode(s)</strong></td>
                    <td>{operatorMode}</td>
                  </tr>
                  <tr>
                    <td><strong>Zone(s)</strong></td>
                    <td>{operatorZone}</td>
                  </tr>
                  {operatorStation && <tr>
                    <td><strong>Station(s)</strong></td>
                    <td>{operatorStation}</td>
                  </tr>}
                  <tr>
                    <td><strong>Service(s)</strong></td>
                    <td>{operatorService}</td>
                  </tr>
                  {/*<tr>*/}
                  {/*  <td><strong>State</strong></td>*/}
                  {/*  {states && states.map((state, index) =>*/}
                  {/*    <td  key={index}>{state.xstate}</td>*/}
                  {/*  )}*/}
                  {/*</tr>*/}
                  {operator.status === "0"?
                    <tr>
                      <td><strong>Reason for Suspension</strong></td>
                      <td>{suspension}</td>
                    </tr>
                  : null}

                  {operator.status === "0"?
                    <tr>
                      <td><strong>Penalty</strong></td>
                      <td>{penalty}</td>
                    </tr>
                    : null}
                    <tr>
                    <td><strong>Status</strong></td>
                    {(operator.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
                    {(operator.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
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
    getVehicles: () => dispatch(getVehicles()),
  };
}

const mapStateToProps = state => ({
  drivers: state.driver.drivers,
  operators: state.operator.operators,
  error: state.operator.error,
  isLoading: state.operator.isLoading,
  states: state.state.states,
  vehicles: state.vehicle.vehicles,



});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
