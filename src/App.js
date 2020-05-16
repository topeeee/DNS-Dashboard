import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider} from "react-redux";
import store from "./store";
// import { renderRoutes } from 'react-router-config';
import './App.scss';
// import UpdateModal from "./views/Users/Modals/UpdateModal";
import  UserModalCreate from './modals/userModal/UserModalCreate'
import Dropdowns from "./views/Base/Dropdowns";


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const OperatorLayout = React.lazy(() => import('./containers/DefaultLayout/OperatorLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));




class App extends Component {

  render() {
    return (
      <Provider store={store}>
        {/*<Dropdowns />*/}

        <HashRouter>
          <React.Suspense fallback={loading()}>

            <UserModalCreate />
            {/*<UpdateModal />*/}
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/operator" name="Operator" render={props => <OperatorLayout {...props}/>} />
              <Route path="/" name="Admin" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </Provider>

    );
  }
}

export default App;
