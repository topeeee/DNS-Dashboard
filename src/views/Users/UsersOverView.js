import React, {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Card, CardBody} from 'reactstrap';
import {getUsers} from "../../store/actions/userAction";
import Spinner from "../../spinner/Spinner";
import {connect} from "react-redux";









const UsersOverview = ({getUsers, users, isLoading}) => {

  const [active, setActive] = useState('');
  const [inactive, setInactive] = useState('');
  const [all, setAll] = useState('');


  const doughnut = {
    labels: [



      'Active',
      'Inactive',
    ],
    datasets: [
      {
        data: [active, inactive],
        backgroundColor: [
          'green',
          'red',
        ],
        // hoverBackgroundColor: [
        //   '#FF6384',
        //   '#36A2EB',
        //
        // ],
      }],
  };

  function activeUser() {
    setActive(users.filter(user =>(user.status === "1")).length)
  }

  function inactiveUser() {
    setInactive(users.filter(user =>(user.status === "0")).length)
  }

  function allUser() {
    setAll(users.length)
  }

  useEffect(()=> {
    if(users) {
      activeUser();
      inactiveUser();
      allUser();
    }
  },[users]);

  useEffect(()=>{
    getUsers()
  },[]);

    return (
      <div className="d-flex align-items-center justify-content-center">
        {isLoading && <Spinner />}
        {!isLoading &&
        <div className="animated fadeIn" style={{width: "50%"}}>
          {/*<CardColumns className="cols-3">*/}
          <Card className="">
            {/*<CardHeader>*/}
            {/*  Doughnut Chart*/}
            {/*  <div className="card-header-actions">*/}
            {/*    <a href="http://www.chartjs.org" className="card-header-action">*/}
            {/*      <small className="text-muted">docs</small>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</CardHeader>*/}
            <CardBody>
              <div
                className="w-100 d-flex align-items-center justify-content-center font-weight-bold font-4xl text-dark">
                {all}
              </div>
              <div
                className="w-100 d-flex align-items-center justify-content-center font-weight-bold font-1xl text-dark">Total
                Users
              </div>
              <div className="chart-wrapper">
                <Doughnut data={doughnut} />
              </div>
            </CardBody>
          </Card>
          {/*</CardColumns>*/}
        </div>
        }
      </div>
    );
};

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
  };
}

const mapStateToProps = state => ({
  users: state.user.users,
  isLoading: state.user.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(UsersOverview);
