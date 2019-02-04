import styled from 'styled-components';

const containerMinWidth = '280px';
const containerMaxWidth = '1024px';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding-bottom: 60px;
  max-width: ${containerMaxWidth};
  min-width: ${containerMinWidth};
`;
