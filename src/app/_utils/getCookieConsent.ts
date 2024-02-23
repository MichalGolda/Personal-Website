import { cookies } from "next/headers"; 

export const getCookieConsent = () => {
    const cookiesStore = cookies();
    const cookieConsent = cookiesStore.get("cookieConsent");
  
    return cookieConsent ? JSON.parse(cookieConsent.value) : false;
};