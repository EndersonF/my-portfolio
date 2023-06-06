import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .Fotoperfil > div {
    flex: 1;
    width: 34rem;
    display: block;
    border-radius: 50%;
    margin-bottom: 50px;
    border: 1vh solid ${({ theme }) => theme.border};
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1000px) {
    .Fotoperfil > div {
      width: 26rem;
    }
  }

  @media (max-width: 750px), (max-width: 500px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
    .Fotoperfil > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  h1 {
    font-family: 'Cutive Mono', IBM Plex Mono, monospace;
    font-size: 4.7rem;
    color: ${({ theme }) => theme.primary};
    letter-spacing: -6px;
    text-align: center;
    word-spacing: -0.875rem;
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3.2rem;
      line-height: 1.2;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.background3};
  padding: 2rem;
  font-family: 'Exo', monospace;
  font-weight: 400;
  color: ${({ theme }) => theme.backgroundWhite};
  width: 25rem;
  align-self: flex-start;
  transition: 3s !important;
  border-radius: 20px;

  @media (max-width: 1450px) {
    width: 21rem;
    padding: 2rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px),
    (max-width: 700px),
    (max-width: 500px),
    (max-width: 400px) {
    width: 100%;
    align-self: center;
    font-size: 0.6rem;
  }

  &:hover {
    filter: brightness(1.3);
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 0.2rem;
    line-height: 1.3;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }
`;
