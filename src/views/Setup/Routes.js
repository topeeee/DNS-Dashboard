import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import PrimaryHeader from "../components/PrimaryHeader";
import {RouteUser} from "../../store/actions/routeAction";
import RouteHeader from "./components/RouteHeader";
import RouteDeleteBtn from "./components/RouteDeleteBtn";



function UserRow(props) {
  const user = props.user;
  const userLink = `/trip/${user.TripID}`;

  const getBadge = (status) => {
    return status === 'Successful' ? 'success' :
      status === 'Refunds' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Unsuccessful' ? 'danger' :
            'primary'
  };

  return (
    <tr key={user.areacode.toString()}>
      <th scope="row">{user.id}</th>
      <th scope="row">{user.areacode}</th>
      <td>{user.username}</td>
      <td>{user.route}</td>
      <td>{user.routecode}</td>
      <td> <RouteDeleteBtn id={user.id} /> </td>
    </tr>
  )
}

const Routes = ({RouteUser, routes, isLoading}) => {

  useEffect(()=>{
    RouteUser()
    if(routes){
      console.log(routes)
    }
  },[]);

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <PrimaryHeader />
            <CardHeader className="d-flex align-items-center">
              <div className="w-25">
                Routes
              </div>
              <RouteHeader />
            </CardHeader>
            <CardBody>
              {isLoading && loading()}
              {(routes && routes.length === 0) && <div className="animated fadeIn pt-1 text-center">No Routes Available</div>}
              {(routes && routes.length > 0) &&
              <Table responsive hover>
                <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Area Code</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Route</th>
                  <th scope="col">Route Code </th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {routes && routes.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
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
    RouteUser: () => dispatch(RouteUser()),
  };
}

const mapStateToProps = state => ({
  routes: state.route.routes,
  isLoading: state.route.isLoading,

});

export default connect(mapStateToProps,mapDispatchToProps)(Routes);
