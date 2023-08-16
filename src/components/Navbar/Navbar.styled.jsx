import styled from 'styled-components';

export const MovieNavbarContainer = styled.div`
  background-color: rgb(225 217 217);
  padding: 10px;
`;

export const MoviesNavLinkStyled = styled.nav`
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  justify-content: center;
  display: flex;
  gap: 30px;

  a {
    color: black;
    font-size: 16px;

    &:hover {
      transform: translateY(-2px) scale(1.07);
      filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
      color: gray;
    }
    &.active {
      color: gray;
    }
  }
`;
