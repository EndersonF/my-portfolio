import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
  }
  body {
    background: ${props => props.theme.lightslategrey};
    font: 400 1rem 'Exo', sans-serif;
  }

  img.logo404 {
    width:400px;
    height:200px;
    position: absolute;
    margin-top: 15%;
    border: 4px solid #fff;
    border-radius: 4px;
    box-shadow: 12px 12px black, -1em 0 0.4em gray; 
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }
`;
