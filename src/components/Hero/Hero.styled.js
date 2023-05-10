import styled from "styled-components";
import Image from "next/image";

export const StyledHero = styled.div`
  display: flex;
  row-gap: 16px;
  justify-content: left;
  flex-direction: column;
  margin-top: -48px;

  @media (${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: 900;
  line-height: 100.5%;
  text-transform: uppercase;

  @media (${({ theme }) => theme.breakpoints.md}) {
    font-size: 64px;
  }
`;

export const StyledDescription = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledTextContainer = styled.div`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
`;

export const StyledImageContainer = styled.div`
  max-width: 512px;
  width: 100%;
`;

export const StyledImage = styled(Image)`
  position: inherit !important;
  display: none;

  @media (${({ theme }) => theme.breakpoints.md}) {
    display: inherit;
  }
`;
