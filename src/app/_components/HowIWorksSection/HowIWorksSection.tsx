"use client";

import { useInViewSection } from "@/app/_hooks/useInViewSection";
import { Container, SectionHeading } from "@/app/_components";
import FirstPhaseCard from "./FirstPhaseCard";
import SecondPhaseCard from "./SecondPhaseCard";
import ThirdPhaseCard from "./ThirdPhaseCard";
import FourthPhaseCard from "./FourthPhaseCard";

export default function HowIWorksSection() {
  const { ref } = useInViewSection("#how-i-works");

  return (
    <div ref={ref} className="my-64">
      <Container>
        <SectionHeading headline="proces" title="Jak działam?" />
        <div className="flex flex-col gap-y-16 w-full mt-32">
          <FirstPhaseCard />
          <SecondPhaseCard />
          <ThirdPhaseCard />
          <FourthPhaseCard />
        </div>
      </Container>
    </div>
  );
}
