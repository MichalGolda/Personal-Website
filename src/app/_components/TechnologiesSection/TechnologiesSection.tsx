"use client";

import { Container, SectionHeading } from "@/app/_components";
import TechnologyCard from "./TechnologyCard";
import { useInViewSection } from "@/app/_context/inViewSectionContext";

export default function TechnologiesSection() {
  const { ref } = useInViewSection("");

  return (
    <section ref={ref} id="technologies" className="my-64">
      <Container>
        <SectionHeading
          headline="technologie"
          title="Pracuje z technologiami przyszłości"
          body="Stosuje najnowsze technologie i rozwiązania używane w zaawansowanych aplikacjach webowych."
        />
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <TechnologyCard
            title="Frontend"
            content={() => (
              <>
                Wykonany z dbałością o szczegóły, seo-friendly, spójny,
                działający na dowolnym urządzeniu:{" "}
                <b className="text-primary">Javascript</b>,{" "}
                <b className="text-primary">Typescript</b>,{" "}
                <b className="text-primary">React</b>,{" "}
                <b className="text-primary">Vue</b>,{" "}
                <b className="text-primary">Next.js</b>,{" "}
                <b className="text-primary">Nuxt.js</b>,
                <b className="text-primary">sass</b>,{" "}
                <b className="text-primary">tailwindcss</b>.
              </>
            )}
            icons={[
              { src: "/typescript.webp", alt: "typescript" },
              { src: "/javascript.webp", alt: "javascript" },
              { src: "/react.webp", alt: "react" },
              { src: "/vue.webp", alt: "vue" },
              { src: "/nextjs.webp", alt: "nextjs" },
              { src: "/nuxtjs.webp", alt: "nuxtjs" },
              { src: "/sass.webp", alt: "sass" },
              { src: "/tailwindcss.webp", alt: "tailwindcss" },
            ]}
          />
          <TechnologyCard
            title="Backend"
            content={() => (
              <>
                Dostępność, skalowalność osiągam dzięki sprawdzonym
                rozwiązaniom: <b className="text-primary">Python</b>,{" "}
                <b className="text-primary">Django</b>,{" "}
                <b className="text-primary">PHP</b>,{" "}
                <b className="text-primary">Wordpress</b>,{" "}
                <b className="text-primary">Docker</b>,{" "}
                <b className="text-primary">NodeJs</b>,{" "}
                <b className="text-primary">Nest.js</b>,{" "}
                <b className="text-primary">PostgreSQL</b>,{" "}
                <b className="text-primary">AWS</b>,{" "}
                <b className="text-primary">GCP</b>,{" "}
                <b className="text-primary">Azure</b>.
              </>
            )}
            icons={[
              { src: "/typescript.webp", alt: "typescript" },
              { src: "/javascript.webp", alt: "javascript" },
              { src: "/django.png", alt: "django" },
              { src: "/php.png", alt: "php" },
              { src: "/docker.png", alt: "docker" },
              { src: "/nodejs.png", alt: "nodejs" },
              { src: "/nestjs.png", alt: "nestjs" },
              { src: "/postgresql.png", alt: "postgresql" },
              { src: "/aws.png", alt: "aws" },
              { src: "/gcp.png", alt: "gcp" },
              { src: "/azure.png", alt: "azure" },
            ]}
          />
          <TechnologyCard
            title="QA"
            content={() => (
              <>
                Jakość kodu i finalnego projektu zapewniam dzięki:{" "}
                <b className="text-primary">Clean Code</b>,
                <b className="text-primary">KISS</b>,{" "}
                <b className="text-primary">DRY</b>,{" "}
                <b className="text-primary">YAGNI</b>,{" "}
                <b className="text-primary">Testy jednostkowe</b>,{" "}
                <b className="text-primary">Testy integracyjne</b>,{" "}
                <b className="text-primary">prettier</b>,{" "}
                <b className="text-primary">eslint</b>.
              </>
            )}
            icons={[
              { src: "/prettier.png", alt: "prettier" },
              { src: "/eslint.svg", alt: "eslint" },
            ]}
          />
          <TechnologyCard
            title="Design UX/UI"
            content={() => (
              <>
                Spójny i z dbałością o szczegóły projekt przygotowuję z pomocą:{" "}
                <b className="text-primary">Figma</b>
              </>
            )}
            icons={[{ src: "/figma.png", alt: "figma" }]}
          />
        </div>
      </Container>
    </section>
  );
}
