import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledProject = styled.div`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  display: flex;
  row-gap: 8px;
  flex-direction: column;
`;

export const StyledName = styled.h3`
  font-weight: 900;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.secondary};

  @media (${({ theme }) => theme.mediaQuery.lg}) {
    font-size: 2rem;
  }
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (${({ theme }) => theme.mediaQuery.lg}) {
    width: 100%;
  }
`;

export const StyledCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCoverImage = styled(Image)`
  height: auto !important;
  border-radius: 2px;
  position: inherit !important;
`;

export const StyledTechnologyStackList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 8px;
  flex-wrap: wrap;
  justify-content: left;
`;
