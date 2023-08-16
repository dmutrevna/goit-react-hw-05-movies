import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 25px;
  margin-top: 25px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MoviesItemStyled = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
  text-align: center;
  background-color: rgb(189, 243, 251);
`;

export const MoviesImgStyled = styled.img`
  width: 200px;
  height: 300px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px) scale(1.07);
    filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
  }
`;

export const MoviesSubtitleStyled = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;
