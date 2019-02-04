import styled from 'styled-components';
import { darken } from 'polished';
import { RoofstockTheme } from '../../constants';

const containerMinWidth = '320px';
const { grayPrimary, purplePrimary } = RoofstockTheme;

export const Container = styled.div`
  position: relative;
  display: flex;  
  flex-direction: column; 
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Slide = styled.div`
  position: relative;
    object-fit: cover;
    width: 100%;
`;

export const ImgWrap = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, .8);
  > span > img {
    position: absolute;
    width: calc(100% - 160px);
    height: 90%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    object-fit: cover;
  }
`;

export const ImgOverlay = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, .25);
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: ${darken(.4, 'white')};
`;

export const NavContainer = styled.div`
  position: absolute;
  display: flex;
  min-height: 100%;
  max-height: 550px;
  align-items: center;
  width: auto;
  top: 0;
  z-index: 20;
  background-color: ${darken(.1, 'white')};
  box-sizing: border-box;
  &:nth-child(3) {
    right: 0;
  }
`;

export const DotsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: auto;
  min-width: 200px;
  height: auto;
  padding: 25px 0;
  color: white;
  min-width: ${containerMinWidth};
  max-width: 600px;
  margin: 0 auto;
`;

export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 25px;
  background-color: ${props => props.isActive ? purplePrimary : grayPrimary};
  border: 1px solid white;
  margin-left: 7px;
  margin-right: 7px;
  opacity: .3;
  cursor: pointer;
  transition: all 275ms linear;
  &:hover {
    background-color: ${purplePrimary};
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
