import {
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSubmitButton,
} from "./ContactForm.styled";

export default function ContactForm() {
  return (
    <StyledForm>
      <StyledInputGroup>
        <StyledLabel>E-mail</StyledLabel>
        <StyledInput type="email" />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel>Wiadomość</StyledLabel>
        <StyledTextarea />
      </StyledInputGroup>
      <StyledSubmitButton variant="outlined" type="submit">
        Wyślij
      </StyledSubmitButton>
    </StyledForm>
  );
}
