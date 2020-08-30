import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import {isAdmin, isLamata, isOperator, OperatorName} from "../../environments/constants";
import {getService, searchService} from "../../store/actions/serviceAction";
import ServiceActionBtn from "./components/ServiceActionBtn";
import ServiceHeader from "./components/ServiceHeader";




function UserRow(props) {
  const user = props.user;


  return (
    <tr key={user.id}>
      <td>{user.service}</td>
      <td>{user.servicecode}</td>
      {/*<td>{user.statecode}</td>*/}
      {isAdmin && <td> <ServiceActionBtn id={user.id} /> </td>}
    </tr>
  )
}

const Service = ({getService, services, service, isLoading,  searchService, error}) => {
  const [formData, setFormData] = useState('');



  useEffect(()=>{
    if(formData === ''){
      getService()
    }
    },[formData]);



  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };

  const onSearch = e => {
    e.preventDefault();
    searchService(formData)
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
                  Services
                </div>
                {(isAdmin || isLamata) &&  <ServiceHeader />}
              </CardHeader>
              {isLoading && <Spinner />}
              {!isLoading &&
              <CardBody>
                {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
                {(services && services.length === 0) &&
                <div className="animated fadeIn pt-1 text-center">No States Available</div> }
                {((services && services.length > 0) || service ) &&
                <Table responsive hover>
                  <thead className={isAdmin? 'bg-dark': 'bg-twitter'} style={{color: '#696969'}}>
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Service Code</th>
                    {/*<th scope="col">State</th>*/}
                    {/*<th scope="col">State Code</th>*/}
                    {isAdmin && <th scope="col">Action</th>}
                  </tr>
                  </thead>
                  <tbody>
                  {(services) ? services.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((user, index) =>
                    <UserRow key={index} user={user}/>
                  ): null}
                  {/*{(states && isState && isOperator) ? states.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.xstate === isState).map((user, index) =>*/}
                  {/*  <UserRow key={index} user={user}/>*/}
                  {/*): null}*/}
                  {service &&
                    <UserRow user={service}/>
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
    getService: () => dispatch(getService()),
    searchService: (id) => dispatch(searchService(id)),
  };
}

const mapStateToProps = state => ({
  services: state.service.services,
  service: state.service.service,
  error: state.service.error,
  isLoading: state.service.isLoading,

});

export default connect(mapStateToProps,mapDispatchToProps)(Service);
