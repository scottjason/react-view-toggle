import React from 'react';
import { ListWrap, ListLine } from './Navbar.style';

const ListIcon = props => {
  const { onToggleView, currentView } = props;
  const isListView = currentView === 'list';
  return(
    <ListWrap isListView={isListView} onClick={() => onToggleView('list')}>
      <ListLine isListView={isListView}  />
      <ListLine isListView={isListView}  />
      <ListLine isListView={isListView}  />
    </ListWrap>
  )
};

export { ListIcon };
