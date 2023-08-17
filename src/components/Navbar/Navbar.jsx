import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieNavbarContainer, MoviesNavLinkStyled } from './Navbar.styled';
import Theme from 'components/Theme/Theme';

const Navbar = () => {
  return (
    <MovieNavbarContainer>
      <MoviesNavLinkStyled>
        <NavLink to="/">Home</NavLink> {}
        <NavLink to="/movies">Movies</NavLink>
      </MoviesNavLinkStyled>
      <Theme />
    </MovieNavbarContainer>
  );
};

export default Navbar;
