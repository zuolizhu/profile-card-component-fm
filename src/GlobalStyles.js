import { createGlobalStyle } from 'styled-components';
import BgTop from './images/bg-pattern-top.svg';
import BgBottom from './images/bg-pattern-bottom.svg';

const GlobalStyle = createGlobalStyle`
:root {
  --color-white: #fff;
  --color-dark-cyan: hsl(185, 75%, 39%);
  --color-dark-blue: hsl(229, 23%, 23%);
  --color-gray-blue: hsl(227, 10%, 46%);
  --color-gray: hsl(0, 0%, 59%);

  /* Font Weights */
  --weight-bold: 700;
  --weight-regular: 400;
}
/* reset */
html {
box-sizing: border-box;
font-size: 62.5%;
}

*, *::before, *::after {
  box-sizing: inherit;
}

html, body, #root, .App {
  height: 100%;
}

body {
  margin: 0;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  background-color: var(--color-white);
  font-family: 'Kumbh Sans', sans-serif;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.App {
  background-repeat: no-repeat;
  padding: 14.7rem 2.4rem 14.6rem 2.5rem;
  background-color: var(--color-dark-cyan);
  background-image: url(${BgTop}), url(${BgBottom});
  background-position: -76rem -48rem, 15rem 27rem;
  @media (min-width: 768px) {
    background-position: -28.57rem -50.79rem, 69.2rem 37.6rem;
  }
  
  @media (min-width: 480px) {
    padding: 17.3rem 0 17.3rem;
  }
}
`;

export default GlobalStyle;