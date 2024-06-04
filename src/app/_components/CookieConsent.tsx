"use client";

import Image from "next/image";
import { PrimaryButton } from "@/app/_components";
import { useTransition } from "react";
import acceptCookieConsent from "../_actions/cookieConsent/cookieConsent";

export type CookieConsentProps = {
  hidden: boolean;
};

export default function CookieConsent({ hidden = true }: CookieConsentProps) {
  const [_, startTransition] = useTransition();

  return (
    <div
      className={`duration-500 fixed bottom-0 w-full sm:max-w-md transition-transform left-0 sm:ml-4 sm:mb-4 bg-secondary p-4 md:p-8 ${
        hidden ? "translate-x-[-200%]" : "translate-x-[0]"
      }`}
    >
      <div className="flex flex-row items-center gap-x-4">
        <Image
          src="/cookie.svg"
          className="h-10 w-10 md:w-16 md:h-16"
          alt="cookie"
          width={64}
          height={64}
        />
        <p className="text-sm md:text-base text-white font-medium">
          Strona korzysta z ciasteczek, aby zapewnić najlepszą jakość
          korzystania.
        </p>
      </div>
      <PrimaryButton
        onClick={() => startTransition(async () => await acceptCookieConsent())}
        className="!py-2 mt-4 w-full"
      >
        Akcpetuję
      </PrimaryButton>
    </div>
  );
}
