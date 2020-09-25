import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import zeno from "../../../assets/img/brand/zeno.png";
import {AppNavbarBrand} from "@coreui/react";
import {LogIn} from "../../../store/actions/authenticationAction";




const Login  = ({LogIn, isAuthenticated, errors, admin, operator, partner}) => {
  const [formData, setFormData] = useState({username: '', password: ''});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { username, password } = formData;

  function  setError() {
    if((!admin && errors) || (!operator && errors) && (!partner && errors)) {
      setIsLoading(false);
      setIsError(true);
      setTimeout(()=> {
        setIsError(false)
      },3000)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    LogIn(username, password);
    setIsLoading(true);
  };

useEffect(()=> {
  setError();
},[isAuthenticated, partner, operator, admin, errors]);

  const isAdmin = sessionStorage.getItem('isAdmin');
  const isOperator = sessionStorage.getItem('isOperator');
  const isPartner = sessionStorage.getItem('isPartner');
  const token = sessionStorage.getItem("token");


  if ((isAuthenticated && admin) || (isAdmin && token)) {
    sessionStorage.setItem('isAdmin', admin);
    setTimeout(()=> {
      window.location.reload()
    },0);
    return <Redirect to="/" />;
  } else if ((isAuthenticated && operator) || (isOperator && token)) {
    sessionStorage.setItem('isOperator', operator);
    setTimeout(()=> {
      window.location.reload()
    },0);
    return <Redirect to="/operator" />;
  } else if ((isAuthenticated && partner) || (isPartner && token)) {
    sessionStorage.setItem('isPartner', partner);
    setTimeout(()=> {
      window.location.reload()
    },0);
    return <Redirect to="/partner" />;
  }

  return (
    <div className="app flex-row align-items-center" style={{background: "#fafafa"}}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md="12" className="text-center text-capitalize  font-weight-bold font-2xl text-primary">THE LAGOS STATE DRIVER MANAGEMENT SYSTEM</Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col md="5">
              <CardGroup>
                <Card className="px-4 bg-dark">
                  <CardBody>
                    <Form onSubmit={onSubmit}>
                      <AppNavbarBrand className="d-flex align-items-center justify-content-center mb-1"
                        full={{src:zeno,  width: 89, height: 25, alt: 'Zeno Logo' }}
                      />
                      {/*<h1>Login</h1>*/}
                      <p className="text-primary text-center">Sign In to your account</p>
                      <div className="d-flex justify-content-center align-items-center">
                        {isError ? <small className="text-danger text-center pb-1 font-italic">Incorrect Username or Password</small>: null}
                      </div>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user text-primary"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input

                          placeholder="Username"
                          autoComplete="username"
                          name="username"
                          value={username}
                          onChange={onChange}
                        />

                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock text-primary"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          name="password"
                          value={password}
                          onChange={onChange}
                        />
                      </InputGroup>
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Button color="primary" className="px-4 btn btn-ladda" data-style="expand-right" type="submit">Login {isLoading && <i className="fa fa-spinner fa-spin"></i>}</Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                          <span className="text-primary py-2 cursor" style={{cursor: "default"}} >Forget password?</span>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <small className="font-italic">Powered by Zeno Digital Limited</small>
          </Row>
        </Container>
      </div>
    );
  };

Login.propTypes = {
  LogIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};


function mapDispatchToProps(dispatch) {
  return {
    LogIn: (username, password) => dispatch(LogIn(username,  password))
  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  admin: state.auth.admin,
  lamata: state.auth.lamata,
  operator: state.auth.operator,
  partner: state.auth.partner,
  errors: state.auth.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
