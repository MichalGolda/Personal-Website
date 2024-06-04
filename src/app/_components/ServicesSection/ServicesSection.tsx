"use client";

import { SectionHeading, Container } from "@/app/_components";
import { useInViewSection } from "@/app/_hooks/useInViewSection";
import WordpressSolutionsServiceCard from "./WordpressSolutionsServiceCard";
import DedicatedAppsServiceCard from "./DedicatedAppsServiceCard";
import { SEOServiceCard } from "./SEOServiceCard";
import IntegrationsServiceCard from "./IntegrationsServiceCard";

export default function ServicesSection() {
  const { ref } = useInViewSection("#services");

  return (
    <section ref={ref} id="services" className="w-full bg-lightBlue py-32">
      <Container>
        <SectionHeading headline="usługi" title="Moje usługi" />
        <div className="my-16 grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:gap-16 md:gap-x-8 md:gap-y-16 gap-16">
          <WordpressSolutionsServiceCard />
          <DedicatedAppsServiceCard />
          <SEOServiceCard />
          <IntegrationsServiceCard />
        </div>
      </Container>
    </section>
  );
}
