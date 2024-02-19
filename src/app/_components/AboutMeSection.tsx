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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
          velit augue, eu venenatis quam venenatis quis. Mauris sodales urna
          dignissim libero dictum accumsan. Vivamus sed tempor mi, vitae sodales
          nibh. Proin viverra congue diam, nec faucibus lorem sollicitudin
          lacinia. Ut eros nibh, porttitor sit amet cursus sit amet, gravida
          vitae nisl. Pellentesque ultrices hendrerit molestie. Nulla congue
          rhoncus metus, non efficitur ante vulputate aliquam.
        </p>
      </Container>
    </section>
  );
}
