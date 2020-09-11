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
import Partnernav from '../../Partnernav';
import Partnerroutes from '../../Partnerroutes';
import Spinner from "../../spinner/Spinner";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./PartnerHeader'));

class PartnerLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;




  render() {
    return (
      <div className="app">
        <AppHeader fixed  style={{border: 'none', backgroundColor: "white", paddingTop: '20px'}}>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader/>
          </Suspense>
        </AppHeader>
        <div className="app-body" style={{backgroundColor: "white"}}>
          <AppSidebar fixed display="lg" style={{backgroundColor: "#00BFFF", marginTop:'45px', border: '1px solid lightgrey'}}>
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={Partnernav} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            {/*<AppSidebarMinimizer />*/}
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={Partnerroutes} router={router} className="position-fixed w-100 headline" />
            <Container fluid className="mt-5">
              <Suspense fallback={<Spinner />}>
                <Switch>
                  {Partnerroutes.map((route, idx) => {
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
                  <Redirect from="/partner" to="partner/dashboard" />
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
        <AppFooter style={{backgroundColor: "#00BFFF"}}>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}



export default PartnerLayout;
