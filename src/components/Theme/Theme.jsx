import React from 'react';
import { ThemeButton, ThemeContainer } from './Theme.styled';

const Theme = () => {
  return (
    <>
      <ThemeContainer>
        <span>Themes: </span>
        <ThemeButton className="light active"></ThemeButton>
        <ThemeButton className="dark"></ThemeButton>
      </ThemeContainer>
    </>
  );
};

export default Theme;
