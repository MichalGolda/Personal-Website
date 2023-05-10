import styled from "styled-components";
import { variant } from "styled-system";

export const StyledButton = styled.button`
  padding: 16px 32px;
  border: none;
  column-gap: 32px;
  display: inline-flex;
  font-weight: 700;
  cursor: pointer;
  width: fit-content;
  background-color: transparent;
  font-size: 16px;
  transition: ${({ theme }) => theme.transition};

  ${variant({
    variants: {
      primary: {
        color: "white",
        backgroundColor: "secondary",
      },
      outlined: {
        color: "secondary",
        borderColor: "secondary",
        borderWidth: "2px",
        borderStyle: "solid",
        "&:hover": {
          backgroundColor: "secondary",
          color: "white",
        },
      },
      outlinedLoading: {
        pointerEvents: "none",
        color: "tertiary",
        borderColor: "tertiary",
        borderWidth: "2px",
        borderStyle: "solid",
      },
    },
  })};
`;
