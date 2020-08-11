import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import DriverHeader from "./components/DriverHeader";
import {getDrivers, searchDriver, approveDriver} from "../../store/actions/driverAction";
import DriverActionBtn from "./components/DriverActionBtn";
import {isLamata} from "../../environments/constants";




function UserRow(props) {
  const user = props.user;
  const approved = props.approved;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Inactive' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.id}>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.phoneno}</td>
      <td>{user.residentialaddress}</td>
      <td>{user.email}</td>
      {(user.appstatus === "1") && <td><Badge color={getBadge("Active")}>online</Badge></td> }
      {(user.appstatus === "0") && <td><Badge color={getBadge("Inactive")}>offline</Badge></td> }
      {(user.appstatus === "") && <td><Badge color={getBadge("Refunds")}>not available</Badge></td> }
      {/*<td>Not Available</td>*/}
      {/*<td>Not Available</td>*/}
      {(user.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
      {(user.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
      {(user.status === "") && <td><Badge color={getBadge("Pending")}>Pending</Badge></td> }
      <td> <DriverActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const PendingDrivers = ({getDrivers, drivers, driver, isLoading,  searchDriver, error,  approveDriver}) => {
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
              <div className="animated fadeIn pt-1 text-center">No Driver Available</div>}
              {((drivers && drivers.length > 0) || driver) &&
              <Table responsive hover>
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col"> Phone No</th>
                  <th scope="col">Residential Address</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">App status</th>
                  {/*<th scope="col">Rating</th>*/}
                  {/*<th scope="col">Review</th>*/}
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {drivers && drivers.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.status === "").map((user, index) =>
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

export default connect(mapStateToProps,mapDispatchToProps)(PendingDrivers);
