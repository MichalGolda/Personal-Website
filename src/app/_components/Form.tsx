import { PrimaryButton } from "./Button";
import { Checkbox } from "./Checkbox";
import { TextField } from "./TextField";

export type FormProps = React.FormHTMLAttributes<{}>;

export const Form: React.FC<FormProps> = (props) => {
  return (
    <form className="flex flex-col gap-y-8 max-w-lg w-full" {...props}>
      <h4 className="text-2xl font-bold">Formularz kontaktowy</h4>
      <TextField
        label="E-mail"
        labelFor="email-input"
        as={(className) => (
          <input
            id="email-input"
            className={className}
            name="email"
            type="email"
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
          ></textarea>
        )}
      />
      <Checkbox
        id="agreement"
        label="Wyrażam zgodę na przetwarzanie danych osobowych"
        name="agreement"
      />
      <PrimaryButton className="w-fit" type="submit">
        Wyślij
      </PrimaryButton>
    </form>
  );
};
