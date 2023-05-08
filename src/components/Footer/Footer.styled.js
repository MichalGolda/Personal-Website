import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  margin-top: 128px;
`;

export const StyledText = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;
