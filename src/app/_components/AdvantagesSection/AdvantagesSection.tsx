"use client";

import AdvantageCard from "./AdvantageCard";
import { Container, SectionHeading } from "@/app/_components";
import { useInViewSection } from "@/app/_hooks/useInViewSection";
import ClearBillingsAdvantageCard from "./ClearBillingsAdvantageCard";
import FittedSolutionsAdvantageCard from "./FittedSolutionsAdvantageCard";
import QuickDeliverAdvantageCard from "./QuickDeliverAdvantageCard";

export type AdvantagesSectionProps = React.ComponentProps<"section">;

export default function AdvantagesSection(props: AdvantagesSectionProps) {
  const { ref } = useInViewSection("#about-me");

  return (
    <section ref={ref} id="advantages" className="my-64" {...props}>
      <Container>
        <SectionHeading headline="zalety" title="Dlaczego warto mi zaufać?" />
        <div className="my-16 gap-16 lg:grid-cols-3 flex flex-col gap-y-16 md:grid md:grid-cols-2 items-start">
          <ClearBillingsAdvantageCard />
          <div className="col-span-2 order-2 lg:col-span-1 lg:order-[0]">
            <FittedSolutionsAdvantageCard />
          </div>
          <QuickDeliverAdvantageCard />
        </div>
      </Container>
    </section>
  );
}
