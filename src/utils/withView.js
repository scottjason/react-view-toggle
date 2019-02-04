import React, { Component } from 'react';
import Proptypes from 'prop-types';

/**
*
*
* Higher Order Component: withView
*
* Responsible for holding selected view state (list view or card view).
*
*
*/

const withView = WrappedComponent => {
  class withView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentView: this.props.defaultView,
      };
    }
    static defaultProps = {
      defaultView: 'card',
    }
    onToggleView = selectedView => {
      this.setState({ currentView: selectedView });
    }
    render() {
      const newProps = {...this.props, ...this.state};
      return(
        <WrappedComponent
          {...newProps}
          onToggleView={this.onToggleView}
        />
      )
    }
  }
  withView.propTypes = {
    defaultView: Proptypes.string.isRequired,
  };
  return withView;
};


export default withView;
