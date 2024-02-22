"use client";

import { useInViewSection } from "@/app/_context/inViewSectionContext";
import { Container, SectionHeading } from "@/app/_components";
import { PhaseCard } from "./PhaseCard";

export default function HowIWorksSection() {
  const { ref } = useInViewSection("#how-i-works");

  return (
    <div ref={ref} className="my-64">
      <Container>
        <SectionHeading headline="proces" title="Jak działam?" />
        <div className="flex flex-col gap-y-16 w-full mt-32">
          <PhaseCard
            className="w-full md:w-1/2"
            headline="faza 1"
            title="Określenie oczekiwań klienta"
            color="PHASE_ONE"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, tortor tincidunt sagittis consequat, felis nulla porttitor velit, eu ultrices sapien ex vel urna."
          />
          <PhaseCard
            className="w-full md:w-1/2 md:ml-[50%]"
            headline="faza 2"
            title="Design UX/UI"
            color="PHASE_TWO"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, tortor tincidunt sagittis consequat, felis nulla porttitor velit, eu ultrices sapien ex vel urna."
          />
          <PhaseCard
            className="w-full md:w-1/2"
            headline="faza 3"
            title="Budowa"
            color="PHASE_THREE"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, tortor tincidunt sagittis consequat, felis nulla porttitor velit, eu ultrices sapien ex vel urna."
          />
          <PhaseCard
            className="w-full md:w-1/2 md:ml-[50%]"
            headline="faza 4"
            title="Wdrożenie"
            color="PHASE_FOUR"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, tortor tincidunt sagittis consequat, felis nulla porttitor velit, eu ultrices sapien ex vel urna."
          />
        </div>
      </Container>
    </div>
  );
}
