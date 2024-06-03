"use client";

import Image from "next/image";
import { useCurrentYear } from "@/app/_hooks/useCurrentYear";
import { Container, Logo } from "@/app/_components";

export default function Footer() {
  const currentYear = useCurrentYear();

  return (
    <footer className="py-8">
      <Container className="flex flex-col gap-y-4 lg:flex-row justify-between items-center">
        <Logo />
        <span className="text-body text-xs text-center">
          © {currentYear} Wszelkie prawa zastrzeżone. <br />
          <span className="font-medium">
            Zaprojektowane & Wdrożone przez Michał Gołda
          </span>
        </span>
        <div className="flex flex-row gap-x-4">
          <a href="https://github.com/michalgolda">
            <Image src="/github.webp" width={24} height={24} alt="github" />
          </a>
          <a href="https://linkedin.com/michalgolda">
            <Image src="/linkedin.webp" width={24} height={24} alt="linkedin" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
