import styled from 'styled-components';

export const ThemeContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid hsl(0, 0%, 87%);
  width: 150px;
`;

export const ThemeButton = styled.button`
  margin: 0 5px;
  padding: 10px;
  font-size: 0.5rem;
  border: 1px solid hsl(0, 0%, 87%);
  border-radius: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px hsl(0, 0%, 87%);
  }
`;

export const light = {
  name: 'light-theme',
  colors: {
    header: 'hsl(0, 0%, 93%)',
    background: 'hsl(0, 0%, 100%)',
    footer: 'hsl(0, 1%, 38%)',
    text: 'hsl(0, 1%, 16%)',
    quoteBgc: 'hsl(60, 40%, 100%)',
    quoteTitle: 'hsl(0, 1%, 38%)',
    quoteBody: 'hsl(0, 1%, 38%);',
    quoteBorder: 'hsl(0, 0%, 87%)',
    border: 'hsl(0, 0%, 87%)',
  },
};

export const dark = {
  name: 'dark-theme',
  colors: {
    header: 'hsl(0, 0%, 20%)',
    background: 'hsl(0, 1%, 16%)',
    footer: 'hsl(0, 0%, 93%)',
    text: 'hsl(0, 0%, 100%)',
    quoteBgc: 'hsl(0, 0%, 35%)',
    quoteTitle: 'hsl(0, 0%, 100%)',
    quoteBody: 'hsl(0, 0%, 100%)',
    quoteBorder: 'hsl(0, 0%, 59%)',
    border: 'hsl(0, 0%, 78%)',
  },
};
