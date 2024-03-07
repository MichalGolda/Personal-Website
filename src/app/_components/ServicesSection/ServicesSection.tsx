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
            content={() => {
              return (
                <>
                  Tworzenie niestandardowych szablonów, dostosowanych do
                  indywidualnych potrzeb i wizji klienta. <br />
                  <br />
                  Konfiguracja wtyczek i optymalizacja funkcjonalnośći i
                  wydajnośći strony. <br />
                  <br />
                  Modernizacja istniejących stron opartych na WordPress, w tym
                  aktualizacja szablonów, wtyczek i optymalizacja wydajności.{" "}
                  <br />
                  <br />
                  Migracja ze starej platformy na WordPress, zapewniając
                  bezpieczne przeniesienie danych i zachowanie integralności
                  strony.
                </>
              );
            }}
            iconSrc="/wordpress.svg"
            data-aos="fade-right"
            data-aos-duration="500"
          />
          <ServiceCard
            title="Dedykowane aplikacje"
            content={() => {
              return (
                <>
                  Tworzenie dedykowanych aplikacji webowych i desktopowych,
                  dostosowanych do indywidualnych potrzeb klienta i
                  rozwiązujących konkretny problem. <br />
                  <br />
                  Projektowanie i rozwój stron typu landing page, blogów oraz
                  innych platform internetowych, zapewniających atrakcyjność
                  wizualną, użyteczność i dostępnosć do dowolnym urządzeniu.
                </>
              );
            }}
            iconSrc="/development.svg"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          <ServiceCard
            title="Optymalizacja treści (SEO) oraz szybkości ładowania"
            content={() => {
              return (
                <>
                  Badanie słów kluczowych i ich strategiczne umieszczanie w
                  treściach, aby poprawić widoczność strony w wynikach
                  wyszukiwania <br />
                  <br />
                  Optymalizacją kątem prędkości ładowania, uwzględniając
                  wytyczne Core Web Vitals, co pozytywnie wpływa na
                  doświadczenie użytkownika i ranking strony w wyszukiwarkach.
                </>
              );
            }}
            iconSrc="/seo.svg"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <ServiceCard
            title="Integracje z API i usługami analitycznymi"
            content={() => {
              return (
                <>
                  Integracje z zewnętrznymi API, umożliwiającymi rozszerzenie
                  funkcjonalności strony internetowej poprzez połączenie z
                  różnymi serwisami i platformami. <br />
                  <br />
                  Podpięcie narzędzi analitycznych, takich jak Google Analytics,
                  Sentry i inne, aby dostarczyć klientom kompleksowe
                  raportowanie i analizę danych dotyczących ruchu na stronie
                  oraz wykrywanie ewentualnych problemów.
                </>
              );
            }}
            iconSrc="/integration.svg"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
      </Container>
    </section>
  );
}
