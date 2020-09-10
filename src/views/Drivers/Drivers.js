import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import DriverHeader from "./components/DriverHeader";
import {getDrivers, searchDriver, approveDriver, clearDriverVehicleId} from "../../store/actions/driverAction";
import DriverActionBtn from "./components/DriverActionBtn";
import axios from "axios";
import api from "../../environments/environment";
import Pagination from "react-js-pagination";
import {isAdmin, isLamata, isOperator} from "../../environments/constants";
import {getVehicles} from "../../store/actions/vehicleAction";




function UserRow(props) {
  const user = props.user;
  // const driverVehicles = props.driverVehicles;
  // const vehicles = props.vehicles

  // function getMode(driverId) {
  //   let driverMode;
  //   if(driverVehicles) {
  //     driverVehicles.map(driverVehicle => {
  //       if(driverVehicle.driverId === driverId) {
  //         console.log(driverVehicle.driverId, 'lllllllllll')
  //         // console.log(driverVehicle, 'ffffffff')
  //         vehicles.map(vehicle => {
  //           if(vehicle.id === driverVehicle.vehicleId) {
  //             driverMode = vehicle.mode
  //           }
  //         })
  //       }
  //       return driverMode
  //     })
  //
  //   }
  // }

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
      {/*{(user && driverVehicles) && <td>{getMode(user.id)}</td>}*/}
      <td>{user.operatorid}</td>
      {/*<td>{user.email}</td>*/}
      {/*{(user.appstatus === "1") && <td><Badge color={getBadge("Active")}>online</Badge></td> }*/}
      {/*{(user.appstatus === "0") && <td><Badge color={getBadge("Inactive")}>offline</Badge></td> }*/}
      {/*{(user.appstatus === "") && <td><Badge color={getBadge("Refunds")}>not available</Badge></td> }*/}
      {/*<td>Not available</td>*/}
      {/*<td>Not Available</td>*/}
      {/*<td>Not Available</td>*/}
      {(user.status === "1" || user.status === "3") && <td><Badge color={getBadge("Active")}>Active</Badge></td> }
      {(user.status === "0") && <td><Badge color={getBadge("Inactive")}>Inactive</Badge></td> }
      {(user.status === "") && <td><Badge color={getBadge("Pending")}>Pending</Badge></td> }
      <td> <DriverActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const Drivers = ({getDrivers, drivers, driver, isLoading,  searchDriver, error,  approveDriver, approveId, getDriverVehicleId, getDriverVehicleId2, clearDriverVehicleId, vehicles, getVehicles}) => {
  const [formData, setFormData] = useState('');
  const [driverVehicle, setDriverVehicle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };



useEffect(()=> {
  if(formData && drivers){
    setCurrentPage(1)
    const search = drivers.filter(post => {
      return (post.firstname.toLowerCase().includes(formData.toLowerCase()) || post.lastname.toLowerCase().includes(formData.toLowerCase()))
    });
    setPosts(search)
  }
},[formData]);

useEffect(()=> {
  if(drivers && !formData) {
    setPosts(drivers.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
  }
},[drivers, formData]);


  useEffect(()=>{
      getDrivers();
      getVehicles();
      },[]);

  function getDriverVehicle() {
    axios.get(`${api.driverVehicles}/api/drivervehicles/`)
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
    axios.put(`${api.vehicle}/api/assign/driver/${id}/?assign=${status}`)
      .then(res=> {
        if(res) {
          clearDriverVehicleId()
        }
      })
  }

useEffect(()=> {
  getDriverVehicle();
},[]);

useEffect(()=> {
  if(getDriverVehicleId) {
    changeDriverVehicleStatus(getDriverVehicleId, "null")
  }
},[getDriverVehicleId]);

  useEffect(()=> {
    if(getDriverVehicleId2) {
      changeDriverVehicleStatus(getDriverVehicleId2, "1")
    }
  },[getDriverVehicleId2]);



  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  // const onSearch = e => {
  //   e.preventDefault();
  //   // setCurrentPage(1)
  //   searchDriver(formData)
  // };

  // console.log(driverVehicle, 'ppppppppp')

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
                Drivers
              </div>
              {(isAdmin || isOperator) && <DriverHeader/>}
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
                <thead className={isAdmin? 'bg-dark': 'bg-twitter'} style={{color: '#696969'}}>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col"> Phone No</th>
                  {/*<th scope="col">Mode</th>*/}
                  <th scope="col">Operator</th>
                  {/*<th scope="col">Email Address</th>*/}
                  {/*<th scope="col">App status</th>*/}
                  {/*<th scope="col">Rating</th>*/}
                  {/*<th scope="col">Review</th>*/}
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {posts && currentPosts.map((user, index) =>
                  <UserRow key={index} user={user} approved={approveDriver} driverVehicles={driverVehicle} vehicles={vehicles}/>
                )}
                {driver &&
                <UserRow user={driver} approved={approveDriver}/>
                }
                </tbody>
              </Table>}

              {/*<Pagination*/}
              {/*  postsPerPage={postsPerPage}*/}
              {/*  totalPosts={posts.length}*/}
              {/*  paginate={paginate}*/}
              {/*/>*/}
            </CardBody>
            }
          </Card>
        </Col>
      </Row>
      {!isLoading &&
      <div className="d-flex justify-content-end align-items-center mb-0">
        <Pagination
          activePage={currentPage}
          itemClass="page-item"
          linkClass="page-link"
          itemsCountPerPage={postsPerPage}
          totalItemsCount={posts.length}
          onChange={paginate}
        />
      </div>
      }
    </div>
  )
};
function mapDispatchToProps(dispatch) {
  return {
    getDrivers: () => dispatch(getDrivers()),
    searchDriver: (id) => dispatch(searchDriver(id)),
    approveDriver: (id) =>dispatch(approveDriver(id)),
    clearDriverVehicleId: () =>dispatch(clearDriverVehicleId()),
    getVehicles: () => dispatch(getVehicles()),
  };
}

const mapStateToProps = state => ({
  drivers: state.driver.drivers,
  driver: state.driver.driver,
  error: state.driver.error,
  isLoading: state.driver.isLoading,
  approveId: state.driver.approveId,
  getDriverVehicleId: state.driver.getDriverVehicleId,
  getDriverVehicleId2: state.driver.getDriverVehicleId2,
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps,mapDispatchToProps)(Drivers);
