import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getAreas, searchArea} from "../../store/actions/areaAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import AreaHeader from "./components/AreaHeader";
import {ZoneUser} from "../../store/actions/zoneAction";
import axios from "axios";
import {admin, isAdmin, isOperator, OperatorName} from "../../environments/constants";
import AreaActionBtn from "./components/AreaActionBtn";




function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.id}>
      <td>{user.xarea}</td>
      <td>{user.xareacode}</td>
      <td>{user.zonecode}</td>
      <td> <AreaActionBtn id={user.id} /> </td>
    </tr>
  )
}

const Area = ({getAreas, areas, area, isLoading,  searchArea, error, zones,  ZoneUser}) => {
  const [formData, setFormData] = useState('');
  const [operatorZone, setOperatorZone] = useState('');

 async function getOperatorZone() {
    try {
    const res = await  axios.get('http://165.22.116.11:7052/api/all/operatorzones/');
          res.data.map(operatorZone => {
            if(operatorZone.operatorName === OperatorName) {
              setOperatorZone(operatorZone.zoneCode)
            }
          })

    }catch (e) {

    }
  }

  useEffect(()=>{
    if(formData === ''){
      getAreas()
    }
  },[formData]);

  useEffect(()=>{
    ZoneUser();
    getOperatorZone()
  }, []);


  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };


  const onSearch = e => {
    e.preventDefault();
    searchArea(formData)
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
                Areas
              </div>
              {isAdmin && <AreaHeader />}
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {/*{isLoading && loading()}*/}
              {(areas && areas.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Area Available</div>}
              {((areas && areas.length > 0) || area) &&
              <Table responsive hover>
                <thead className="bg-dark">
                <tr>
                  {/*<th scope="col">Id</th>*/}
                  {/*<th scope="col">Area Code</th>*/}
                  <th scope="col">Area</th>
                  <th scope="col">Area code</th>
                  <th scope="col">Zone</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {(areas && isAdmin) ? areas.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((mode, index) =>
                  <UserRow key={index} user={mode} zone={zones}/>
                ): null}
                {(areas && operatorZone && isOperator) ? areas.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter((user) => user.zonecode === operatorZone).map((mode, index) =>
                  <UserRow key={index} user={mode} zone={zones}/>
                ): null}
                {area &&
                <UserRow user={area}/>
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
    getAreas: () => dispatch(getAreas()),
    searchArea: (id) => dispatch(searchArea(id)),
    ZoneUser: () => dispatch(ZoneUser()),
  };
}

const mapStateToProps = state => ({
  areas: state.area.areas,
  area: state.area.area,
  error: state.area.error,
  isLoading: state.area.isLoading,
  zones: state.zone.zones,

});

export default connect(mapStateToProps,mapDispatchToProps)(Area);
