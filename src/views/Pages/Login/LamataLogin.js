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
import zeno from "../../../assets/img/brand/mini-New-Logo-RGB.png";
import {AppNavbarBrand} from "@coreui/react";
import {LamataLogIn} from "../../../store/actions/authenticationAction";




const LamataLogin  = ({LogIn, isAuthenticated, errors, admin, operator, partner, lamata}) => {
  const [formData, setFormData] = useState({username: '', password: ''});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { username, password } = formData;

  function  setError() {
    if( !lamata && errors ) {
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
},[lamata, errors]);


  const isLamata = sessionStorage.getItem('isLamata');

  const token = sessionStorage.getItem("token");
console.log(lamata, errors)

  if ((isAuthenticated && lamata) || (isLamata && token)) {
    sessionStorage.setItem('isLamata', lamata);
    setTimeout(()=> {
      window.location.reload()
    },0);
    return <Redirect to="/lamata" />;
  }


  return (
      <div className="app flex-row align-items-center" style={{background: "lightblue"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="px-4 bg-white">
                  <CardBody>
                    <Form onSubmit={onSubmit}>
                      <AppNavbarBrand className="d-flex align-items-center justify-content-center mb-1"
                        full={{src:zeno,  width: 80, height: 80, alt: 'Zeno Logo' }}
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

LamataLogin.propTypes = {
  LogIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};


function mapDispatchToProps(dispatch) {
  return {
    LogIn: (username, password) => dispatch(LamataLogIn(username,  password))
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

export default connect(mapStateToProps, mapDispatchToProps)(LamataLogin);
