import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { compose } from 'redux';
import Slider from 'react-slick';
import { Dots } from './Dots';
import { Navigation } from './Navigation';
import { Container, Row, Slide, ImgWrap, ImgOverlay } from './Carousel.style';
import { trackWindowScroll, LazyLoadImage } from 'react-lazy-load-image-component';

/**
*
*
* Carousel
*
* Renders the Carousel, Controls Navigation, Holds `activeSlide` state
*
*
*/

export default class CarouselBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    }
  }
  static defaultProps = {
    iconTypes: {
      arrowLeft: 'arrowLeft',
      arrowRight: 'arrowRight',
    },
    iconNames: {
      arrowLeft: 'ChevronLeft',
      arrowRight: 'ChevronRight',
    },
    sliderOpts: {
      arrows: false,
      autoplay: false,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      swipeToSlide: true,
      slidesToScroll: 1,
    }
  }
  onPrevSlide = () => {
    this.slider.slickPrev();
  }
  onNextSlide = () => {
    this.slider.slickNext();
  }
  onBeforeSliderChange = (current, next) => {
    let activeSlide = next < 0 ? current : next;
    this.setState({ activeSlide });
  }
  onClickDot = idx => {
    this.slider.slickGoTo(idx);
    this.setState({ activeSlide: idx });
  }
  sliderOpts() {
    return {...this.props.sliderOpts, ...{ beforeChange: this.onBeforeSliderChange }};
  }
  render() {
    return(
      <Container>
        <Row>
          <Navigation
            iconType={this.props.iconTypes.arrowLeft}
            onNavClick={this.onPrevSlide}
            componentName={this.props.iconNames.arrowLeft}
          />
          <Slider ref={c => (this.slider = c)} {...this.sliderOpts()}>
            {this.props.images.map((image, i) => {
              return (
                <Slide key={i}>
                  <ImgOverlay />
                  <ImgWrap>
                    <LazyLoadImage
                      alt={'property image'}
                      src={image.url}
                      effect='opacity'
                      height={350}
                      scrollPosition={this.props.scrollPosition}
                    />
                  </ImgWrap>
                </Slide>
              )
            })}
          </Slider>
          <Navigation
            iconType={this.props.iconTypes.arrowRight}
            onNavClick={this.onNextSlide}
            componentName={this.props.iconNames.arrowRight}
          />
        </Row>
        <Dots
          {...this.props}
          activeSlide={this.state.activeSlide}
          onClickDot={this.onClickDot}
        />
      </Container>
    )
  }
};

CarouselBase.propTypes = {
  iconTypes: Proptypes.object.isRequired,
  iconNames: Proptypes.object.isRequired,
  sliderOpts: Proptypes.object.isRequired,
  properties: Proptypes.array.isRequired,
  scrollPosition: Proptypes.number,
};

const Carousel = compose(
  trackWindowScroll,
)(CarouselBase)

export { Carousel };
