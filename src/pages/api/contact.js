import nodemailer from "nodemailer";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const body = req.body;

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      const message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "Personal Website - Contact Form",
        html: `
          <p>${body.email}</p>
          <hr>
          <p>${body.message}</p>
        `,
      };

      await transporter
        .sendMail(message)
        .then(() => console.log("Email message successfully sent"))
        .catch((err) => console.error(err));

      res.status(200).json({ msg: "Ok" });
      break;
    default:
      res.status(400).json({ msg: "Method not allowed." });
  }
}
