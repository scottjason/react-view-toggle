import styled from 'styled-components';
import media from 'styled-media-query';
import { RoofstockTheme } from '../../constants';

const { purplePrimary } = RoofstockTheme;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 80px;
  width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.isPropertyView ? '0 0 0 65px' : '0'};
  box-sizing: border-box;
`;

export const ControlWrap = styled.div`
  position: absolute;
  display: ${props => props.isPropertyView ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: flex-end;
  bottom: 10px;
  right: 0;
  width: auto;
  height: 40px;
`;

export const Logo = styled.h1`
  font-size: 1.8em;
  color: rgba(0, 0, 0, .15);
  letter-spacing: .4rem;
  text-transform: uppercase;
  margin-bottom: 15px;
 ${media.lessThan('880px')`
    display: none;
  `}
`;

export const Address = styled.h2`
  font-size: 1.8em;
  color: black;
  letter-spacing: .4rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-left: auto;
  right: 0;
  margin-right: 60px;
 ${media.lessThan('880px')`
    margin-right: auto;
  `}
`;

/**
*
* ListIcon Styles
*
*/

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${props => props.isListView ? purplePrimary : 'white'};
  border-bottom-left-radius: 0;
  border: 1px solid rgba(0, 0, 0, .2);
  box-sizing: border-box;
  cursor: pointer;
  z-index: 3;
`;

export const ListLine = styled.div`
  position: relative;
  margin: 5px auto 0 auto;
  width: 20px;
  height: 2px;
  background-color: ${props => props.isListView ? 'white': 'rgba(0, 0, 0, .2)'};
  &:nth-child(1) {
    margin-top: 11px;
  }
`;


/**
*
* CardWrap Styles
*
*/

export const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  background-color: ${props => props.isListView ? 'white' : purplePrimary};
  box-sizing: border-box;
  cursor: pointer;
  z-index: 3;
`;

export const InnerCard = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  background-color: ${props => props.isListView ? 'rgba(0, 0, 0, .2)' : 'white'};
`;

export const Line = styled.div`
  position: absolute; 
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.isListView ? 'white': purplePrimary};
`;
