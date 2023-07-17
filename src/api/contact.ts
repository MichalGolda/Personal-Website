export const contactRequest = (payload: { email: string; message: string }) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
