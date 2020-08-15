import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import {isAdmin, isLamata} from "../../environments/constants";
import {getTrainStops} from "../../store/actions/trainStopAction";
import TrainStopActionBtn from "./components/TrainStopActionBtn";
import TrainStopHeader from "./components/TrainStopHeader";




function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.id}>
      <td>{user.trainstop}</td>
      <td>{user.trainstopcode}</td>
      <td>{user.trainline}</td>
      <td>{user.trainlinecode}</td>
      <td>{user.service}</td>
      <td>{user.latitude}</td>
      <td>{user.longitude}</td>
      {isAdmin ?  <td> <TrainStopActionBtn id={user.id} /> </td>: null}
    </tr>
  )
}

const TrainStops = ({getTrainStops, trainStops, isLoading}) => {
  const [formData, setFormData] = useState('');

 useEffect(()=> {
   getTrainStops();
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
                Train Stops
              </div>
              {isAdmin && <TrainStopHeader />}
            </CardHeader>
            <CardBody>
              {isLoading && <Spinner />}
              {(trainStops && trainStops.length === 0) && <div className="animated fadeIn pt-1 text-center">No Train Stops Available</div>}
              {(trainStops && trainStops.length > 0 && !isLoading) &&
              <Table responsive hover>
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  {/*<th scope="col">Id</th>*/}
                  <th scope="col">Train Stop</th>
                  <th scope="col"> Train Stop Code</th>
                  <th scope="col">Train Line</th>
                  <th scope="col">Train Line code</th>
                  <th scope="col">Service</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  {isAdmin ? <th scope="col">Action</th>: null}
                </tr>
                </thead>
                <tbody>
                {(trainStops && (isAdmin || isLamata)) ? trainStops.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((user, index) =>
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
    getTrainStops: () => dispatch(getTrainStops()),
  };
}

const mapStateToProps = state => ({
  trainStops: state.trainStop.trainStops,
  isLoading: state.trainStop.isLoading,
});

export default connect(mapStateToProps,mapDispatchToProps)(TrainStops);
