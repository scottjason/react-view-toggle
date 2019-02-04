import React from 'react';
import Proptypes from 'prop-types';
import { HeaderRow, HeaderCol } from './ListHeader.style';

/**
*
*
* ListHeader
*
* Renders a single header at the top of the list view
*
*
*/

const ListHeader = props => {
  return(
    <HeaderRow>
      <HeaderCol></HeaderCol>
      <HeaderCol>{props.address}</HeaderCol>
      <HeaderCol>{props.listPrice}</HeaderCol>
      <HeaderCol>{props.monthlyRent}</HeaderCol>
      <HeaderCol>{props.grossYield}</HeaderCol>
      <HeaderCol>{props.yearBuilt}</HeaderCol>
      <HeaderCol></HeaderCol>
    </HeaderRow>
  )
};

ListHeader.defaultProps = {
  address: 'address',
  listPrice: 'list price',
  monthlyRent: 'monthly rent',
  grossYield: 'gross yield',
  yearBuilt: 'year built',
};

ListHeader.propTypes = {
  address: Proptypes.string.isRequired,
  listPrice: Proptypes.string.isRequired,
  monthlyRent: Proptypes.string.isRequired,
  grossYield: Proptypes.string.isRequired,
  yearBuilt: Proptypes.string.isRequired,
};

export { ListHeader };
