"use client";

import { FAQ } from "@/app/_types/faq";
import FAQStack from "./FAQStack";
import { SectionHeading, Container } from "@/app/_components";
import { useInViewSection } from "@/app/_context/inViewSectionContext";

export type FAQSectionProps = {
  data: FAQ[];
};

export default function FAQSection({ data }: FAQSectionProps) {
  const { ref } = useInViewSection("");

  return (
    <section ref={ref} id="faq" className="my-64">
      <Container>
        <SectionHeading headline="FAQ" title="Najczęściej zadawane pytania" />
        <FAQStack data={data} />
      </Container>
    </section>
  );
}
