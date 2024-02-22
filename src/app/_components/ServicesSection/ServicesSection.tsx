"use client";

import { SectionHeading, Container } from "@/app/_components";
import ServiceCard from "./ServiceCard";
import { useInViewSection } from "@/app/_context/inViewSectionContext";

export default function ServicesSection() {
  const { ref } = useInViewSection("#services");

  return (
    <section ref={ref} id="services" className="w-full bg-lightBlue py-32">
      <Container>
        <SectionHeading headline="usługi" title="Moje usługi" />
        <div className="my-16 grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:gap-16 md:gap-x-8 md:gap-y-16 gap-16">
          <ServiceCard
            title="Rozwiązania oparte o WordPress CMS"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/wordpress.svg"
            data-aos="fade-right"
            data-aos-duration="500"
          />
          <ServiceCard
            title="Dedykowane aplikacje"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/development.svg"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          <ServiceCard
            title="Optymalizacja treści (SEO)"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/seo.svg"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <ServiceCard
            title="Optymalizacja treści (SEO)"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/seo.svg"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
      </Container>
    </section>
  );
}
