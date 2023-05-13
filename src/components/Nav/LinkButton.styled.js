import Button from "../Button/Button";
import styled from "styled-components";

export const StyledLink = styled.a`
  @media (${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 0.8rem;
  padding: 8px 16px;
`;
