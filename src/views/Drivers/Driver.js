import React, {useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from "react-redux";
import {getDrivers} from "../../store/actions/driverAction";
import {isAdmin} from "../../environments/constants";


const Operator = ({getDrivers, match, drivers})=> {
  const [newOperator, setNewOperator] = useState({});
  const [now, setNow] = useState(10)
  const [variant, setVariant] = useState('danger')

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
  if(newOperator) {
    if(newOperator.lasdriIdStatus ==1 && newOperator.licenseStatus == 1 && newOperator.ninStatus == 1) {
      setNow(100)
      setVariant('success')
    } else if(newOperator.lasdriIdStatus ==1 && newOperator.licenseStatus == 0 && newOperator.ninStatus ==0){
      setNow(30)
      setVariant('danger')
    } else if(newOperator.lasdriIdStatus ==1 && ((newOperator.licenseStatus == 1 && newOperator.ninStatus ==0) || (newOperator.licenseStatus == 0 && newOperator.ninStatus == 1))){
      setNow(60)
      setVariant('warning')
    }
  }
},[newOperator])


  useEffect(()=>{
    getDrivers();
  },[]);

  useEffect(()=>{
    setDriver();
  },[drivers]);



  const progressInstance = <ProgressBar  variant={variant} now={now} label={`${now}%`} />;

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
                  <td><strong>Progress</strong></td>
                  <td>{progressInstance}</td>
                </tr>
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
                  {newOperator.facialMark == 0 &&<td>No</td>}
                  {newOperator.facialMark == 1 &&<td>Yes</td>}
                  {!newOperator.facialMark &&<td>Not Available</td>}
                </tr>
                <tr>
                  <td><strong>Disability</strong></td>
                  <td>{newOperator.disability}</td>
                </tr>
                <tr>
                  <td><strong>License Number</strong></td>
                  <td>{newOperator.licenseNo}</td>
                </tr>

                <tr>
                  <td><strong>NIN</strong></td>
                  <td>{newOperator.nin? newOperator.nin: 'Not Available'}</td>
                </tr>
                <tr>
                  <td><strong>LASDRI Id</strong></td>
                  <td>{newOperator.lasdriId?newOperator.lasdriId: 'Not Available'}</td>
                </tr>
                <tr>
                  <td><strong>License Number Verified</strong></td>
                  {(newOperator.licenseStatus === '1') && <td><Badge color={getBadge("Active")}>Yes</Badge></td> }
                  {(newOperator.licenseStatus === '0') && <td><Badge color={getBadge("Inactive")}>No</Badge></td> }
                </tr>
                <tr>
                  <td><strong>NIN Verified</strong></td>
                  {(newOperator.ninStatus === '1') && <td><Badge color={getBadge("Active")}>Yes</Badge></td> }
                  {(newOperator.ninStatus === '0') && <td><Badge color={getBadge("Inactive")}>No</Badge></td> }
                </tr>
                <tr>
                  <td><strong>LASDRI Verified</strong></td>
                  {(newOperator.lasdriIdStatus === '1') && <td><Badge color={getBadge("Active")}>Yes</Badge></td> }
                  {(newOperator.lasdriIdStatus === '0') && <td><Badge color={getBadge("Inactive")}>No</Badge></td> }
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
