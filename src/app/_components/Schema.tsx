export default function Schema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Dedykowane strony internetowe i aplikacje webowe - Michał Gołda",
    description:
      "Szukasz profesjonalnych usług tworzenia dedykowanych aplikacji webowych lub stron internetowych? Dobrze trafiłeś, jeśli potrzebujesz wsparcia w zakresie tworzenia stron internetowych, aplikacji webowych lub chcesz porozmawiać o współpracy, skontaktuj się ze mną.",
    "@id": "https://michalgolda.com/",
    url: "https://michalgolda.com/",
    about: {
      "@id": "https://michalgolda.com/#about-me",
    },
    inLanguage: "pl-PL",
    offers: {
      "@type": "Service",
      priceCurrency: "PLN",
      offerCount: 17,
      offers: [
        {
          "@type": "Service",
          name: "Szablony wordpress CMS",
        },
        {
          "@type": "Service",
          name: "Dedykowane strony internetowe",
        },
        {
          "@type": "Service",
          name: "Dedykowane aplikacje webowe",
        },
        {
          "@type": "Service",
          name: "Konfiguracja i aktualizacja wtyczek wordpress",
        },
        {
          "@type": "Service",
          name: "Optymalizacja treści (SEO)",
        },
        {
          "@type": "Service",
          name: "Responsywny design",
        },
        {
          "@type": "Service",
          name: "Podpięcie narzędzi analitycznych",
        },
        {
          "@type": "Service",
          name: "Konfiguracja domeny i serwera",
        },
        {
          "@type": "Service",
          name: "Tworzenie stron landing page",
        },
        {
          "@type": "Service",
          name: "Konfiguracja kont pocztowych",
        },
        {
          "@type": "Service",
          name: "Konfiguracja formularzy kontaktowych",
        },
        {
          "@type": "Service",
          name: "Migracja strony na nowy serwer",
        },
        {
          "@type": "Service",
          name: "Migracja strony na Wordpress CMS",
        },
        {
          "@type": "Service",
          name: "Optymalizacja szybkości ładowania",
        },
        {
          "@type": "Service",
          name: "Aktywacja certyfikatu SSL",
        },
        {
          "@type": "Service",
          name: "Implementacja newslettera",
        },
        {
          "@type": "Service",
          name: "Szkolenie z obsługi strony",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    ></script>
  );
}
