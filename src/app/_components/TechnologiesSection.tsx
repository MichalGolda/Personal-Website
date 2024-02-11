import { SectionHeading } from "./SectionHeading";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  return (
    <section className="max-w-[1320px] mx-auto my-64">
      <SectionHeading
        headline="technologie"
        title="Pracuje z technologiami przyszłości"
        body="Stosuje najnowsze technologie i rozwiązania używane w zaawansowanych aplikacjach webowych."
      />
      <div className="grid grid-rows-2 grid-cols-2 gap-16 mt-16">
        <TechnologyCard
          title="Frontend"
          content="Spójny, wykonany z dbałością o szczegóły, SEO-friendy, responsywny, działający na dowolnym urządzeniu: TypeScript, React, Next.js, Nuxt.js, Headless."
        />
        <TechnologyCard
          title="Backend"
          content="Wydajność, skalowalność, globalna dostępność i bezpieczeństwo. Osiągamy to dzięki sprawdzonym rozwiązaniom i frameworkom: Python, Django, PHP, Laravel, Wordpress, PosgreSQL, DynamoDB, AWS, Docker, integrujemy się z dowolnym systemem za pomocą API, budujemy aplikacje oparte o mikrousługi."
        />
        <TechnologyCard
          title="QA"
          content="Jakość kodu i finalnego produktu zapewniam dzięki Clean code, Unit tests, Selenium, Code Review."
        />
        <TechnologyCard
          title="Design UX/UI"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut purus congue, varius neque posuere, egestas magna. "
        />
      </div>
    </section>
  );
}
