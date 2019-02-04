import React from 'react';
import { CardWrap, InnerCard, Line } from './Navbar.style';

const CardIcon = props => {
  const { onToggleView, currentView } = props;
  const isListView = currentView === 'list';
  return(
    <CardWrap isListView={isListView}  onClick={() => onToggleView('card')}>
      <InnerCard isListView={isListView}>
        <Line isListView={isListView} width={'100%'} height={'1px'} />
        <Line isListView={isListView} width={'1px'} height={'100%'} />
      </InnerCard>
    </CardWrap>
  )
};

export { CardIcon };
