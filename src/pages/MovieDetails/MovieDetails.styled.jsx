import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
  background-color: rgb(189, 243, 251);
  max-width: 1200px;
  margin: 0 auto;

  button {
    padding: 10px 20px;
    background-color: gray;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgb(225 217 217);
      color: black;
    }
  }
`;

export const MovieDescriptionContainer = styled.div`
  display: flex;
`;

export const MovieImageStyled = styled.img`
  padding: 20px;
`;

export const MovieDescriptionStyled = styled.div`
  justify-content: flex-start;
`;

export const MovieListCast = styled.li`
  margin-bottom: 10px;
  a {
    color: black;
    font-size: 16px;

    &:hover {
      color: gray;
    }
  }
`;
