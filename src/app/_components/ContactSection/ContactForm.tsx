"use client";

import {
  sendMessage,
  SendMessageActionStatus,
} from "@/app/_actions/sendMessage";
import { useFormState } from "react-dom";
import {
  PrimaryButton,
  Checkbox,
  TextField,
  SuccessAlert,
  ErrorAlert,
} from "@/app/_components";
import { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";

export type ContactFormProps = React.FormHTMLAttributes<{}>;
export type FormState = {
  status: SendMessageActionStatus | null;
};

const initialFormState: FormState = {
  status: null,
};

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const [formState, formAction] = useFormState(sendMessage, initialFormState);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    if (formState) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [formState]);

  return (
    <>
      {formState.status === SendMessageActionStatus.SUCCESS && showAlert && (
        <SuccessAlert message="Wiadomość została pomyślnie wysłana." />
      )}
      {formState.status === SendMessageActionStatus.ERROR && showAlert && (
        <ErrorAlert message="Podczas wysyłania wiadomości wystąpił nieoczekiwany błąd. Spróbuj ponownie." />
      )}
      <form
        className="flex flex-col gap-y-8 lg:max-w-2xl w-full"
        action={formAction}
        autoComplete="off"
        {...props}
      >
        <h4 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold">
          Formularz kontaktowy
        </h4>
        <TextField
          label="E-mail"
          labelFor="email-input"
          as={(className) => (
            <input
              id="email-input"
              className={className}
              name="email"
              type="email"
              required
            />
          )}
        />
        <TextField
          label="Numer telefonu"
          labelFor="phone-number-input"
          as={(className) => (
            <input
              id="phone-number-input"
              className={className}
              name="phoneNumber"
              type="tel"
              required
            />
          )}
        />
        <TextField
          label="Wiadomość"
          labelFor="message-content-input"
          as={(className) => (
            <textarea
              id="message-content-input"
              className={`min-h-64 max-h-96 ${className}`}
              name="messageContent"
              required
            ></textarea>
          )}
        />
        <Checkbox
          id="agreement"
          label="Wyrażam zgodę na przetwarzanie danych osobowych"
          name="agreement"
          required
        />
        <SubmitButton />
      </form>
    </>
  );
};

export default ContactForm;
