import styled from 'styled-components';

export const MovieCastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 10px);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 25px;
  margin-top: 25px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
