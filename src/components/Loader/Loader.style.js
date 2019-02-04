import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { RoofstockTheme } from '../../constants';

const { purplePrimary, grayPrimary } = RoofstockTheme;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;
  min-height: 100%;
  background-color: ${darken(.1, 'white')};
  opacity: ${props => props.isLoaded ? '0' : '1'};
  transition: all 2.5s linear;
  `;

export const Copy = styled.p`
  color: ${grayPrimary};
  font-size: 1.6rem;
  position: absolute;
  top: 60px;
`;

const bouncingAnimation = keyframes`
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`;

export const DotContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  opacity: ${props => props.isLoaded ? '0' : '1'};
  transition: opacity .75s linear;
  top: ${props => `${props.dotsContainerTop}px` };
`;

export const Dot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 3rem 0.2rem;
  background: ${purplePrimary};
  opacity: .7;
  border-radius: 50%;
  animation: ${bouncingAnimation} 0.6s infinite alternate;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
