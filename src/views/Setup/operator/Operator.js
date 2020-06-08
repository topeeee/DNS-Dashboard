import React, {Component, useEffect, useState} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import * as usersData from "core-js";
import {getOperators, searchOperator} from "../../../store/actions/operatorAction";
import {connect} from "react-redux";


const Operator = ({getOperators, operators, operator, isLoading,  searchOperator, error, match})=> {
  // const [operator, setOperator] = useState([]);
  const [newOperator, setNewOperator] = useState({});

  function setOperator() {
    if (operators){
      operators.map(op=> {
        if(op.id == match.params.id){
          setNewOperator(op)
        }
      })
    }
  }
  useEffect(()=>{
    getOperators()
  },[]);

useEffect(()=>{
  setOperator();
},[operators]);
  // const user = operators.find( user => user.id === this.props.match.params.id);

    // const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={6}>
            <Card>
              <CardHeader className="bg-dark">
                <strong><i className="icon-info pr-1"></i>User id: {match.params.id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  {/*email: "t@gmail.com"*/}
                  {/*id: 46*/}
                  {/*name: "Tope"*/}
                  {/*numberOfVehicle: "7"*/}
                  {/*officeAddress: "Ajah"*/}
                  {/*phoneNo: "789654"*/}
                  {/*pin: "78"*/}
                  {/*status: "1"*/}
                  {/*statusTimestamp: "2020-06-07T16:51:13.288908"*/}
                  {/*timestamp: "2020-06-07T14:46:56.345861"*/}
                  {/*username: "bruce"*/}

                  {/*Operator Name*/}
                  {/*Operator Phone*/}
                  {/*Operator Email*/}
                  {/*Office Address*/}
                  {/*Number of Vehicles*/}
                  {/*Vehicle Types*/}
                  {/*State(s) Name*/}
                  {/*Mode(s) Name*/}
                  {/*Zone(s) Name*/}
                  {/*Geo-fenced Area(s)*/}

                  {newOperator &&
                  <tbody>
                  <tr>
                    <td>Operator Name</td>
                    <td><strong>{newOperator.name}</strong></td>
                  </tr>
                  <tr>
                    <td>Operator Phone</td>
                    <td><strong>{newOperator.phoneNo}</strong></td>
                  </tr>
                  <tr>
                    <td>Operator Email</td>
                    <td><strong>{newOperator.email}</strong></td>
                  </tr>
                  <tr>
                    <td>Office Address</td>
                    <td><strong>{newOperator.officeAddress}</strong></td>
                  </tr>
                  <tr>
                    <td>Number of Vehicles</td>
                    <td><strong>{newOperator.numberOfVehicle}</strong></td>
                  </tr>
                  <tr>
                    <td>Operator Email</td>
                    <td><strong>{newOperator.email}</strong></td>
                  </tr>
                  </tbody>
                  }

                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )

}

function mapDispatchToProps(dispatch) {
  return {
    getOperators: () => dispatch(getOperators()),
    searchOperator: (id) => dispatch(searchOperator(id)),
  };
}

const mapStateToProps = state => ({
  operators: state.operator.operators,
  operator: state.operator.operator,
  error: state.operator.error,
  isLoading: state.operator.isLoading,


});

export default connect(mapStateToProps,mapDispatchToProps)(Operator);
