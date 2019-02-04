import React from 'react';
import { Row, Column, Content, Label } from './CardItem.style';

const CardItemBottom = props => {
  const { financial: { listPrice, monthlyRent, grossYield } } = props;
  return (
    <Row>
      <Column>
        <Label>list price</Label>
        <Content width={33.33}>{listPrice}</Content>
      </Column>
      <Column>
        <Label>gross yield</Label>
        <Content center width={33.33}>{grossYield}</Content>
      </Column>
      <Column>
        <Label>monthly rent</Label>
        <Content right width={33.33}>{monthlyRent}</Content>
      </Column>
    </Row>
  )
}

export { CardItemBottom };

