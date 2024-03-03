"use client";

import { useInViewSection } from "@/app/_context/inViewSectionContext";
import { Container, SectionHeading } from "@/app/_components";
import { PhaseCard } from "./PhaseCard";

export default function HowIWorksSection() {
  const { ref } = useInViewSection("#how-i-works");

  return (
    <div ref={ref} className="my-64">
      <Container>
        <SectionHeading headline="proces" title="Jak działam?" />
        <div className="flex flex-col gap-y-16 w-full mt-32">
          <PhaseCard
            className="w-full md:w-1/2"
            headline="faza 1"
            title="Określenie oczekiwań klienta"
            color="PHASE_ONE"
            body="W pierwszej fazie dokładnie analizuję oczekiwania klienta, te nformacje stanowią fundament, na którym opiera się proces przygotowania ostatecznego rozwiązania."
            data-aos="fade-right"
            data-aos-duration="500"
          />
          <PhaseCard
            className="w-full md:w-1/2 md:ml-[calc(50%/3)]"
            headline="faza 2"
            title="Design UX/UI"
            color="PHASE_TWO"
            body="Na bazie zebranych informacji tworzę projekt graficzny. W trakcie projektowania regularnie konsultuję się z klientem, aby na bieżąco uwzględniać wprowadzane zmiany. Przechodzę do kolejnego etapu dopiero po uzyskaniu pełnej akceptacji."
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <PhaseCard
            className="w-full md:w-1/2 md:ml-[calc((50%/3)*2)]"
            headline="faza 3"
            title="Budowa"
            color="PHASE_THREE"
            body="W trzeciej fazie przystępuję do budowy rozwiązania, począwszy od kodowania aż po testowanie. Zapewniam, że każdy element jest starannie sprawdzany i testowany, aby dostarczyć wysokiej jakości produkt."
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <PhaseCard
            className="w-full md:w-1/2 md:ml-[calc((50%/3)*3)]"
            headline="faza 4"
            title="Wdrożenie"
            color="PHASE_FOUR"
            body="Po zatwierdzeniu projektu przechodzę do wdrożenia na serwer produkcyjny. Dodatkowo integruję narzędzia takie jak Google Analytics, Sentry, Google Search Console. Przeprowadzam również kompleksową optymalizację SEO."
            data-aos="fade-right"
            data-aos-duration="2000"
          />
        </div>
      </Container>
    </div>
  );
}
