import React from 'react';
import Proptypes from 'prop-types';
import { CardIcon } from './CardIcon';
import { ListIcon } from './ListIcon';
import { Container, ControlWrap, Address, Logo } from './Navbar.style';

/**
*
*
* Navbar
*
* Renders on both routes
* On Dashboard route it renders the CardIcon and the ListIcon to toggle b/w views
*
*
*/

const Navbar = props => {
  const { isPropertyView, logoCopy, selectedProperty } = props;
  const address = selectedProperty && selectedProperty.address.address1;
  return(
    <Container isPropertyView={isPropertyView}>
      {!isPropertyView && <Logo>{logoCopy}</Logo>}
      <Address>{address}</Address>
      <ControlWrap isPropertyView={isPropertyView}>
        <CardIcon {...props} />
        <ListIcon {...props} />
      </ControlWrap>
    </Container>
  )
};

Navbar.defaultProps = {
  logoCopy: 'react view toggle',
};

Navbar.propTypes = {
  isPropertyView: Proptypes.bool,
  logoCopy: Proptypes.string.isRequired,
};

export { Navbar };
