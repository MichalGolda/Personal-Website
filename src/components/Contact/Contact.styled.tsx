import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    display: flex;
    column-gap: 2rem;
    flex-direction: row;
  }
`;

export const StyledAside = styled.aside`
  & > p {
    margin-bottom: 2rem;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
`;

export const StyledLink = styled.a``;

export const StyledListItem = styled.li``;
