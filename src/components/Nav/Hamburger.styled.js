import styled from "styled-components";

export const StyledHamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  cursor: pointer;

  @media (${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledHamburgerSpan = styled.span`
  width: 32px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &:nth-child(even) {
    width: 24px;
  }
`;
