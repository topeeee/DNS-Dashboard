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
import Lamatanavigation from '../../Lamatanav';
// routes config
import Lamataroutes from '../../Lamataroutes';
import Spinner from "../../spinner/Spinner";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const LamataHeader = React.lazy(() => import('./LamataHeader'));

class LamataLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  render() {
    return (
      <div className="app">
        <AppHeader fixed  style={{border: 'none', backgroundColor: "#00BFFF"}}>
          <Suspense  fallback={this.loading()}>
            <LamataHeader/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg" style={{backgroundColor: "#00BFFF"}}>
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={Lamatanavigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter/>
            <AppSidebarMinimizer/>
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={Lamataroutes} router={router} />
            <Container fluid>
              <Suspense fallback={<Spinner />}>
                <Switch>
                  {Lamataroutes.map((route, idx) => {
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
                  <Redirect from="/lamata" to="lamata/dashboard" />
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

export default LamataLayout;
