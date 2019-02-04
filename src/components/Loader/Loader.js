import React from 'react';
import Proptypes from 'prop-types';
import { compose } from 'redux';
import windowDimensions from 'react-window-dimensions';
import { Container, DotContainer, Copy, Dot } from './Loader.style';

/**
*
*
* Loader
*
* Renders a Loading Spinner
* Can be updated to take a `type` to make reusable in different contexts
*
*
*/

const LoaderBase = props => {
  const { height, isLoaded, loaderHeight, loadingCopy } = props;
  const getTop = () => height / 2 - loaderHeight;
  return (
    <Container isLoaded={isLoaded}>
      <DotContainer isLoaded={isLoaded} dotsContainerTop = {getTop()} >
        <Dot />
        <Dot />
        <Dot />
        <Copy>{loadingCopy}</Copy>
      </DotContainer>
    </Container>
  )
}

LoaderBase.defaultProps = {
  loaderHeight: 90,
  loadingCopy: 'fetching properties...',
};

LoaderBase.propTypes = {
  height: Proptypes.number.isRequired, /* window height */
  isLoaded: Proptypes.bool.isRequired,
  loaderHeight: Proptypes.number.isRequired,
  loadingCopy: Proptypes.string.isRequired,
};

const Loader = compose(
  windowDimensions(),
)(LoaderBase)

export { Loader }
