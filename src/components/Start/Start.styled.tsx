import styled from "styled-components";
import Container from "@/components/Container";
import Image from "next/image";

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
  height: calc(100vh - 92.8px);
`;

export const StyledArticle = styled.article`
  & > h1 {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    font-weight: 900;
    line-height: 100.5%;
    text-transform: uppercase;

    @media (${({ theme }) => theme.mediaQuery.md}) {
      font-size: 4rem;
    }
  }

  & > p {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledImage = styled(Image)`
  position: relative !important;
  max-width: 512px;
  height: fit-content !important;
  display: none;

  @media (${({ theme }) => theme.mediaQuery.lg}) {
    display: block;
  }
`;
