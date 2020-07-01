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
import {admin} from "../../../environments/constants";



const Login  = ({LogIn, isAuthenticated, errors,}) => {
  const [formData, setFormData] = useState({username: '', password: ''});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { username, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    LogIn(username, password);
  };

  const isAdmin = sessionStorage.getItem('isAdmin');


  if (isAuthenticated && isAdmin === admin) {
    setTimeout(()=>{
      window.location.reload();
    },0);
    return <Redirect to="/" />;
  } else if (isAuthenticated && isAdmin !== admin) {
    setTimeout(()=>{
      window.location.reload();
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
                        {errors && <small className="text-danger text-center pb-1 font-italic">Incorrect Username or Password</small>}
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
  isAdmin: state.auth.isAdmin,
  errors: state.auth.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
