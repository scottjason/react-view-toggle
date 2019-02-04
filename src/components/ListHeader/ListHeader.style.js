import styled from 'styled-components';
import media from 'styled-media-query';
import { RoofstockTheme } from '../../constants';
import { Row, Column } from '../ListItem/ListItem.style';

const MobileListViewBreakpoint = '986px';
const { orangePrimary } = RoofstockTheme;

export const HeaderCol = styled(Column)`
  font-size: .9rem;
  font-weight: 900;
  color: ${orangePrimary};
  text-transform: uppercase;
  &:first-child,
  &:last-child {
    visibility: hidden;
  }
`;

export const HeaderRow = styled(Row)`
  height: 40px;
 ${media.lessThan(MobileListViewBreakpoint)`
    display: none;
  `}
`;
