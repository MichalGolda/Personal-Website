import ServiceCard from "./ServiceCard";
import ServiceIcon from "./ServiceIcon";

const SEOServiceIcon = () => <ServiceIcon src="/seo.webp" alt="seo" />;

export const SEOServiceCard = () => (
  <ServiceCard
    title="Optymalizacja treści (SEO) oraz szybkości ładowania"
    content={
      <>
        Badanie słów kluczowych i ich strategiczne umieszczanie w treściach, aby
        poprawić widoczność strony w wynikach wyszukiwania <br />
        <br />
        Optymalizacją kątem prędkości ładowania, uwzględniając wytyczne Core Web
        Vitals, co pozytywnie wpływa na doświadczenie użytkownika i ranking
        strony w wyszukiwarkach.
      </>
    }
    icon={<SEOServiceIcon />}
    data-aos="fade-right"
    data-aos-duration="1500"
  />
);
