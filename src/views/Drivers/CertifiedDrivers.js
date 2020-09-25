import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import DriverHeader from "./components/DriverHeader";
import {getDrivers} from "../../store/actions/driverAction";
import DriverActionBtn from "./components/DriverActionBtn";
import Pagination from "react-js-pagination";
import {isAdmin} from "../../environments/constants";





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
      {(user.lasdriIdStatus === '1') && <td><Badge color={getBadge("Active")}>Yes</Badge></td> }
      {(user.lasdriIdStatus === '0') && <td><Badge color={getBadge("Inactive")}>No</Badge></td> }
      {(user.licenseStatus === '1') && <td><Badge color={getBadge("Active")}>Yes</Badge></td> }
      {(user.licenseStatus === '0') && <td><Badge color={getBadge("Inactive")}>No</Badge></td> }
      {(user.ninStatus === '1') && <td><Badge color={getBadge("Active")}>Yes</Badge></td> }
      {(user.ninStatus === '0') && <td><Badge color={getBadge("Inactive")}>No</Badge></td> }
      <td> <DriverActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const CertifiedDrivers = ({getDrivers, drivers, isLoading, error}) => {
  const [formData, setFormData] = useState('');
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
  if(formData && posts){
    setCurrentPage(1)
    const search = posts.filter(post => {
      return (post.firstName.toLowerCase().includes(formData.toLowerCase()) || post.lastName.toLowerCase().includes(formData.toLowerCase()))
    });
    setPosts(search)
  }
},[formData]);

useEffect(()=> {
  if(drivers && !formData) {
    setPosts(drivers.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter(driver => (driver.lasdriIdStatus === '1' && driver.licenseStatus === '1' && driver.ninStatus === '1')))
  }
},[drivers, formData]);


  useEffect(()=>{
      getDrivers();
      },[]);

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
              Certified  Drivers
              </div>
              {/*<DriverHeader/>*/}
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {(posts && posts.length === 0 && !isLoading) &&
              <div className="animated fadeIn pt-1 text-center">No Drivers Available</div>}
              {((posts && posts.length > 0 && !isLoading)) &&
              <Table responsive hover>
                <thead className={isAdmin? 'bg-dark': 'bg-twitter'} style={{color: '#696969'}}>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col"> Phone No</th>
                  <th scope="col">LASDRI Verified</th>
                  <th scope="col">Driver License Verified</th>
                  <th scope="col">NIN Verified</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {posts && currentPosts.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                </tbody>
              </Table>}
            </CardBody>
            }
          </Card>
        </Col>
      </Row>
      {(!isLoading && posts.length > 0) &&
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
  };
}

const mapStateToProps = state => ({
  drivers: state.driver.drivers,
  error: state.driver.error,
  isLoading: state.driver.isLoading,
});

export default connect(mapStateToProps,mapDispatchToProps)(CertifiedDrivers);
