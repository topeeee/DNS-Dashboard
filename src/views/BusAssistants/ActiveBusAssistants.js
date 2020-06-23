import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import {getBusAssistants, searchBusAssistants, approveBusAssistants, clearBusAssistantsVehicleId} from "../../store/actions/busAssistantAction";
import axios from "axios";
import api from "../../environments/environment";
import BusAssistantHeader from "./components/BusAssistantHeader";
import BusAssistantActionBtn from "./components/BusAssistantActionBtn";




function UserRow(props) {
  const user = props.user;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Inactive' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.phoneNo}</td>
      <td>{user.residentialAddress}</td>
      <td>{user.email}</td>
      {/*<td>{user.appstatus}</td>*/}
      <td>Not Available</td>
      <td>Not Available</td>
      {(user.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
      {(user.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
      {(user.status === "") && <td><Badge color={getBadge("Pending")}>Pending</Badge></td> }
      <td> <BusAssistantActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const ActiveBusAssistants = ({getBusAssistants, busAssistants, busAssistant, isLoading,  searchBusAssistants, error,  approveBusAssistants, approveId, getBusAssistantVehicleId, getBusAssistantVehicleId2, clearBusAssistantsVehicleId}) => {
  const [formData, setFormData] = useState('');
  const [driverVehicle, setDriverVehicle] = useState([]);






  useEffect(()=>{
    if(formData === ''){
      getBusAssistants();

    }
  },[formData]);

  function getDriverVehicle() {
    axios.get("http://165.22.116.11:7054/api/me/drivervehicles/")
      .then(res=> {
        setDriverVehicle(res.data);
      })
  }

  function changeDriverVehicleStatus(id, status) {
    driverVehicle.map(DV=> {
      if(DV.driverId == id) {
        assignVehicle(DV.vehicleId, status)
      }
    })
  }

  function assignVehicle(id, status) {
    axios.put(`${api.vehicle}/api/assign/${id}/?assign=${status}`)
      .then(res=> {
        if(res) {
          clearBusAssistantsVehicleId()
        }
      })
  }

  useEffect(()=> {
    getDriverVehicle();
  },[]);

  useEffect(()=> {
    if(getBusAssistantVehicleId) {
      changeDriverVehicleStatus(getBusAssistantVehicleId, "null")
    }
  },[getBusAssistantVehicleId]);

  useEffect(()=> {
    if(getBusAssistantVehicleId2) {
      changeDriverVehicleStatus(getBusAssistantVehicleId2, "1")
    }
  },[getBusAssistantVehicleId2]);



  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchBusAssistants(formData)
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <form className="w-100 d-flex align-items-center" onSubmit={onSearch}>
                  <Input type="text"
                         // placeholder="Search by Id"
                         className="w-25"
                         name="formData"
                         value={formData}
                         onChange={onChange}
                  />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>
              </div>
              <div className="w-25 text-right">
                <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />
                <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />
                <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />
              </div>
            </CardHeader>
            <CardHeader className="d-flex align-items-center">
              <div className="w-25">
                Active Bus Assistants
              </div>
              <BusAssistantHeader />
              {/*<BusAssistantHeader />*/}
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {/*{isLoading && loading()}*/}
              {(busAssistants && busAssistants.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Driver Available</div>}
              {((busAssistants && busAssistants.length > 0) || busAssistant) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col"> Phone No</th>
                  <th scope="col">Residential Address</th>
                  <th scope="col">Email Address</th>
                  {/*<th scope="col">App status</th>*/}
                  <th scope="col">Rating</th>
                  <th scope="col">Review</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {busAssistants && busAssistants.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.status === "1").map((user, index) =>
                  <UserRow key={index} user={user} approved={approveBusAssistants} driverVehicle={driverVehicle}/>
                )}
                {busAssistant &&
                <UserRow user={busAssistant} approved={approveBusAssistants}/>
                }
                </tbody>
              </Table>}
            </CardBody>
            }
          </Card>
        </Col>
      </Row>
    </div>
  )
};
function mapDispatchToProps(dispatch) {
  return {
    getBusAssistants: () => dispatch(getBusAssistants()),
    searchBusAssistants: (id) => dispatch(searchBusAssistants(id)),
    approveBusAssistants: (id) =>dispatch(approveBusAssistants(id)),
    clearBusAssistantsVehicleId: () =>dispatch(clearBusAssistantsVehicleId())
  };
}

const mapStateToProps = state => ({
  busAssistants: state.busAssistants.busAssistants,
  busAssistant: state.busAssistants.busAssistant,
  error: state.busAssistants.error,
  isLoading: state.busAssistants.isLoading,
  approveId: state.busAssistants.approveId,
  getBusAssistantVehicleId: state.busAssistants.getBusAssistantVehicleId,
  getBusAssistantVehicleId2: state.busAssistants.getBusAssistantVehicleId2,
});

export default connect(mapStateToProps,mapDispatchToProps)(ActiveBusAssistants);
