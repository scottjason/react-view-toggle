import styled from 'styled-components';
import { RoofstockTheme } from '../../constants';

const { orangePrimary } = RoofstockTheme;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  min-width: 100%;
  overflow: hidden;
  background-color: white;  
  cursor: ${props => props.shouldHide ? 'pointer': 'normal'};
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
`;
export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;  
`;

export const ImageWrap = styled.div`
  position: relative;
  > span > img {
    object-fit: cover;
    width: 100%;
    min-height: 220px;
    z-index: 2;
  }
`;

export const PlaceholderImageWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 300px;
  object-fit: cover;
  box-sizing: border-box;
`;

export const PlaceholderImage = styled.img`
  position: absolute;
  top: 0;
  display: block;
  opacity: ${props => props.shouldHide ? '0': '1'};
  object-fit: cover;
  min-width: 100%;
  width: auto;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  max-height: 240px;
  min-height: 230px;
  transition: opacity 300ms linear;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  height: calc(100% - 100px);
  background-color: rgba(0, 0, 0, .3);
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: left;
  background-color: white;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Label = styled.p`
  font-size: .8rem;
  font-weight: 900;
  color: ${orangePrimary};
  text-transform: uppercase;
`;

export const Price = styled.h2`
  position: absolute;
`;

export const Content = styled.h2`
  color: black;
  background-color: white;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: ${props => getTextAlign(props)};
`;

export const ListPrice = styled.div`
  position: absolute;
  display: flex;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  top: 78px;
  right: 10px;
  bottom: 0;
  align-items: center;
  letter-spacing: .07rem;
`;

export const Line = styled.div`
  width: 80%;
  height: 1px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, .15);
`;

function getTextAlign(props) {
  if (props.center) {
    return 'center';
  } else if(props.right) {
    return 'right';
  } else  {
    return 'left';
  }
}
