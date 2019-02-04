import React from 'react';
import { compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/';
import { PropertyDetail } from './pages/property-detail/';
import withView from './utils/withView';
import withProperty from './utils/withProperty';
import withProperties from './utils/withProperties';
import GlobalStyles, { Container } from './App.style';

const EnhancedDashboard = compose(
  withView,
  withProperty,
)(Dashboard)


const App = props => (
  <Router>
    <Container>
      <GlobalStyles />
        <Route exact path='/' render={routerProps => <EnhancedDashboard {...props} {...routerProps} />} />
        <Route exact path='/property-detail/:id' render={routerProps => <PropertyDetail {...props} {...routerProps} />} />
    </Container>
  </Router>
);

export default withProperties(App);
