import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import  {connect} from 'react-redux'
import CombineModal from "../../modals";
import {LogIn} from "../../store/actions/authenticationAction";
import Spinner from "../../spinner/Spinner";
import {admin, isAdmin} from "../../environments/constants";
// import PrivateRoute from "../../routes/PrivateRoutes";





const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('../../containers/DefaultLayout'));
const OperatorLayout = React.lazy(() => import('../../containers/DefaultLayout/OperatorLayout'));

// Pages
const Login = React.lazy(() => import('../Pages/Login'));
const Register = React.lazy(() => import('../Pages/Register'));
const Page404 = React.lazy(() => import('../Pages/Page404'));
const Page500 = React.lazy(() => import('../Pages/Page500'));



const PrivateRoute = ({ isLoggedIn, isAdmin, ...props }) =>
  (isLoggedIn && isAdmin === admin) ? <Route { ...props } /> : <Redirect to="/login" />;

const OperatorRoute = ({ isLoggedIn, isAdmin, ...props }) =>
  isLoggedIn && (isAdmin !== admin) ? <Route { ...props } /> : <Redirect to="/login" />;



function mapDispatchToProps(dispatch) {
  return {
    LogIn: () => dispatch(LogIn())
  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  operators: state.operator.operators,
});

const Home = ({ isAuthenticated, operators}) => {

  return (
    <BrowserRouter>
          <React.Suspense fallback={<Spinner />}>
            <CombineModal />
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <OperatorRoute isLoggedIn={isAuthenticated} isAdmin={isAdmin} path="/operator" name="Operator" render={props => <OperatorLayout {...props}/>} />
              <PrivateRoute isLoggedIn={isAuthenticated} isAdmin={isAdmin}  path="/" name="Admin" render={props => <DefaultLayout {...props}/>} />
              {/*<Route path="/" name="Admin" render={props => <DefaultLayout {...props}/>} />*/}
            </Switch>
          </React.Suspense>
          </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)( Home);
