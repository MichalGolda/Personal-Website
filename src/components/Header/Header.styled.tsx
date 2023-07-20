import styled from "styled-components";
import Container from "@/components/Container";

export const StyledHeaderContainer = styled(Container)`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledInscription = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};

  & > span {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  align-items: center;
  z-index: 9999;
  display: none;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    display: flex;
    column-gap: 64px;
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

export const StyledLink = styled.a`
  text-decoration: none;
`;
