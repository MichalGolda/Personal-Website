import ServiceCard from "./ServiceCard";
import ServiceIcon from "./ServiceIcon";

const DevelopmentServiceIcon = () => (
  <ServiceIcon src="/development.webp" alt="development" />
);

const DedicatedAppsServiceCard = () => (
  <ServiceCard
    title="Dedykowane aplikacje"
    content={
      <>
        Tworzenie dedykowanych aplikacji webowych i desktopowych, dostosowanych
        do indywidualnych potrzeb klienta i rozwiązujących konkretny problem.{" "}
        <br />
        <br />
        Projektowanie i rozwój stron typu landing page, blogów oraz innych
        platform internetowych, zapewniających atrakcyjność wizualną,
        użyteczność i dostępnosć do dowolnym urządzeniu.
      </>
    }
    icon={<DevelopmentServiceIcon />}
    data-aos="fade-left"
    data-aos-duration="1000"
  />
);

export default DedicatedAppsServiceCard;
