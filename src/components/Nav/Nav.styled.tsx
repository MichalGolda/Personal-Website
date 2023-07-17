import styled from "styled-components";
import LinkButton from "../LinkButton/LinkButton";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 32px 0 32px 0;
  justify-content: space-between;
`;

export const StyledLinkButton = styled(LinkButton)`
  font-size: 0.8rem;
  padding: 8px 16px;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    display: none;
  }
`;
