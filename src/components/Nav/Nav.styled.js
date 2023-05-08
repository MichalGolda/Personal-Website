import Link from "next/link";
import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 32px 0 32px 0;
  justify-content: space-between;
`;

export const StyledTextLogo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledTextLogoGradient = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 64px;
  display: none;

  @media (${({ theme }) => theme.breakpoints.md}) {
    display: inherit;
  }
`;

export const StyledListItem = styled.li`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledHamburger = styled.div`
  height: 2px;
  min-width: 24px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &:before {
    width: 32px;
    height: 2px;
    content: "";
    margin-top: -12px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:after {
    width: 32px;
    height: 2px;
    content: "";
    margin-top: 12px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
