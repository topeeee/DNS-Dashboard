import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getUsers, searchUser} from "../../store/actions/userAction";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import DriverHeader from "./components/DriverHeader";
import DriverDeleteBtn from "./components/DriverDeleteBtn";
import {getDrivers, searchDriver, approveDriver} from "../../store/actions/driverAction";




function UserRow(props) {
  const user = props.user;
  const approved = props.approved;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Approved' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Unapproved' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.residentialaddress}</td>
      <td>{user.email}</td>
      {/*<td>{user.route}</td>*/}
      {/*<td>{user.geofencedarea}</td>*/}
      {/*<td>{user.operatorname}</td>*/}
      {/*{(user.status == 1) && <td><Badge color={getBadge("Approved")}>Approved</Badge></td>}*/}
      {/*{(user.status == "") && <td onClick={()=>approved(user.id)}><Badge style={{cursor: "pointer"}} color={getBadge("Unapproved")}>Unapproved</Badge></td>}*/}
      <td> <DriverDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const Drivers = ({getDrivers, drivers, driver, isLoading,  searchDriver, error,  approveDriver}) => {
  const [formData, setFormData] = useState('');






  useEffect(()=>{
    if(formData === ''){
      getDrivers();

    }
  },[formData]);




  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchDriver(formData)
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
                         placeholder="Search by Id"
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
                Drivers
              </div>
              <DriverHeader />
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {/*{isLoading && loading()}*/}
              {(drivers && drivers.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Users Available</div>}
              {((drivers && drivers.length > 0) || driver) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col"> Phone No</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">App status</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Zone</th>
                  <th scope="col">Area</th>
                  <th scope="col">Status</th>
                  {/*<th scope="col">Driver Name</th>*/}
                  {/*<th scope="col">Driver Phone no</th>*/}
                  {/*<th scope="col">Vehicle Detail</th>*/}
                  {/*<th scope="col">Distance</th>*/}
                  {/*<th scope="col">Cost</th>*/}
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody style={{background: "gray", color: "white"}}>
                {drivers && drivers.map((user, index) =>
                  <UserRow key={index} user={user} approved={approveDriver}/>
                )}
                {driver &&
                <UserRow user={driver} approved={approveDriver}/>
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
    getDrivers: () => dispatch(getDrivers()),
    searchDriver: (id) => dispatch(searchDriver(id)),
    approveDriver: (id) =>dispatch(approveDriver(id))
  };
}

const mapStateToProps = state => ({
  drivers: state.driver.drivers,
  driver: state.driver.driver,
  error: state.driver.error,
  isLoading: state.driver.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(Drivers);
