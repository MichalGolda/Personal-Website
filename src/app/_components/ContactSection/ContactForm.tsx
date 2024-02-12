import { PrimaryButton, Checkbox, TextField } from "@/app/_components";

export type ContactFormProps = React.FormHTMLAttributes<{}>;

const ContactForm: React.FC<ContactFormProps> = (props) => {
  return (
    <form className="flex flex-col gap-y-8 max-w-2xl w-full" {...props}>
      <h4 className="text-2xl text-secondary font-bold">
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

export default ContactForm;
