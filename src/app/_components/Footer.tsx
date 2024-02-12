"use client";

import Image from "next/image";
import { useCurrentYear } from "@/app/_hooks/useCurrentYear";

export default function Footer() {
  const currentYear = useCurrentYear();

  return (
    <footer className="flex flex-row justify-between items-center py-8 max-w-[1320px] mx-auto">
      <Image src="/logo.svg" width={151} height={29} alt="logo" />
      <span className="text-body text-xs">
        © {currentYear} Wszelkie prawa zastrzeżone.{" "}
        <span className="font-medium">
          Zaprojektowane & Wdrożone przez Michał Gołda
        </span>
      </span>
      <div className="flex flex-row gap-x-4">
        <a href="#">
          <Image src="/github.svg" width={24} height={24} alt="github" />
        </a>
        <a href="#">
          <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
}
