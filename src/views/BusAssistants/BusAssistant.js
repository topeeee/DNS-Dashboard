import React, {useEffect, useState} from 'react';
import {Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {connect} from "react-redux";
import {getBusAssistants, getOsStation} from "../../store/actions/busAssistantAction";
import {isLamata} from "../../environments/constants";


const BusAssistant = ({getBusAssistants, match, busAssistants, getOaStation, oaStations})=> {

  const [operationAssistant, setNewOperationAssistant] = useState({});
  const [station, setStation] = useState('');

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Inactive' ? 'danger' :
            'primary'
  };


  function setBusAssistant() {
    if (busAssistants){
      busAssistants.map(operationAssistant=> {
        if(operationAssistant.id == match.params.id){
          setNewOperationAssistant(operationAssistant);
        }
      })
    }
  }


  useEffect(()=>{
    getBusAssistants();
    getOaStation();
  },[]);

  useEffect(()=>{
    setBusAssistant();
  },[busAssistants]);






  useEffect(()=> {
    if(oaStations) {
      const oaStationArr = [];
      oaStations.filter(station => station.operationassitantId == match.params.id)
        .map(oaStation => {
          oaStationArr.push(oaStation.stationCode)
        })
      setStation(oaStationArr.join(", "))
    }
  })

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
                {operationAssistant &&
                <tbody>
                <tr>
                  <td><strong>FirstName</strong></td>
                  <td>{operationAssistant.firstName}</td>
                </tr>
                  <tr className="w-100">
                    <td><strong>LastName</strong></td>
                    <td>{operationAssistant.lastName}</td>
                  </tr>
                <tr className="w-100">
                  <td><strong>Phone</strong></td>
                  <td>{operationAssistant.phoneNo}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>{operationAssistant.email}</td>
                </tr>
                <tr>
                  <td><strong>Address</strong></td>
                  <td>{operationAssistant.residentialAddress}</td>
                </tr>
                <tr>
                  <td><strong>Station(s)</strong></td>
                  <td>{station}</td>
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  {(operationAssistant.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
                  {(operationAssistant.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
                  {(operationAssistant.status === "") && <td><Badge color={getBadge("Pending")}>Pending</Badge></td> }
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
    getOaStation: () => dispatch(getOsStation())
  };
}

const mapStateToProps = state => ({
  busAssistants: state.busAssistants.busAssistants,
  oaStations: state.busAssistants.oaStations,



});

export default connect(mapStateToProps,mapDispatchToProps)(BusAssistant);
