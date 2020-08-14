import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import {isAdmin, isLamata} from "../../environments/constants";
import {getTrainLines, searchTrainLine} from "../../store/actions/trainLineAction";
import TrainLineActionBtn from "./components/TrainLineActionBtn";
import TrainLineHeader from "./components/TrainLineHeader";




function UserRow(props) {
  const user = props.user;

  return (

    <tr key={user.id}>
      <td>{user.trainline}</td>
      <td>{user.trainlinecode}</td>
      <td>{user.service}</td>
      {isAdmin ? <td> <TrainLineActionBtn id={user.id} /> </td>: null}
    </tr>
  )
}

const TrainLine = ({trainLines, trainLine, isLoading,  searchTrainLine, error, getTrainLines}) => {
  const [formData, setFormData] = useState('');




  useEffect(()=>{
    if(formData === ''){
      getTrainLines();
    }
  },[formData]);




  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchTrainLine(formData)
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
                Train Lines
              </div>
              {isAdmin &&  <TrainLineHeader />}
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {/*{isLoading && loading()}*/}
              {(trainLines && trainLines.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Modes Available</div>}
              {((trainLines && trainLines.length > 0) || trainLine) &&
              <Table responsive hover>
                <thead className={isLamata? 'bg-twitter': 'bg-dark'} style={{color: '#696969'}}>
                <tr>
                  <th scope="col">Train Lines</th>
                  <th scope="col">Train Lines code</th>
                  <th scope="col">Service</th>
                  {isAdmin ? <th scope="col">Action</th>: null}
                </tr>
                </thead>
                <tbody>
                {(trainLines && (isAdmin || isLamata)) ? trainLines.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((trainLine, index) =>
                  <UserRow key={index} user={trainLine}/>
                ): null}
                {trainLine &&
                <UserRow user={trainLine}/>
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
    getTrainLines: () => dispatch(getTrainLines()),
    searchTrainLine: (id) => dispatch(searchTrainLine(id)),
  };
}

const mapStateToProps = state => ({
  trainLines: state.trainLine.trainLines,
  trainLine: state.trainLine.trainLine,
  error: state.trainLine.error,
  isLoading: state.trainLine.isLoading,
});

export default connect(mapStateToProps,mapDispatchToProps)(TrainLine);
