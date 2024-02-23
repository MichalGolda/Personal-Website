"use client";

import { PrimaryButton } from "@/app/_components";
import { useEffect, useTransition } from "react";
import acceptCookieConsent from "../_actions/cookieConsent/cookieConsent";

export type CookieConsentProps = {
  hidden: boolean;
};

export default function CookieConsent({ hidden = true }: CookieConsentProps) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log(isPending);
  }, [isPending]);

  return (
    <div
      className={`duration-500 fixed bottom-0 w-[calc(100%-16px)] transition-transform md:max-w-96 left-0 mx-4 mb-4 bg-secondary p-4 ${
        hidden ? "translate-x-[-200%]" : "translate-x-[0]"
      }`}
    >
      <p className="text-sm md:text-base text-white font-medium">
        Strona korzysta z ciasteczek, aby zapewnić najlepszą jakość korzystania
        z mojej witryny.
      </p>
      <PrimaryButton
        onClick={() => startTransition(async () => await acceptCookieConsent())}
        className="!py-2 mt-4"
      >
        Akcpetuję
      </PrimaryButton>
    </div>
  );
}
