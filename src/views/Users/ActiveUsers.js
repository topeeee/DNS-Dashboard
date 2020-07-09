import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getUsers, searchUser} from "../../store/actions/userAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import UserActionBtn from "./components/UserActionBtn";
import {isAdmin, isOperator, OperatorId} from "../../environments/constants";
import axios from "axios";
import api from "../../environments/environment";




function UserRow(props) {
  const user = props.user;
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
      {/*<td>{user.id}</td>*/}
      <td>{user.pin}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.email}</td>
      {(user.status === "1") && <td><Badge color={getBadge("Active")}>Active</Badge></td>}
      {(user.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td>}
      <td> <UserActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const ActiveUsers = ({getUsers, users, user, isLoading,  searchUser, error}) => {
  const [formData, setFormData] = useState('');
  const [userPin, setUserPin] = useState([]);
  const [operatorPassenger, setOperatorPassenger] = useState([]);


  async function getUsersPin() {
    try {
      const res = await axios.get(`${api.trip}/api/operator/passenger?operatorId=${OperatorId}`)
      setUserPin(res.data.pins);
    }catch (e) {

    }
  }

  useEffect(()=>{
    if(formData === ''){
      getUsers()
    }
  },[formData]);


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };

  useEffect(()=> {
    if(isOperator) {
      getUsersPin()
    }
  },[isOperator]);

  useEffect(()=> {
    if(userPin.length > 0 && users) {
      let operatorUser = [];
      userPin.forEach((pin=> {
        users.map(user=> {
          if(user.pin === pin) {
            operatorUser.push(user)
          }
        })
      }));
      setOperatorPassenger(operatorUser)
    }
  },[userPin, users]);


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
              Active  {isAdmin? 'Users': 'Passengers'}
              </div>
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
                  {/*<th scope="col">ID</th>*/}
                  <th scope="col">PIN</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {(users && isAdmin) && users.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter(user =>(user.status === "1")).map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                {(operatorPassenger && isOperator) && operatorPassenger.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter(user =>(user.status === "1")).map((user, index) =>
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

export default connect(mapStateToProps,mapDispatchToProps)(ActiveUsers);
