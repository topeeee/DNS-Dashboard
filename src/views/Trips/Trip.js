// import React, { Component } from 'react';
// import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
// import TripData from "./TripsData";
// // import usersData from '../Users/UsersData'
//
// class  Trip extends Component {
//
//   render() {
//
//     const user = TripData.find( user => user.TripID.toString() === this.props.match.params.TripID);
//
//     const userDetails = user ? Object.entries(user) : [['TripID', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
//
//     return (
//       <div className="animated fadeIn">
//         <Row>
//           <Col lg={6}>
//             <Card>
//               <CardHeader>
//                 <strong><i className="icon-info pr-1"></i>Trip id: {this.props.match.params.TripID}</strong>
//               </CardHeader>
//               <CardBody>
//                 <Table responsive striped hover>
//                   <tbody>
//                   {
//                     userDetails.map(([key, value]) => {
//                       return (
//                         <tr key={key}>
//                           <td>{`${key}:`}</td>
//                           <td><strong>{value}</strong></td>
//                         </tr>
//                       )
//                     })
//                   }
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     )
//   }
// }
//
// export default Trip;
