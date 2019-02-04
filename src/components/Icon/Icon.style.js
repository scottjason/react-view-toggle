import styled from 'styled-components';
import { RoofstockTheme } from '../../constants';

const {
  grayPrimary,
  purplePrimary
} = RoofstockTheme;

export const ArrowContainer = styled.div`
  position: relative;
  width: 60px;
  height: auto;
  color: ${grayPrimary};
  opacity: .5;
  > svg {
    transition: transform 225ms linear;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      color: ${purplePrimary};
    }
`;

export const LoaderContainer = styled.div`
  position: relative;
  width: 100px;
  height: auto;
  color: ${purplePrimary};
`;
