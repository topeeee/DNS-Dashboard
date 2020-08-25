import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import axios from 'axios'
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../../spinner/Spinner";
import PartnerActionBtn from "./components/PartnerActionBtn";
import {getPartners} from "../../../store/actions/partnerAction";
import PartnerHeader from "./components/PartnerHeader";
import {isAdmin, isLamata, isOperator, OperatorName} from "../../../environments/constants";
import api from "../../../environments/environment";
import {getVehicles} from "../../../store/actions/vehicleAction";





function UserRow(props) {
  const user = props.user;
  const vehicles = props.vehicles;
  console.log(vehicles, 'kkkkkkkk')

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'danger' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  };
  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.phoneNo}</td>
      {!isLamata &&  <td>{user.email}</td>}
      {!isLamata &&<td>{user.officeAddress}</td>}
      {/*<td>{user.id}</td>*/}
      {vehicles ? <td>{vehicles.filter(vehicle => vehicle.partner_id == user.id).length}</td>
        :<td>0</td>}
      {(user.status == 1) && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
      {(user.status == 0) && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
      {(isAdmin || isOperator) &&  <td> <PartnerActionBtn id={user.id} user={user} /> </td>}
    </tr>
  )
}

const Partners = ({getPartners, partners, isLoading, vehicles, getVehicles}) => {

  const [formData, setFormData] = useState('');
  const [partnerId, setPartnerId] = useState([]);
  const [operatorPartner, setOperatorPartner] = useState([]);


  async function getPartnerId() {
    try {
      const res = await axios.get(`${api.vehicle}/api/operator/partners?operator=${OperatorName}`);
      setPartnerId(res.data.partnerId)

    }catch (e) {

    }
  }

  useEffect(()=>{
    getPartners();
    getVehicles();
  },[]);

useEffect(()=> {
  if(isOperator) {
    getPartnerId();
  }
},[isOperator]);

  useEffect(()=> {
    if(partnerId.length > 0 && partners) {
      let operatorPartner = [];
      partnerId.forEach((id=> {
        partners.map(partner=> {
          if(partner.id == id) {
            operatorPartner.push(partner)
          }
        })
      }));
      setOperatorPartner(operatorPartner)
    }
  },[partnerId, partners]);

  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <form className="w-100 d-flex align-items-center">
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
                Partners
              </div>
              {(isAdmin || isOperator) && <PartnerHeader />}
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {/*{error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}*/}
              {/*{isLoading && loading()}*/}
              {(partners && partners.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Partners Available</div>}
              {((partners && partners.length > 0)) &&
              <Table responsive hover>
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  {/*<th scope="col">Id</th>*/}
                  {/*<th scope="col">Area Code</th>*/}
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  {!isLamata &&<th scope="col">Email</th>}
                  {!isLamata &&<th scope="col">Office Address</th>}
                  <th scope="col">Number of Vehicles</th>
                  <th scope="col">Status</th>
                  {(isAdmin || isOperator) && <th scope="col">Actions</th>}
                </tr>
                </thead>
                <tbody>
                {(partners && (isAdmin || isLamata))? partners.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((operator, index) =>
                  <UserRow key={index} user={operator}  vehicles={vehicles}/>
                ): null}
                {(operatorPartner && isOperator)? operatorPartner.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((operator, index) =>
                  <UserRow key={index} user={operator} vehicles={vehicles}/>
                ): null}
                </tbody>
              </Table>
              }
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
    getPartners: () => dispatch(getPartners()),
    getVehicles: () => dispatch(getVehicles()),
  };
}

const mapStateToProps = state => ({
  partners: state.partners.partners,
  error: state.partners.error,
  isLoading: state.partners.isLoading,
  vehicles: state.vehicle.vehicles,


});

export default connect(mapStateToProps,mapDispatchToProps)(Partners);







