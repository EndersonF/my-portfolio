import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 12rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 1rem;
    border: 4px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      border-color: ${({ theme }) => theme.primary};
      > div.overlay {
        opacity: 0.4;
      }
    }
    > section {
      z-index: 2;
      h1 {
        background: #000;
        color: #fff;
        border: solid 1px #000;
        font-size: 1.5rem;
      }
      h2 {
        background: #000;
        color: #fff;
        font-weight: 300;
        font-size: 1.2rem;
      }
    }
    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.text};
      opacity: 0.3;
      transition: 0.7s;
    }
  }
`;
