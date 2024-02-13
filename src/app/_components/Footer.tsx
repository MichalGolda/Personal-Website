"use client";

import Image from "next/image";
import { useCurrentYear } from "@/app/_hooks/useCurrentYear";
import { Container } from "@/app/_components";

export default function Footer() {
  const currentYear = useCurrentYear();

  return (
    <footer className="py-8">
      <Container className="flex flex-row justify-between items-center">
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
      </Container>
    </footer>
  );
}
