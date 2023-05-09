import { useState } from "react";
import {
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSubmitButton,
} from "./ContactForm.styled";
import { useContactForm } from "./useContactForm";

export default function ContactForm() {
  const { handleSubmit, handleChangeEmail, handleChangeMessage } =
    useContactForm();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputGroup>
        <StyledLabel>E-mail</StyledLabel>
        <StyledInput onChange={handleChangeEmail} type="email" required />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel>Wiadomość</StyledLabel>
        <StyledTextarea onChange={handleChangeMessage} required />
      </StyledInputGroup>
      <StyledSubmitButton variant="outlined" type="submit">
        Wyślij
      </StyledSubmitButton>
    </StyledForm>
  );
}
