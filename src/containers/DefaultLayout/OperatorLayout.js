import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import Operatornav1 from '../../Operatornav';
import Operatornav2 from '../../Operatornav2';
// routes config
import Operatorroutes from '../../Operatorroutes';
import Spinner from "../../spinner/Spinner";
import {OperatorZone} from "../../environments/constants";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./OperatorHeader'));
const Operatornav = OperatorZone ? Operatornav1: Operatornav2

class OperatorLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;


  render() {
    return (
      <div className="app">
        <AppHeader fixed  style={{border: "none", backgroundColor: "#00BFFF"}}>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg" style={{backgroundColor: "#00BFFF"}}>
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={Operatornav} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={Operatorroutes} router={router}/>
            <Container fluid>
              <Suspense fallback={<Spinner />}>
                <Switch>
                  {Operatorroutes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/operator" to="operator/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter className="bg-twitter">
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}



export default OperatorLayout;
