import React, { Component } from 'react';
import Proptypes from 'prop-types';

/**
*
*
* Higher Order Component: withProperty
*
* Responsible for holding the propertySelected, only wrapped around the dashboard
* so one instance per application load
*
*
*/

const withProperty = WrappedComponent => {
  class withProperty extends Component {
    constructor(props) {
      super(props);
      this.state = {
        propertySelected: this.props.defaultPropertySelected,
      };
    }
    static defaultProps = {
      defaultPropertySelected: {},
    }
    isPropertySelected = () => {
      return Object.keys(this.state.propertySelected).length;
    }
    onPropertySelected = propertySelected => {
      if (!this.isPropertySelected()) {
        this.setState({ propertySelected });
      }
    }
    render() {
      const newProps = {...this.props, ...this.state};
      return(
        <WrappedComponent
          {...newProps}
          isPropertySelected={this.isPropertySelected}
          onPropertySelected={this.onPropertySelected}
        />
      )
    }
  }
  withProperty.propTypes = {
    defaultPropertySelected: Proptypes.object.isRequired,
  };
  return withProperty;
};


export default withProperty;
