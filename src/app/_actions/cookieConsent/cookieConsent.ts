"use server";
import { cookies } from "next/headers";

export default async function acceptCookieConsent() {
    const cookiesStore = cookies();
    cookiesStore.set("cookieConsent", "true");
}