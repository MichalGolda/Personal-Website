import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media (${({ theme }) => theme.mediaQuery.small}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (${({ theme }) => theme.mediaQuery.sm}) {
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (${({ theme }) => theme.mediaQuery.md}) {
    margin: 0 auto;
    max-width: 1024px;
  }
`;

export default Container;
