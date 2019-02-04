import React, { Component, Fragment } from 'react';
import Proptypes from 'prop-types';
import{ Carousel } from '../../components/Carousel';
import { Container } from './PropertyDetail.style';
import  { Navbar } from '../../components/Navbar';
import { Loader } from '../../components/Loader';
import 'react-lazy-load-image-component/src/effects/blur.css';

/**
*
*
* Property Detail Page / Route
*
* Receives `properties`from the `withProperties` HOC
* Responsible for filtering out invalid property details (missing images, etc) then feeding this data
* to the component(s) it renders
*
*
*/

class PropertyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
  }
  static defaultProps = {
    isPropertyView: true,
  }
  componentDidMount() {
    /* 
     * properties available here when routed by react
    */
    if (this.isLoaded()) {
        /* 
         * just redirecting back to main dashboard route if a user
         * manually enters in a url for a non-existent property (or one that has no images)
        */
      const images = this.generateImages();
      const selectedProperty = this.getSelectedProperty();
      if (!images.length || !selectedProperty) {
        window.location.href='/';
      } else 
      this.setState({ images, selectedProperty });
    }
  }
  componentDidUpdate() {
    /* 
     * properties available here when url is directly entered
    */
    if (this.isLoaded() && !this.areImagesPopulated()) {
        /* 
          same redirect back to main dashboard route if a user
          manually enters in a url for a non-existent property (or one that has no images)
        */
      const images = this.generateImages();
      const selectedProperty = this.getSelectedProperty();
      if (!images.length || !selectedProperty) {
        window.location.href='/';
      } else 
      this.setState({ images, selectedProperty });
    }
  }

  isLoaded() {
    return this.props.properties.length > 0;
  }
  areImagesPopulated() {
    return this.state.images.length;
  }
  getPropertyId() {
    const { match: { params: { id } }} = this.props;
    return id;
  }
  getSelectedProperty() {
    const id = this.getPropertyId();
    return this.props.properties
      .filter(this.extractSelectedProperty(id))[0];
  }
  generateImages() {
    const id = this.getPropertyId()
    return this.props.properties
      .filter(this.extractSelectedProperty(id))
      .map(this.extractImages)
      .filter(this.disregardInvalids)
      .flat();
  }
  extractSelectedProperty = id => {
    return property => property.id === parseInt(id);
  }
  extractImages = property => {
    return property.resources && property.resources.photos;
  } 
  disregardInvalids = images => {
    return images.length;
  }
  renderLoader() {
    return <Loader isLoaded={this.isLoaded()} />
  }
  renderContent() {
    const newProps = {...this.state, ...this.props};
    return (
      <Fragment>
        <Navbar
          {...newProps}
        />
        <Carousel
          {...newProps}
          images={this.state.images}
        />
      </Fragment>
    )
  }
  render() {
    return (
      <Container>
        {this.renderLoader()}
        {this.isLoaded() && this.renderContent()}
      </Container>
    )
  }
}

PropertyDetail.propTypes = {
  properties: Proptypes.array.isRequired,
  resources: Proptypes.array,
  currentView: Proptypes.string,
  isPropertyView: Proptypes.bool.isRequired,
};

export { PropertyDetail };
