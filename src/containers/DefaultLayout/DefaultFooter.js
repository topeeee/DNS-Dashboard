import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isAdmin, isLamata} from "../../environments/constants";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="#" className={!isAdmin? 'text-dark': ''}>Zeno Digital Limited</a> &copy; 2020.</span>
        {/*<span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>*/}
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
