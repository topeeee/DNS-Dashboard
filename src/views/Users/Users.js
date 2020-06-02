import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getUsers, searchUser} from "../../store/actions/userAction";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import UserHeader from "./components/UserHeader";
import UserDeleteBtn from "./components/UserDeleteBtn";
import Spinner from "../../spinner/Spinner";




function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Suspended' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.first_name.toString()}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      {/*<td>{user.phone}</td>*/}
      <td>{user.email}</td>
      <td>{user.home_location}</td>
      <td>{user. home_pickup_time}</td>
      {/*<td>{user.drivername}</td>*/}
      {/*<td>{user.driverphone}</td>*/}
      {/*<td>{user.vehicledetail}</td>*/}
      {/*<td>{user.distance}</td>*/}
      <td><Badge color={getBadge(user.status)}>{user.status}</Badge></td>
      <td> <UserDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const Users = ({getUsers, users, user, isLoading,  searchUser, error}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getUsers()
    }
  },[formData]);


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchUser(formData)
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
                Users
              </div>
              <UserHeader />
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {/*{isLoading && loading()}*/}
              {(users && users.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Users Available</div>}
              {((users && users.length > 0) || user) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  {/*<th scope="col">Passenger Phone N</th>*/}
                  <th scope="col">Home Location</th>
                  <th scope="col">Pick Time</th>
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
                {users && users.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                {user &&
                <UserRow user={user}/>
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
    getUsers: () => dispatch(getUsers()),
    searchUser: (id) => dispatch(searchUser(id))
  };
}

const mapStateToProps = state => ({
  users: state.user.users,
  user: state.user.user,
  error: state.user.error,
  isLoading: state.user.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(Users);
