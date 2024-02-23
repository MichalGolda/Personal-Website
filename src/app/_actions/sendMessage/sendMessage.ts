"use server";

import { captureException } from "@sentry/nextjs";
import { ServerClient as PostmarkServerClient } from "postmark";
import { SendMessageActionStatus } from "./sendMessageTypes";

// @ts-ignore
const postmarkClient = new PostmarkServerClient(process.env.POSTMARK_SERVER_TOKEN);

export default async function sendMessage(_: any, formData: FormData) {
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const messageContent = formData.get('messageContent');
    
    let status = null;

    await postmarkClient.sendEmailWithTemplate({
      "TemplateId": 35003582,
      "From": "kontakt@michalgolda.com",
      "To": "kontakt@michalgolda.com",
      "TemplateModel": {
        email,
        phoneNumber,
        messageContent
      }
    }).then(() => {
      status = SendMessageActionStatus.SUCCESS
    }).catch((err) => {
      captureException(err);
      status = SendMessageActionStatus.ERROR
    });

    return {
        status
    }
}