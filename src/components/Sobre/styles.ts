import styled from 'styled-components';

const FONT_FAMILY = "font-family: 'Exo', Roboto, sans-serif;";

export const Container = styled.div`
  width: 100%;
  align-items: center;

  h1 {
    color: ${({ theme: { primary } }) => primary};
    font-size: 4rem;
    ${FONT_FAMILY}
  }

  p {
    color: ${({ theme: { backgroundWhite } }) => backgroundWhite};
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 0.5px;
    font-size: 1.4rem;
    ${FONT_FAMILY}
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
