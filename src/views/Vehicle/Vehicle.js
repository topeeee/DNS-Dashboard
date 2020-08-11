import React, {useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {connect} from "react-redux";
import {getVehicles} from "../../store/actions/vehicleAction";
import {isAdmin} from "../../environments/constants";


const Operator = ({getVehicles, match, vehicles})=> {
  // const [operator, setOperator] = useState([]);
  const [newOperator, setNewOperator] = useState({});


  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'danger' :
        status === 'Pending' ? 'warning' :
          'primary'
  };

  function setVehicle() {
    if (vehicles){
      vehicles.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op)
        }
      })
    }
  }
  useEffect(()=>{
    getVehicles();
  },[]);

  useEffect(()=>{
    setVehicle();
  },[vehicles]);


  return (
    <div className="animated fadeIn">
      <Row className="d-flex align-items-center justify-content-center">
        <Col lg={6}>
          <Card>
            <CardHeader className="bg-dark">
              <strong><i className="icon-info pr-1"></i>Vehicle id: {match.params.id}</strong>
            </CardHeader>
            <CardBody >
              <Table>
                {newOperator &&
                <tbody>
                <tr>
                  <td><strong>Vehicle Type</strong></td>
                  <td>{newOperator.vehicle_type}</td>
                </tr>
                  <tr className="w-100">
                    <td><strong>Vehicle Make</strong></td>
                    <td>{newOperator.vehicle_make}</td>
                  </tr>
                <tr className="w-100">
                  <td><strong>Vehicle Model</strong></td>
                  <td>{newOperator.vehicle_model}</td>
                </tr>
                <tr>
                  <td><strong>Plate Number</strong></td>
                  <td>{newOperator.plate_number}</td>
                </tr>
                <tr>
                  <td><strong>Capacity</strong></td>
                  <td>{newOperator.capacity}</td>
                </tr>
                {isAdmin ? <tr>
                  <td><strong>Operator</strong></td>
                  <td>{newOperator.operator}</td>
                </tr>: null}
                <tr>
                  <td><strong>Assigned To Driver</strong></td>
                  {(newOperator.assigned_driver == "1") && <td><Badge color={getBadge("Active")}>Yes</Badge></td>}
                  {((newOperator.assigned_driver == null) || (newOperator.assigned_driver == "null") ) && <td><Badge color={getBadge("Inactive")}>No</Badge></td>}
                </tr>
                {/*<tr>*/}
                {/*  <td><strong>Assigned To Bus Assistant</strong></td>*/}
                {/*  {(newOperator.assigned_BA == "1") && <td><Badge color={getBadge("Active")}>Yes</Badge></td>}*/}
                {/*  {((newOperator.assigned_BA == null) || (newOperator.assigned_BA == "null") ) && <td><Badge color={getBadge("Inactive")}>No</Badge></td>}*/}
                {/*</tr>*/}
                <tr>
                  <td><strong>Status</strong></td>
                  {(newOperator.status === null) && <td><Badge color={getBadge("Pending")}>Pending</Badge></td>}
                  {(newOperator.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td>}
                  {(newOperator.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td>}
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
    getVehicles: () => dispatch(getVehicles()),
  };
}

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,



});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
