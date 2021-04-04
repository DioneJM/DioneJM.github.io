import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  header {
    background: var(--color-background);
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
  }

  a {
    color: var(--color-accent);
  }

  // mobile first styling
  html {
    --font-size-small: 14px;
    --font-size-medium: 16px;
    --font-size-large: 24px;
  }
  
  // desktop styling override
  @media (min-width: 600px) {
    html {
      --font-size-small: 16px;
      --font-size-medium: 18px;
      --font-size-large: 32px;
    }

  }
`;

export default GlobalStyles;
