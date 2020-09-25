import React, {useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {connect} from "react-redux";
import axios from "axios"
import {getDrivers} from "../../store/actions/driverAction";
import api from "../../environments/environment";
import {isAdmin} from "../../environments/constants";


const Operator = ({getDrivers, match, drivers})=> {
  const [newOperator, setNewOperator] = useState({});

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Inactive' ? 'danger' :
            'primary'
  };


  function setDriver() {
    if (drivers){
      drivers.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op);
        }
      })
    }
  }




  useEffect(()=>{
    getDrivers();
  },[]);

  useEffect(()=>{
    setDriver();
  },[drivers]);


  return (
    <div className="animated fadeIn">
      <Row className="d-flex align-items-center justify-content-center">
        <Col lg={6}>
          <Card>
            <CardHeader className={isAdmin? 'bg-dark': 'bg-twitter'} style={{color: '#696969'}}>
              <strong className="text-white"><i className="icon-info pr-1"></i>Driver id: {match.params.id}</strong>
            </CardHeader>
            <CardBody >
              <Table>
                {newOperator &&
                <tbody>
                <tr>
                  <td><strong>Driver  FirstName</strong></td>
                  <td>{newOperator.firstName}</td>
                </tr>
                  <tr className="w-100">
                    <td><strong>Driver LastName</strong></td>
                    <td>{newOperator.lastName}</td>
                  </tr>
                <tr className="w-100">
                  <td><strong>Driver Phone</strong></td>
                  <td>{newOperator.phoneNo}</td>
                </tr>
                <tr>
                  <td><strong>Driver Email</strong></td>
                  <td>{newOperator.email}</td>
                </tr>
                <tr>
                  <td><strong>Driver Address</strong></td>
                  <td>{newOperator.residentialAddress}</td>
                </tr>
                <tr>
                  <td><strong>License Number</strong></td>
                  <td>{newOperator.licenseNo}</td>
                </tr>
                <tr>
                  <td><strong>Date Of Birth</strong></td>
                  <td>{newOperator.dateOfBirth}</td>
                </tr>
                <tr>
                  <td><strong>State Of Origin</strong></td>
                  <td>{newOperator.stateOfOrigin}</td>
                </tr>
                <tr>
                  <td><strong>Eye Glasses</strong></td>
                  <td>{newOperator.eyeGlasses}</td>
                </tr>
                <tr>
                  <td><strong>Blood Group</strong></td>
                  <td>{newOperator.bloodGroup}</td>
                </tr>
                <tr>
                  <td><strong>Facial Mark</strong></td>
                  <td>{newOperator.facialMark}</td>
                </tr>
                <tr>
                  <td><strong>Disability</strong></td>
                  <td>{newOperator.disability}</td>
                </tr>
                <tr>
                  <td><strong>NIN</strong></td>
                  <td>{newOperator.nin}</td>
                </tr>
                <tr>
                  <td><strong>LASDRI Id</strong></td>
                  <td>{newOperator.lasdriId}</td>
                </tr>
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

}

function mapDispatchToProps(dispatch) {
  return {
    getDrivers: () => dispatch(getDrivers()),
  };
}

const mapStateToProps = state => ({
  drivers: state.driver.drivers,
});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
