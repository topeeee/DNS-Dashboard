import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getVehiclesRequestMe, searchVehicle} from "../../store/actions/vehicleAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import {isAdmin, isOperator, OperatorName} from "../../environments/constants";
import {getPartners} from "../../store/actions/partnerAction";
import MeRequestVehicleActionBtn from "./components/MeRequestVehicleActionBtn";





function UserRow(props) {
  const user = props.user;
  const partners = props.partners;

  return (

    <tr key={user.id}>
      <td>{user.vehicle_type}</td>
      <td>{user.vehicle_make}</td>
      <td>{user.vehicle_model}</td>
      <td>{user.plate_number}</td>
      <td>{user.capacity}</td>
      {partners.map(partner=> {
        if(partner.id == user.partner_id) {
          return <td key={[partner.id]}>{partner.name}</td>
        }
      })}
      {isAdmin?  <td>{user.operator}</td>: null}
      {/*<td>{user.assigned}</td>*/}
      <td> <MeRequestVehicleActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const Vehicles = ({getVehiclesRequestMe,  getPartners, partners, vehicles, vehicle, isLoading,  searchVehicle, error}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getVehiclesRequestMe();
      getPartners();
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
                Vehicles
              </div>
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
                  <th scope="col">Partner</th>
                  {isAdmin ?  <th scope="col">Operator</th>: null}
                  {isAdmin || isOperator?  <th scope="col">Actions</th>: null}
                </tr>
                </thead>
                <tbody>
                {vehicles && vehicles.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter(user=>user.approved_status === '0').map((vehicle, index) =>
                  <UserRow key={index} user={vehicle} partners={partners}/>
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
    getVehiclesRequestMe: (operatorName) => dispatch(getVehiclesRequestMe(operatorName)),
    searchVehicle: (id) => dispatch(searchVehicle(id)),
    getPartners: () => dispatch(getPartners()),
  };
}

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehiclesMe,
  vehicle: state.vehicle.vehicle,
  error: state.vehicle.error,
  isLoading: state.vehicle.isLoading,
  partners: state.partners.partners,

});

export default connect(mapStateToProps,mapDispatchToProps)(Vehicles);
