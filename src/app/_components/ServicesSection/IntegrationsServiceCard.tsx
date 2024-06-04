import ServiceCard from "./ServiceCard";
import ServiceIcon from "./ServiceIcon";

const IntegrationServiceIcon = () => (
  <ServiceIcon src="/integration.webp" alt="integration" />
);

const IntegrationsServiceCard = () => (
  <ServiceCard
    title="Integracje z API i usługami analitycznymi"
    content={
      <>
        Integracje z zewnętrznymi API, umożliwiającymi rozszerzenie
        funkcjonalności strony internetowej poprzez połączenie z różnymi
        serwisami i platformami. <br />
        <br />
        Podpięcie narzędzi analitycznych, takich jak Google Analytics, Sentry i
        inne, aby dostarczyć klientom kompleksowe raportowanie i analizę danych
        dotyczących ruchu na stronie oraz wykrywanie ewentualnych problemów.
      </>
    }
    icon={<IntegrationServiceIcon />}
    data-aos="fade-left"
    data-aos-duration="2000"
  />
);

export default IntegrationsServiceCard;
