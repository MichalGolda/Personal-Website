export const contactRequest = (payload = { email, message }) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
