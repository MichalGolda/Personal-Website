import React, { useState } from "react";
import { contactRequest } from "@/api/contact";

export const useContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length === 0 || message.length === 0) {
      setAlert("Hej, zanim wyślesz:  wpisz swój email i napisz wiadomość");
      return;
    }

    setLoading(true);

    contactRequest({ email, message })
      .then(() => {
        setAlert("Poszło! Dzięki za wiadomość ♥️");
        setLoading(false);
      })
      .catch(() => {
        setAlert("Coś poszło nie tak! Spróbuj ponownie.");
        setLoading(false);
      });
  };

  return {
    alert,
    loading,
    handleSubmit,
    handleChangeEmail,
    handleChangeMessage,
  };
};
