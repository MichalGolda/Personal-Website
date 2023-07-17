import styled from "styled-components";

export const StyledInscription = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledEmphasis = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
