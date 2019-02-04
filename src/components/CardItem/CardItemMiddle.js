import React, { Fragment } from 'react';
import { Row, Column, Content, Label, Line } from './CardItem.style';

const CardItemMiddle = props => {
  const { address: { address1 }, physical: { yearBuilt } } = props;
  return(
  <Fragment>
    <Row>
      <Column>
        <Label>address</Label>
        <Content width={70}>{address1}</Content>
      </Column>
      <Column>
        <Label>year built</Label>
        <Content right width={30}>{yearBuilt}</Content>
      </Column>
    </Row>
    <Line />
  </Fragment>
  )
}

export { CardItemMiddle };

