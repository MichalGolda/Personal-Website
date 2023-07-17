import { css } from "styled-components";
import styled from "styled-components";
import Button from "../Button/Button";

export const StyledForm = styled.form`
  display: flex;
  row-gap: 16px;
  width: 100%;
  flex-direction: column;
  padding: 16px;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    max-width: 400px;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 4px;
`;

const inputCss = css`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  padding: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  &:focus {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    border-left: 1px solid ${({ theme }) => theme.colors.secondary};
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  }
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

export const StyledAlert = styled.p`
  text-align: center;
`;
