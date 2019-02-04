import React from 'react';
import Proptypes from 'prop-types';
import { ArrowContainer, LoaderContainer } from './Icon.style';

/**
*
*
* Icon Component
*
* Takes and renders the icon `Component` as well as a `containerName` prop 
* which is used to conditionally apply styles
*
*
*/

const Icon = props => {
  const { Component, containers, containerName } = props;
  const Container = containers[containerName]
  return(
    <Container>
      <Component />
    </Container>
  )
};

Icon.defaultProps = {
  containers: { ArrowContainer, LoaderContainer },
};

Icon.propTypes = {
  Component: Proptypes.object,
  containerName: Proptypes.string,
  containers: Proptypes.object.isRequired,
};

export { Icon };
