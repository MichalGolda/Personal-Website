"use client";

import { Container, SectionHeading } from "@/app/_components";
import { useInViewSection } from "@/app/_hooks/useInViewSection";
import FrontendTechnologyCard from "./FrontendTechnologyCard";
import BackendTechnologyCard from "./BackendTechnologyCard";
import QATechnologyCard from "./QATechnologyCard";
import DesignTechnologyCard from "./DesignTechnologyCard";

export default function TechnologiesSection() {
  const { ref } = useInViewSection("");

  return (
    <section ref={ref} id="technologies" className="my-64">
      <Container>
        <SectionHeading
          headline="technologie"
          title="Pracuje z technologiami przyszłości"
          body="Stosuje najnowsze technologie i rozwiązania używane w zaawansowanych aplikacjach webowych."
        />
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <FrontendTechnologyCard />
          <BackendTechnologyCard />
          <QATechnologyCard />
          <DesignTechnologyCard />
        </div>
      </Container>
    </section>
  );
}
