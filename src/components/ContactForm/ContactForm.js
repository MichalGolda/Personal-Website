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
      <StyledSubmitButton
        variant={loading ? "outlinedLoading" : "outlined"}
        type="submit"
      >
        {loading ? "•••" : "Wyślij"}
      </StyledSubmitButton>
    </StyledForm>
  );
}
