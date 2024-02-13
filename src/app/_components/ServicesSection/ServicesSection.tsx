import { SectionHeading, Container } from "@/app/_components";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-lightBlue py-32">
      <Container>
        <SectionHeading headline="usługi" title="Moje usługi" />
        <div className="my-16 grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:gap-16 md:gap-x-8 md:gap-y-16 gap-16">
          <ServiceCard
            title="Rozwiązania oparte o WordPress CMS"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/wordpress.svg"
          />
          <ServiceCard
            title="Dedykowane aplikacje"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/development.svg"
          />
          <ServiceCard
            title="Optymalizacja treści (SEO)"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/seo.svg"
          />
          <ServiceCard
            title="Optymalizacja treści (SEO)"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor. Vivamus eu nunc massa. Curabitur viverra neque et ligula."
            iconSrc="/seo.svg"
          />
        </div>
      </Container>
    </section>
  );
}
