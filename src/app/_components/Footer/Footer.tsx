"use client";

import { useCurrentYear } from "@/app/_hooks/useCurrentYear";
import { Container, Logo } from "@/app/_components";
import { GithubSocialIcon, LinkedInSocialIcon } from "./SocialIcon";

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
          <GithubSocialIcon />
          <LinkedInSocialIcon />
        </div>
      </Container>
    </footer>
  );
}
