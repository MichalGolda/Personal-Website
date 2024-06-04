import ServiceCard from "./ServiceCard";
import ServiceIcon from "./ServiceIcon";

const WordpressServiceIcon = () => (
  <ServiceIcon src="/wordpress (services-section).webp" alt="wordpress" />
);

const WordpressSolutionsServiceCard = () => (
  <ServiceCard
    title="Rozwiązania oparte o WordPress CMS"
    content={
      <>
        Tworzenie niestandardowych szablonów, dostosowanych do indywidualnych
        potrzeb i wizji klienta. <br />
        <br />
        Konfiguracja wtyczek i optymalizacja funkcjonalnośći i wydajnośći
        strony. <br />
        <br />
        Modernizacja istniejących stron opartych na WordPress, w tym
        aktualizacja szablonów, wtyczek i optymalizacja wydajności. <br />
        <br />
        Migracja ze starej platformy na WordPress, zapewniając bezpieczne
        przeniesienie danych i zachowanie integralności strony.
      </>
    }
    icon={<WordpressServiceIcon />}
    data-aos="fade-right"
    data-aos-duration="500"
  />
);

export default WordpressSolutionsServiceCard;
