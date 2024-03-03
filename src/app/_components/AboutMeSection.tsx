"use client";

import { SectionHeading, Container } from "@/app/_components";
import { useInViewSection } from "../_context/inViewSectionContext";

export default function AboutMeSection() {
  const { ref } = useInViewSection("#about-me");

  return (
    <section ref={ref} id="about-me" className="mt-16 mb-64">
      <Container>
        <SectionHeading headline="O mnie" title="Kilka słów o tym kim jestem" />
        <p className="mt-16 text-body max-w-3xl text-sm md:text-base mx-auto text-center">
          Cześć, jestem Michał. Od kilku lat interesuje się programowaniem i
          tworzeniem stron internetowych. Swoją dotychczasową wiedzę poszerzałem
          głównie poprzez realizację projektów we własnym zakresie. Staram się
          być na bieżąco z aktualnymi trendami na rynku, zdobywać nową wiedzę,
          aby dostarczać rozwiązania spełniające aktualne standardy jakości.
        </p>
      </Container>
    </section>
  );
}
