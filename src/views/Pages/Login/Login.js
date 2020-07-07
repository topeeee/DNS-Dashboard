import React, {useState} from 'react';
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




const Login  = ({LogIn, isAuthenticated, errors, admin, operator}) => {
  const [formData, setFormData] = useState({username: '', password: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { username, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    LogIn(username, password);
  };

  const isAdmin = sessionStorage.getItem('isAdmin');
  const isOperator = sessionStorage.getItem('isOperator');
  const token = sessionStorage.getItem("token");



  if ((isAuthenticated && admin && !operator) || (isAdmin && token)) {
    sessionStorage.setItem('isAdmin', admin);
    setTimeout(()=> {
      window.location.reload()
    },0);
    return <Redirect to="/" />;
  } else if ((isAuthenticated && !admin && operator) || (isOperator && token)) {
    sessionStorage.setItem('isOperator', operator);
    setTimeout(()=> {
      window.location.reload()
    },0);
    return <Redirect to="/operator" />;
  }

  return (
      <div className="app flex-row align-items-center" style={{background: "lightblue"}}>
        <Container>
          <Row className="justify-content-center">
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
                        {(errors && !isAdmin && !isOperator) ? <small className="text-danger text-center pb-1 font-italic">Incorrect Username or Password</small>: null}
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
                          <Button color="primary" className="px-4 btn btn-ladda" data-style="expand-right" type="submit">Login</Button>
                        </Col>
                      </Row>
                      <Row>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
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
  operator: state.auth.operator,
  errors: state.auth.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
