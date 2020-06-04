import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getDriverLoggings, searchDriverLogging} from "../../store/actions/driverLoggingAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import DriverLoggingDeleteBtn from "./components/DriverLoggingDeleteBtn";
import DriverLoggingHeader from "./components/DriverLoggingHeader";





function UserRow(props) {
  const user = props.user;

  const getBadge = (status) => {
    return status === 'True' ? 'success' :
      status === 'False' ? 'danger' :
        'primary'
  };
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.longtitude}</td>
      <td>{user.latitude}</td>
      <td>{user.direction}</td>
      <td>{user.rider_username}</td>
      <td>{user.currentbusstop}</td>
      <td> <DriverLoggingDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const DriverLoggings = ({ getDriverLoggings, driverLoggings, driverLogging, isLoading,  searchDriverLogging, error}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getDriverLoggings()
    }
  },[formData]);


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchDriverLogging(formData)
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
                Modes
              </div>
              <DriverLoggingHeader />
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {(driverLoggings && driverLoggings.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Vehicles Available</div>}
              {((driverLoggings && driverLoggings.length > 0) || driverLogging) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Longtitude</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Direction</th>
                  <th scope="col">Rider Username</th>
                  <th scope="col">Current Bus Stop</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody style={{background: "gray", color: "white"}}>
                {driverLoggings && driverLoggings.map((driverLogging, index) =>
                  <UserRow key={index} user={driverLogging}/>
                )}
                {driverLogging &&
                <UserRow user={driverLogging}/>
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
    getDriverLoggings: () => dispatch(getDriverLoggings()),
    searchDriverLogging: (id) => dispatch(searchDriverLogging(id))
  };
}

const mapStateToProps = state => ({
  driverLoggings: state.driverLogging.driverLoggings,
  driverLogging: state.driverLogging.driverLogging,
  error: state.driverLogging.error,
  isLoading: state.driverLogging.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(DriverLoggings);
