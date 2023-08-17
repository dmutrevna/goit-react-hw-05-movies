import Theme from 'components/Theme/Theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
}

.light {
  background-color: hsl(0, 0%, 93%);
}

.dark {
  background-color: hsl(0, 0%, 20%);
}
.light {
  background-color: ${Theme.light};
}
.dark {
  background-color: ${Theme.dark};
}
.active{
    border: 3px solid ${({ theme }) => theme.colors.border};
}
`;
