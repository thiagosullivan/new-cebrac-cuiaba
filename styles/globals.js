import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
    scroll-behavior: smooth;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  img {
    /* width: 100%;
    max-width: 100%; */
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .disableScroll {
    height: 100%;
    overflow-y: hidden;
  }
  .home__bg {
    background: url('https://raw.githubusercontent.com/thiagosullivan/new-cebrac-cuiaba/main/assets/bg-2.2.png');
    background-size: 30%;
    width: 100%;
    height: 91px;
  }

  @media screen and (max-width: 980px){
    .home__bg {
      background-size: 80%;
      height: 109px;
    }
  }
`;