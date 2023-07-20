import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  padding-bottom: 32px;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    font-size: 3rem;
  }
`;

export default SectionTitle;
