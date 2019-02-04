
import React from 'react';
import { Icon } from '../Icon';
import { ChevronLeft, ChevronRight } from 'styled-icons/feather';
import { NavContainer } from './Carousel.style';

const Navigation = props => {
  const { iconType, onNavClick, iconContainers, componentName } = props;
  const components = { ChevronLeft, ChevronRight };
  const getComponent = () => components[componentName];
  const getContainerName = () => iconContainers[iconType];
  return (
    <NavContainer onClick={onNavClick}>
      <Icon
        containerName={getContainerName()}
        Component={getComponent()}
      />
    </NavContainer>
  )
};

Navigation.defaultProps = {
  iconContainers: {
    arrowLeft: 'ArrowContainer',
    arrowRight: 'ArrowContainer',
  },
};

export { Navigation };
