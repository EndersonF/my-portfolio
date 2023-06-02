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
}

.overflow-hidden {
  overflow-x: hidden;
}

@media (max-width: 1450px) {
  .overflow-hidden {
    max-width: 70rem;
  }
}

@media (max-width: 1000px) {
  .container {
    max-width: 50rem;
  }
}

@media (max-width: 700px) {
  .container {
    padding: 0 2rem;
  }
}

@media (max-width: 500px) {
  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 400px) {
  .container {
    padding: 0 0.5rem;
  }
}
`;
