import { useState } from "react";
import { contactRequest } from "@/api/contact";

export const useContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e, setFunction) => setFunction(e.target.value);
  const handleChangeEmail = (e) => handleChange(e, setEmail);
  const handleChangeMessage = (e) => handleChange(e, setMessage);

  const handleSubmit = (e) => {
    e.preventDefault();

    contactRequest({ email, message });
  };

  return {
    handleSubmit,
    handleChangeEmail,
    handleChangeMessage,
  };
};
