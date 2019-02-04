import React from 'react';
import Proptypes from 'prop-types';
import { Container } from './CardItem.style';
import { CardItemTop } from './CardItemTop';
import { CardItemMiddle } from './CardItemMiddle';
import { CardItemBottom } from './CardItemBottom';

/**
*
*
* CardItem
*
* Renders a single card item
* Receives its `property` prop from its parent; `Dashboard`
*
*
*/

const CardItem = props => {
  const { loadedImagesMap, mainImageUrl, onPropertySelected } = props;
  return (
    <Container shouldHide={loadedImagesMap[mainImageUrl]} onClick={() => onPropertySelected(props)} >
      <CardItemTop {...props} />
      <CardItemMiddle {...props} />
      <CardItemBottom {...props} />
    </Container>
  )
}

CardItem.propTypes = {
  mainImageUrl: Proptypes.string.isRequired,
  loadedImagesMap: Proptypes.object.isRequired,
  onPropertySelected: Proptypes.func.isRequired,
};

export { CardItem };
