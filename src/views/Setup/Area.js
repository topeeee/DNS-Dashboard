import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {Badge, Card, CardBody, CardHeader, Col, Row, Table, Button, Input} from 'reactstrap';
import {getAreas, searchArea} from "../../store/actions/areaAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import AreaDeleteBtn from "./components/AreaDeleteBtn";
import AreaHeader from "./components/AreaHeader";
import {ZoneUser} from "../../store/actions/zoneAction";




function UserRow(props) {
  const user = props.user;
  const zone = props.zone;
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      {/*<td>{user.xareacode}</td>*/}
      <td>{user.xarea}</td>
      {/*{zone.map((sta, index) =>{*/}
      {/*  if(sta.zonecode === user.zonecode) {*/}
      {/*    return  <td key={index}>{sta.zone}</td>*/}
      {/*  }}*/}
      {/*)}*/}
      <td>{user.zonecode}</td>
      <td> <AreaDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const Area = ({getAreas, areas, area, isLoading,  searchArea, error, zones,  ZoneUser}) => {
  const [formData, setFormData] = useState('');

  useEffect(()=>{
    if(formData === ''){
      getAreas()
    }
  },[formData]);

  useEffect(()=>{
    ZoneUser();

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
                Areas
              </div>
              <AreaHeader />
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
                  <th scope="col">Id</th>
                  {/*<th scope="col">Area Code</th>*/}
                  <th scope="col">Area</th>
                  <th scope="col">Zone</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody style={{background: "gray", color: "white"}}>
                {areas && areas.map((mode, index) =>
                  <UserRow key={index} user={mode} zone={zones}/>
                )}
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
