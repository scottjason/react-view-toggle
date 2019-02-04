import React, { Fragment } from 'react';
import { ListPrice, Overlay, ImageWrap, PlaceholderImage, PlaceholderImageWrap } from './CardItem.style';
import { trackWindowScroll, LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderImage from '../../assets/images/placeholder-blurry.jpg';

const CardItemTopBase = props => {
  const {
    listPrice,
    mainImageUrl,
    onBeforeLoad,
    scrollPosition,
    loadedImagesMap,
  } = props;

  return (
    <Fragment>
      <ListPrice>{listPrice}</ListPrice>
      <Overlay />
      <ImageWrap>
        <LazyLoadImage
          alt={'property image'}
          src={mainImageUrl}
          effect='opacity'
          height={230}
          afterLoad={() => onBeforeLoad(mainImageUrl)}
          scrollPosition={scrollPosition}
        />
        <PlaceholderImageWrap>
          <PlaceholderImage
            src={placeholderImage}
            shouldHide={loadedImagesMap[mainImageUrl]}
          >
          </PlaceholderImage>
        </PlaceholderImageWrap>
      </ImageWrap>
    </Fragment>
  )
}

const CardItemTop = trackWindowScroll(CardItemTopBase);
export { CardItemTop };
