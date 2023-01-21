import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.border};
  border-radius: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.secondary};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.secondary)};
    }
  }
`;
