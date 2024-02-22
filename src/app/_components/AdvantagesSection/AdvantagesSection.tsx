"use client";

import { useInViewSection } from "@/app/_context/inViewSectionContext";
import AdvantageCard from "./AdvantageCard";
import { Container, SectionHeading } from "@/app/_components";

export default function AdvantagesSection() {
  const { ref } = useInViewSection("#about-me");

  return (
    <section ref={ref} id="advantages" className="my-64">
      <Container>
        <SectionHeading headline="zalety" title="Dlaczego warto mi zaufać?" />
        <div className="my-16 lg:flex lg:flex-row gap-16 flex flex-col gap-y-16 md:grid md:grid-cols-2 items-start">
          <AdvantageCard
            title="Rozwiązania dopasowane do oczekiwań klienta"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor."
            iconSrc="/measure.svg"
            data-aos="fade-right"
            data-aos-duration="500"
          />
          <AdvantageCard
            title="Przejrzyste rozliczenia"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor."
            iconSrc="/dollar.svg"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <div className="col-span-2">
            <AdvantageCard
              title="Realizacja w określonym terminie"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor."
              iconSrc="/calendar.svg"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
