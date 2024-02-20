"use server";

import { captureException } from "@sentry/nextjs";
import nodemailer from "nodemailer"
import { SendMessageActionStatus } from "./sendMessageTypes";

export default async function sendMessage(_: any, formData: FormData) {
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const messageContent = formData.get('messageContent');
    
    let status = null;

    const transporter = nodemailer.createTransport({
        // @ts-ignore
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
          <p>${email}</p>
          <hr>
          <p>${phoneNumber}</p>
          <hr>
          <p>${messageContent}</p>
        `,
      };

      await transporter
        .sendMail(message)
        .then(() => {
            status = SendMessageActionStatus.SUCCESS
        })
        .catch((err) => {
            status = SendMessageActionStatus.ERROR
            captureException(err);
          });

    return {
        status
    }
}