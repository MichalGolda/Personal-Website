import { Container, SectionHeading } from "@/app/_components";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="my-64">
      <Container>
        <SectionHeading
          headline="technologie"
          title="Pracuje z technologiami przyszłości"
          body="Stosuje najnowsze technologie i rozwiązania używane w zaawansowanych aplikacjach webowych."
        />
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <TechnologyCard
            title="Frontend"
            content="Spójny, wykonany z dbałością o szczegóły, SEO-friendy, responsywny, działający na dowolnym urządzeniu: TypeScript, React, Next.js, Nuxt.js, Headless."
          />
          <TechnologyCard
            title="Backend"
            content="Wydajno, skalowalno, globalna dostpno i bezpieczestwo. Osigamy to dziki sprawdzonym rozwizaniom i frameworkom:Python,Django,PHP,Laravel,
            Wordpress,PosgreSQL,
            DynamoDB,AWS, Docker, integrujemy si z dowolnym systemem za pomoc API, budujemy aplikacje oparte o mikrousugi."
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
      </Container>
    </section>
  );
}
