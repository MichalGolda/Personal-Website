import styled from "styled-components";

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
