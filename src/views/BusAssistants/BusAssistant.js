import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {connect} from "react-redux";
import {getBusAssistants} from "../../store/actions/busAssistantAction";
import api from "../../environments/environment";
import {isLamata} from "../../environments/constants";


const BusAssistant = ({getBusAssistants, operators, operator, isLoading,  searchOperator, error, match, busAssistants})=> {
  const [operatorId, setOperatorId] = useState('');
  const [newOperator, setNewOperator] = useState({});
  const [driverVehicle, setDriverVehicle] = useState([]);
  const [vehicleId, setVehicleId] = useState('');
  const [operatorName, setOperatorName] = useState('');

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Inactive' ? 'danger' :
            'primary'
  };


  function setBusAssistant() {
    if (busAssistants){
      busAssistants.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op);
          setOperatorId(op.operatorid)
        }
      })
    }
  }




  async function getOperator(id) {
    try {
      const res = await axios.get(`${api.operator}/api/operators/${id}/`);
      setOperatorName(res.data.name)
    }catch (e) {

    }
  }

  useEffect(()=>{
    getBusAssistants();
  },[]);

  useEffect(()=>{
    setBusAssistant();
  },[busAssistants]);



  useEffect(()=> {
    if(operatorId) {
      getOperator(operatorId);
    }
  },[operatorId]);

  useEffect(()=> {
    if(match.params.id && driverVehicle){
      driverVehicle.map((driver=> {
        if(driver.busassitantId == match.params.id){
          setVehicleId(driver.vehicleId);
        }
      }))
    }
  },[match.params.id, driverVehicle]);


  return (
    <div className="animated fadeIn">
      <Row className="d-flex align-items-center justify-content-center">
        <Col lg={6}>
          <Card>
            <CardHeader className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
              <strong className="text-white"><i className="icon-info pr-1"></i>User id: {match.params.id}</strong>
            </CardHeader>
            <CardBody >
              <Table>
                {newOperator &&
                <tbody>
                <tr>
                  <td><strong>FirstName</strong></td>
                  <td>{newOperator.firstName}</td>
                </tr>
                  <tr className="w-100">
                    <td><strong>LastName</strong></td>
                    <td>{newOperator.lastName}</td>
                  </tr>
                <tr className="w-100">
                  <td><strong>Phone</strong></td>
                  <td>{newOperator.phoneNo}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>{newOperator.email}</td>
                </tr>
                <tr>
                  <td><strong>Address</strong></td>
                  <td>{newOperator.residentialAddress}</td>
                </tr>
                <tr>
                  <td><strong>Mode</strong></td>
                  <td>{newOperator.assignedMode}</td>
                </tr>
                {/*<tr>*/}
                {/*  <td><strong>Bank Name</strong></td>*/}
                {/*  <td>{newOperator.bankName}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Account Name</strong></td>*/}
                {/*  <td>{newOperator.accountName}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Account Number</strong></td>*/}
                {/*  <td>{newOperator.accountNumber}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Role</strong></td>*/}
                {/*  <td>{newOperator.role}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Area</strong></td>*/}
                {/*  <td>{newOperator.area}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Zone</strong></td>*/}
                {/*  <td>{newOperator.zone}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td><strong>Operator</strong></td>*/}
                {/*  <td>{operatorName}</td>*/}
                {/*</tr>*/}
                <tr>
                  <td><strong>Status</strong></td>
                  {(newOperator.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
                  {(newOperator.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
                  {(newOperator.status === "") && <td><Badge color={getBadge("Pending")}>Pending</Badge></td> }
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

};

function mapDispatchToProps(dispatch) {
  return {
    getBusAssistants: () => dispatch(getBusAssistants()),
  };
}

const mapStateToProps = state => ({
  busAssistants: state.busAssistants.busAssistants,



});

export default connect(mapStateToProps,mapDispatchToProps)(BusAssistant);
