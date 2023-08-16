import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieNavbarContainer, MoviesNavLinkStyled } from './Navbar.styled';

const Navbar = () => {
  return (
    <MovieNavbarContainer>
      <MoviesNavLinkStyled>
        <NavLink to="/">Home</NavLink> {}
        <NavLink to="/movies">Movies</NavLink>
      </MoviesNavLinkStyled>
    </MovieNavbarContainer>
  );
};

export default Navbar;
