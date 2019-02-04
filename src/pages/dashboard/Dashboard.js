import React, { Component, Fragment } from 'react';
import Proptypes from 'prop-types';
import { CardItem } from '../../components/CardItem';
import { ListItem } from '../../components/ListItem';
import { ListHeader } from '../../components/ListHeader';
import  { Navbar } from '../../components/Navbar';
import { Loader } from '../../components/Loader';
import { Container, CardContainer, ListContainer } from './Dashboard.style';
import 'react-lazy-load-image-component/src/effects/blur.css';

/**
*
*
* Dashboard Page / Route
*
* Receives `properties`from the `withProperties` HOC
* Responsible for filtering out invalid property details (missing images, etc) then feeding this data
* to the component(s) it renders
*
*
*/

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedImagesMap: {},
    };
  }
  static defaultProps = {
    propertyDetailRoute: '/property-detail/',
  }
  componentDidUpdate() {
    if (this.props.isPropertySelected()) {
      const id = this.getPropertySelectedId();
      this.props.history.push(`${this.props.propertyDetailRoute}${id}`);
    }
  }
  getPropertySelectedId() {
    const { propertySelected: { id } } = this.props;
    return id;
  }
  isLoaded() {
    return this.props.properties.length > 0;
  }
  isListView() {
    return this.props.currentView === 'list';
  }
  getViewContainer() {
    return this.isListView() ? ListContainer : CardContainer;
  }
  getItemComponent() {
    return this.isListView() ? ListItem : CardItem;
  }
  getHeaderComponent() {
    return this.isListView() ? <ListHeader /> : null;
  }
  onJustBeforeImgLoad = imgUrl => {
    let { loadedImagesMap } = this.state;
    loadedImagesMap[imgUrl] = true;
    this.setState({ loadedImagesMap });
  }
  renderLoader() {
    return <Loader isLoaded={this.isLoaded()} />
  }
  renderContent() {
    const { onPropertySelected } = this.props;
    const ViewContainer = this.getViewContainer();
    const ItemComponent = this.getItemComponent();
    const HeaderComponent = this.getHeaderComponent();
    return(
      <Fragment>
        <Navbar{...this.props} />
        {HeaderComponent}
        <ViewContainer>
          {this.props.properties.map((property, i) => {
            return (
              <ItemComponent
                key={i}
                {...property}
                onBeforeLoad={this.onJustBeforeImgLoad}
                loadedImagesMap={this.state.loadedImagesMap}
                onPropertySelected={() => onPropertySelected(property)}
              />
            )
          })}
        </ViewContainer>
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

Dashboard.propTypes = {
  properties: Proptypes.array.isRequired,
  currentView: Proptypes.string.isRequired,
  onPropertySelected: Proptypes.func.isRequired,
  propertyDetailRoute: Proptypes.string.isRequired,
};

export { Dashboard };
