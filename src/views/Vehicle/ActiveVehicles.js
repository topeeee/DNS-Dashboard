import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getVehicles, searchVehicle} from "../../store/actions/vehicleAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import VehicleHeader from "./components/VehicleHeader";
import VehicleActionBtn from "./components/VehicleActionBtn";
import {admin} from "../../environments/constants";

const isAdmin = sessionStorage.getItem('isAdmin');


function UserRow(props) {
  const user = props.user;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
          status === 'Inactive' ? 'danger' :
            status === 'Pending' ? 'warning' :
            'primary'
  };
  return (

    <tr key={user.id}>
      <td>{user.vehicle_type}</td>
      <td>{user.vehicle_make}</td>
      <td>{user.vehicle_model}</td>
      <td>{user.plate_number}</td>
      <td>{user.capacity}</td>
      {isAdmin === admin ?  <td>{user.operator}</td>: null}
      {/*<td>{user.assigned}</td>*/}
      {(user.assigned == "1") && <td><Badge color={getBadge("Active")}>Yes</Badge></td>}
      {((user.assigned == null) ||(user.assigned == "null") ) && <td><Badge color={getBadge("Inactive")}>No</Badge></td>}
      {/*<td>{user.status}</td>*/}
      {(user.status === null) && <td><Badge color={getBadge("Pending")}>Pending</Badge></td>}
      {(user.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td>}
      {(user.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td>}
      <td> <VehicleActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const ActiveVehicles = ({getVehicles, vehicles, vehicle, isLoading,  searchVehicle, error}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getVehicles()
    }
  },[formData]);


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchVehicle(formData)
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
                Active Vehicles
              </div>
              <VehicleHeader />
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {/*{isLoading && loading()}*/}
              {(vehicles && vehicles.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Vehicles Available</div>}
              {((vehicles && vehicles.length > 0) || vehicle) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">Vehicle Make</th>
                  <th scope="col">Vehicle Model</th>
                  <th scope="col">Vehicle Plate number</th>
                  <th scope="col">Capacity</th>
                  {isAdmin === admin ?  <th scope="col">Operator</th>: null}
                  <th scope="col">Assigned</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {vehicles && vehicles.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.status === "1").map((vehicle, index) =>
                  <UserRow key={index} user={vehicle}/>
                )}
                {vehicle &&
                <UserRow user={vehicle}/>
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
    getVehicles: () => dispatch(getVehicles()),
    searchVehicle: (id) => dispatch(searchVehicle(id))
  };
}

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
  vehicle: state.vehicle.vehicle,
  error: state.vehicle.error,
  isLoading: state.vehicle.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(ActiveVehicles);
