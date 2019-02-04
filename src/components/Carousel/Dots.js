import React from 'react';
import { Dot, DotsContainer } from './Carousel.style';

const Dots = props => {
  const { images, activeSlide, onClickDot } = props;
  return(
    <DotsContainer>
      {images.map((property, i) => {
        return <Dot isActive={activeSlide === i} onClick={() => onClickDot(i)} key={i} property={property} />;
      })};
    </DotsContainer>
  )
};

export { Dots };
