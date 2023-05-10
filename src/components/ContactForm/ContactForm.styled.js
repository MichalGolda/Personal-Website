import { css } from "styled-components";
import styled from "styled-components";
import Button from "../Button/Button";

export const StyledForm = styled.form`
  display: flex;
  row-gap: 32px;
  width: 100%;
  flex-direction: column;

  @media (${({ theme }) => theme.breakpoints.md}) {
    max-width: 400px;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  row-gap: 4px;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 1rem;
`;

const inputCss = css`
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const StyledInput = styled.input`
  ${inputCss}
`;

export const StyledTextarea = styled.textarea`
  ${inputCss}
  min-height: 256px;
  resize: none;
`;

export const StyledSubmitButton = styled(Button)`
  margin: 0 auto;
`;
