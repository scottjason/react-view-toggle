import styled from 'styled-components';
import media from 'styled-media-query';
import { RoofstockTheme } from '../../constants';

const {
  orangePrimary,
  purplePrimary, 
  grayPrimary, 
  grayPrimaryLight
} = RoofstockTheme;

const rowMinWidth = '860px';
const MobileListViewBreakpoint = '986px';

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 90px;
  font-size: 1.4rem;
  font-weight: 400;
  min-width: ${rowMinWidth};
  background-color: white;
  border-bottom: 1px solid ${grayPrimaryLight};
  transition: all 275ms ease;
  box-sizing: border-box;
  &:last-child {
    border: none;
  }
 ${media.lessThan(MobileListViewBreakpoint)`
    flex-direction: column;
    height: auto;
    min-width: 280px;
    width: 100%;
  `}
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 13%;
  padding: 0 10px;
  box-sizing: border-box;
  &:nth-child(1) {
    width: 10%;
    align-items: center;
  }
  &:nth-child(2) {
    min-width: 160px;
    width: 20%;
  }
  &:nth-child(6) {
    padding-right: 0;
  }
  &:last-child {
    width: 33%;
    min-width: 180px;
    max-width: 260px;
    align-items: flex-start;
    padding-left: 0;
  }
  ${media.lessThan(MobileListViewBreakpoint)`
    width: 100% !important;
  `}
`;

export const ImageWrap = styled.div`
  display: block;
  position: relative;
   ${media.lessThan(MobileListViewBreakpoint)`
      position: absolute;
      right: 10px;
      top: 42px;
    `}
  > span > img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid ${grayPrimaryLight};
   ${media.lessThan(MobileListViewBreakpoint)`
      height: 150px;
      width: 200px;
      width: auto;
      border-radius: 5px;
      border: 1px solid ${grayPrimaryLight};
    `}
  }
`;

export const Copy = styled.p`
  color:  ${props => props.isRowHovered ? purplePrimary : grayPrimary};
  &:nth-child(1) {
    ${media.lessThan(MobileListViewBreakpoint)`
      margin-top: 15px;
    `}
  }
`;

export const Label = styled.span`
  font-size: 1rem;
  font-weight: 900;
  color: ${orangePrimary};
  text-transform: uppercase;
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 80%;
  height: 45px;
  border-radius: 5px;
  background-color: ${purplePrimary};
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all 275ms ease;
  &:hover {
    background-color: white;
    color: ${purplePrimary};
    border: 1px solid ${purplePrimary};
  }
  ${media.lessThan(MobileListViewBreakpoint)`
    width: 200px;
    margin: 15px 0 15px 10px;
  `}
`;
