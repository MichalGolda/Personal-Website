"use server";

import { captureException } from "@sentry/nextjs";
import Mailgun from "mailgun.js";
import { SendMessageActionStatus } from "./sendMessageTypes";

// @ts-ignore
const mailgun = new Mailgun(FormData);
const mailgunClient = mailgun.client({
  username: "api",
  // @ts-ignore
  key: process.env.MAILGUN_API_KEY,
});

export default async function sendMessage(_: any, formData: FormData) {
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const messageContent = formData.get('messageContent');
    
    let status = null;

   await mailgunClient.messages.create("sandbox78c601f25ef14b2ea4d15e9e2d809e12.mailgun.org", {
    from: "System",
    to: "kontakt@michalgolda.com",
    template: "Contact",
    'h:X-Mailgun-Variables': JSON.stringify({
      email,
      phoneNumber,
      messageContent
    })
   })
    .then(() => {
      status = SendMessageActionStatus.SUCCESS
    }).catch((err) => {
      captureException(err);
      status = SendMessageActionStatus.ERROR;
    });

    return {
        status
    }
}