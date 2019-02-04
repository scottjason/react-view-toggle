import styled from 'styled-components';

const minCardWitdh = '280px';
const minContainerWidth = '548px';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  height: auto;
  max-width: 90%;
  min-width: ${minContainerWidth};
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${minCardWitdh}, 3fr));
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`;

export const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
`;
