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
        <div className="my-16 gap-16 lg:grid-cols-3 flex flex-col gap-y-16 md:grid md:grid-cols-2 items-start">
          <AdvantageCard
            title="Przejrzyste rozliczenia"
            content="Przed rozpoczęciem projektu dokonuje wyceny w której zawarte są wszystkie wykonywane usługi. Dzięki, temu wiesz za co płacisz."
            iconSrc="/dollar.svg"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <div className="col-span-2 order-2 lg:col-span-1 lg:order-[0]">
            <AdvantageCard
              title="Rozwiązania dopasowane do oczekiwań klienta"
              content="Każdy projekt rozpoczynam od zebrania szczegółowych informacji na temat tego jak ma wyglądać końcowe rozwiązanie. W trakcie realizacji konsultuje postępy po to żeby jak najlepiej wpasować się w twoje oczekiwania."
              iconSrc="/measure.svg"
              data-aos="fade-right"
              data-aos-duration="500"
            />
          </div>
          <AdvantageCard
            title="Realizacja w określonym terminie"
            content="Szczegółowo planuje etapy pracy dzięki czemu każde rozwiązanie jest gotowe na czas."
            iconSrc="/calendar.svg"
            data-aos="fade-left"
            data-aos-duration="1500"
          />
        </div>
      </Container>
    </section>
  );
}
