import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Card, CardBody, Col, Row, Table} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import Spinner from "../../spinner/Spinner";
import {getDrivers} from "../../store/actions/driverAction";
import Pagination from "react-js-pagination";
import {isAdmin} from "../../environments/constants";





function UserRow(props) {
  const user = props.user;
  const StarRatings = props.StarRatings


  return (
    <tr key={user.id}>
      <td>2020-10-6</td>
      <td>The Driver Drives well and dosent over speed, and he obeys traffic laws</td>
      <td>
        <StarRatings
          rating={3}
          starRatedColor="#ffc107"
          starDimension="20px"
          // changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
      </td>
    </tr>
  )
}

const DriverRating = ({getDrivers, drivers, isLoading, error, match}) => {
  const [formData, setFormData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);
  const [driver, setDriver] = useState({})

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
      setPosts(drivers.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter(driver => driver.lasdriIdStatus === '0'))
    }
  },[drivers, formData]);


  useEffect(()=>{
    getDrivers();
  },[]);

  function setDriverDetails() {
    if (drivers){
      drivers.map(mapDriver=> {
        if(mapDriver.id == match.params.id){
          setDriver(mapDriver);
        }
      })
    }
  }

  useEffect(()=> {
    setDriverDetails();
  },[drivers])

  return (
    <div className="animated fadeIn">
      <Row>
        <div className={isAdmin? 'bg-dark': 'bg-twitter'} style={{color: 'white', display:'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '10px', margin:'10px', fontSize: '20px'}}>
          {driver.firstName} {driver.lastName}
        </div>
      </Row>
      <Row>
        <Col xs="12" sm="6" lg="3">
          <Card className="text-dark" >
            <CardBody className="pb-0">
              {/*<div className="float-right" style={{color: "black"}}>*/}
              {/*  <i className="fa fa-user fa-2x"></i>*/}
              {/*</div>*/}
              <div className="text-value">Aggregate Rating</div>
              <div>All time Statistic</div>
            </CardBody>
            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
             <span className="pr-2 font-2xl">3</span>
              <StarRatings
                rating={3}
                starRatedColor="#ffc107"
                starDimension="20px"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name='rating'
              />
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-dark" >
            <CardBody className="pb-0">
              {/*<div className="float-right" style={{color: "black"}}>*/}
              {/*  <i className="fa fa-user fa-2x"></i>*/}
              {/*</div>*/}
              <div className="text-value">Total Reviews</div>
              <div>All time Statistic</div>
            </CardBody>
            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
              <span className="pr-2 font-2xl">125</span>
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-dark" >
            <CardBody className="pb-0">
              {/*<div className="float-right" style={{color: "black"}}>*/}
              {/*  <i className="fa fa-user fa-2x"></i>*/}
              {/*</div>*/}
              <div className="text-value">New Reviews</div>
              <div>Activity from October</div>
            </CardBody>
            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
              <span className="pr-2 font-2xl">50</span>
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Card className="text-dark" >
            <CardBody className="pb-0">
              {/*<div className="float-right" style={{color: "black"}}>*/}
              {/*  <i className="fa fa-user fa-2x"></i>*/}
              {/*</div>*/}
              <div className="text-value">Ratings Change</div>
              <div>Activity from October</div>
            </CardBody>
            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
              <span className="pr-2 font-2xl">0.1%</span>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <Card>
            {/*<CardHeader className="bg-secondary d-flex">*/}
              {/*<div className="w-75 d-flex align-items-center ">*/}
              {/*  <form className="w-100 d-flex align-items-center">*/}
              {/*    <Input type="text"*/}
              {/*      // placeholder="Search by Id"*/}
              {/*           className="w-25"*/}
              {/*           name="formData"*/}
              {/*           value={formData}*/}
              {/*           onChange={onChange}*/}
              {/*    />*/}
              {/*    <button className="btn btn-success" type="submit">Search</button>*/}
              {/*  </form>*/}
              {/*</div>*/}
              {/*<div className="w-25 text-right">*/}
              {/*  <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />*/}
              {/*  <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />*/}
              {/*  <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />*/}
              {/*</div>*/}
            {/*</CardHeader>*/}
            {/*<CardHeader className="d-flex align-items-center">*/}
            {/*  <div className="w-25">*/}
            {/*    Tope Ajibuwa*/}
            {/*  </div>*/}
            {/*  /!*<DriverHeader/>*!/*/}
            {/*</CardHeader>*/}
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
                  <th scope="col">Date(s)</th>
                  <th scope="col">Review(s)</th>
                  <th scope="col">Rating(s)</th>
                  {/*<th scope="col">Driver License Verified</th>*/}
                  {/*<th scope="col">NIN Verified</th>*/}
                  {/*<th scope="col">Action</th>*/}
                </tr>
                </thead>
                <tbody>
                {posts && currentPosts.map((user, index) =>
                  <UserRow key={index} user={user} StarRatings={StarRatings}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(DriverRating);
