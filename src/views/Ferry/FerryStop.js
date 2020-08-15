import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import {isAdmin, isLamata} from "../../environments/constants";
import {getFerryStops} from "../../store/actions/ferryStopAction";
import FerryStopActionBtn from "./components/FerryStopActionBtn";
import FerryStopHeader from "./components/FerryStopHeader";




function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.id}>
      <td>{user.ferrystop}</td>
      <td>{user.ferrystopcode}</td>
      <td>{user.service}</td>
      <td>{user.latitude}</td>
      <td>{user.longitude}</td>
      {isAdmin ?  <td> <FerryStopActionBtn id={user.id} /> </td>: null}
    </tr>
  )
}

const FerryStops = ({getFerryStops, ferryStops, isLoading}) => {
  const [formData, setFormData] = useState('');

 useEffect(()=> {
   getFerryStops();
 }, [])


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };

 return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            {formData}
            <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <Input type="text"
                       // placeholder="Search by Name or Id"
                       className="w-25"
                       name="formData"
                       value={formData}
                       onChange={onChange}
                />
                <button className="btn btn-success">Search</button>
              </div>
              <div className="w-25 text-right">
                <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />
                <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />
                <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />
              </div>
            </CardHeader>
            <CardHeader className="d-flex align-items-center">
              <div className="w-25">
                Ferry Stops
              </div>
              {isAdmin && <FerryStopHeader />}
            </CardHeader>
            <CardBody>
              {isLoading && <Spinner />}
              {(ferryStops && ferryStops.length === 0) && <div className="animated fadeIn pt-1 text-center">No Ferry Stops Available</div>}
              {(ferryStops && ferryStops.length > 0 && !isLoading) &&
              <Table responsive hover>
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  {/*<th scope="col">Id</th>*/}
                  <th scope="col">Ferry Stop</th>
                  <th scope="col"> Ferry Stop Code</th>
                  <th scope="col">Service</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  {isAdmin ? <th scope="col">Action</th>: null}
                </tr>
                </thead>
                <tbody>
                {(ferryStops && (isAdmin || isLamata)) ? ferryStops.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((user, index) =>
                  <UserRow key={index} user={user} />
                ): null}
                </tbody>
              </Table>}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
};
function mapDispatchToProps(dispatch) {
  return {
    getFerryStops: () => dispatch(getFerryStops()),
  };
}

const mapStateToProps = state => ({
  ferryStops: state.ferryStop.ferryStops,
  isLoading: state.ferryStop.isLoading,
});

export default connect(mapStateToProps,mapDispatchToProps)(FerryStops);
