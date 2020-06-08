import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getDriverRoutes, searchDriverRoute, toggleDriverRouteModalDelete} from "../../store/actions/driverRouteAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import DriverRouteDeleteBtn from "./components/DriverRouteDeleteBtn";
import DriverRouteHeader from "./components/DriverRouteHeader";




function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.routecode}</td>
      <td>{user.driverUsername}</td>
      <td>{user.driverLicense}</td>
      <td> <DriverRouteDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const DriverRoutes = ({getDriverRoutes, driverRoutes, driverRoute, isLoading,  searchDriverRoute, error}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getDriverRoutes()
    }
  },[formData]);

  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };

  const onSearch = e => {
    e.preventDefault();
    searchDriverRoute(formData)
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
                States
              </div>
              <DriverRouteHeader />
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {(driverRoutes && driverRoutes.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No States Available</div> }
              {((driverRoutes && driverRoutes.length > 0) || driverRoute ) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Route Code</th>
                  <th scope="col">Driver UserName</th>
                  <th scope="col">Driver License</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody style={{background: "gray", color: "white"}}>
                {driverRoutes && driverRoutes.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                {driverRoute &&
                <UserRow user={driverRoute}/>
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
    getDriverRoutes: () => dispatch(getDriverRoutes()),
    searchDriverRoute: (id) => dispatch(searchDriverRoute(id))
  };
}

const mapStateToProps = state => ({
  driverRoutes: state.driverRoute.driverRoutes,
  driverRoute: state.driverRoute.driverRoute,
  error: state.driverRoute.error,
  isLoading: state.driverRoute.isLoading,

});

export default connect(mapStateToProps,mapDispatchToProps)(DriverRoutes);
