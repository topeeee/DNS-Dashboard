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




const ForgetPassword  = ({LogIn, isAuthenticated, errors, admin, operator, partner}) => {
  const [formData, setFormData] = useState({password: '', confirmPassword: ''});
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { confirmPassword, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      setIsError("Passwords do not Match")
      setTimeout(()=> {
        setIsError('')
      }, 3000)
    }
  };

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
                      <p className="text-primary text-center">Change Password</p>
                      <div className="d-flex justify-content-center align-items-center">
                        {isError ? <small className="text-danger text-center pb-1 font-italic">{isError}</small>: null}
                      </div>

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock text-primary"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="New Password"
                          autoComplete="current-password"
                          name="password"
                          value={password}
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
                          placeholder="Confirm Password"
                          autoComplete="current-password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={onChange}
                        />
                      </InputGroup>
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Button color="primary" className="px-4 btn btn-ladda" data-style="expand-right" type="submit">Submit {isLoading && <i className="fa fa-spinner fa-spin"></i>}</Button>
                        </Col>
                      </Row>
                      {/*<Row>*/}
                      {/*  <Col className="d-flex align-items-center justify-content-center">*/}
                      {/*    <span className="text-primary py-2 cursor" style={{cursor: "default"}} >Forget password?</span>*/}
                      {/*  </Col>*/}
                      {/*</Row>*/}
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

ForgetPassword.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
