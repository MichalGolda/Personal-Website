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

export const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 16px 0 16px 0;
`;

export const StyledTextarea = styled.textarea`
  border: none;
  width: 100%;
  font-size: 1rem;
  min-height: 256px;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 16px 0 16px 0;
  resize: none;
`;

export const StyledSubmitButton = styled(Button)`
  margin: 0 auto;
`;
