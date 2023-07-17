import {
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSubmitButton,
  StyledAlert,
} from "./ContactForm.styled";
import { useContactForm } from "./useContactForm";

export default function ContactForm() {
  const {
    loading,
    alert,
    handleSubmit,
    handleChangeEmail,
    handleChangeMessage,
  } = useContactForm();

  const submitButtonVariant = loading ? "outlinedLoading" : "outlined";
  const submitButtonLabel = loading ? "•••" : "Wyślij";

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputGroup>
        <StyledLabel>E-mail</StyledLabel>
        <StyledInput onChange={handleChangeEmail} type="email" />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel>Wiadomość</StyledLabel>
        <StyledTextarea onChange={handleChangeMessage} />
      </StyledInputGroup>
      {alert && <StyledAlert>{alert}</StyledAlert>}
      <StyledSubmitButton variant={submitButtonVariant} type="submit">
        {submitButtonLabel}
      </StyledSubmitButton>
    </StyledForm>
  );
}
