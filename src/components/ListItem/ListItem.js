import React from 'react';
import Proptypes from 'prop-types';
import { compose } from 'redux';
import { Row, Column, Button, ImageWrap, Label, Copy } from './ListItem.style';
import { trackWindowScroll, LazyLoadImage } from 'react-lazy-load-image-component';
import windowDimensions from 'react-window-dimensions';

const MobileListViewBreakpoint = 986;

/**
*
*
* ListItem / ListItemBase wrapped in windowDimensions HOC
*
* Renders a single list item
* Receives its `property` prop from its parent; `Dashboard`
*
*
*/

const ListItemBase = props => {
  console.log('ListItemBase', props)
  const { onPropertySelected, scrollPosition, labels, image } = props;
  const { address: { address1 }, mainImageUrl, physical: { yearBuilt } } = props;
  const { financial: { listPrice, monthlyRent, grossYield } } = props;
  const componentsDesktop = [
   <ImageWrap>
      <LazyLoadImage
        alt={image.alt}
        src={mainImageUrl}
        effect={image.effect}
        height={image.height}
        scrollPosition={scrollPosition}
      >
      </LazyLoadImage>
    </ImageWrap>,
    <Copy>{address1}</Copy>,
    <Copy>{listPrice}</Copy>,
    <Copy>{monthlyRent}</Copy>,
    <Copy>{grossYield}</Copy>,
    <Copy>{yearBuilt}</Copy>,
    <Button onClick={onPropertySelected}>See Details</Button>
  ];
  
  const componentsMobile = [
   <ImageWrap>
      <LazyLoadImage
        alt={image.alt}
        src={mainImageUrl}
        effect={image.effect}
        height={image.height}
        scrollPosition={scrollPosition}
      >
      </LazyLoadImage>
    </ImageWrap>,
    <Copy><Label>{labels.address}</Label>{address1}</Copy>,
    <Copy><Label>{labels.listPrice}</Label>{listPrice}</Copy>,
    <Copy><Label>{labels.monthlyRent}</Label>{monthlyRent}</Copy>,
    <Copy><Label>{labels.grossYield}</Label>{grossYield}</Copy>,
    <Copy><Label>{labels.yearBuilt}</Label>{yearBuilt}</Copy>,
    <Button onClick={onPropertySelected}>{labels.seeDetails}</Button>
  ];
  const components = props.width <= MobileListViewBreakpoint ? componentsMobile : componentsDesktop;
  return(
    <Row>
     {components.map((Component, i) => {
        return(
          <Column key={i}>
            {Component}
          </Column>
        )
     })}
    </Row>
  )
};

ListItemBase.defaultProps = {
  image: {
    height: 40,
    effect: 'blur',
    alt: 'property photo',
  },
  labels: {
    address: 'address',
    listPrice: 'list price',
    monthlyRent: 'monthly rent',
    grossYield: 'gross yield',
    yearBuilt: 'year built',
    seeDetails: 'See Details',
  },
};

ListItemBase.propTypes = {
  image: Proptypes.object.isRequired,
  labels: Proptypes.object.isRequired,
  address: Proptypes.object.isRequired,
  financial: Proptypes.object.isRequired,
  scrollPosition: Proptypes.number,
  onPropertySelected: Proptypes.func.isRequired,
};

const ListItem = compose(
  trackWindowScroll,
  windowDimensions(),
)(ListItemBase)

export { ListItem };

