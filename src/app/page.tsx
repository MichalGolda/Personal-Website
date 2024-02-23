import {
  Header,
  Footer,
  ScrollDown,
  ContactSection,
  AboutMeSection,
  Banner,
  AdvantagesSection,
  ServicesSection,
  TechnologiesSection,
  ProjectsSection,
  Container,
  HowIWorksSection,
  CookieConsent,
  ScrollUpButton,
} from "@/app/_components";
import { getCookieConsent } from "@/app/_utils/getCookieConsent";
import { fetchProjects } from "@/app/_utils/fetchContent";

export default async function Index() {
  const portfolioSectionData = await fetchProjects();
  const cookieConsent = getCookieConsent();

  return (
    <>
      <Header />
      <Container>
        <ScrollDown />
      </Container>
      <main>
        <AboutMeSection />
        <AdvantagesSection />
        <ServicesSection />
        <Banner />
        <ProjectsSection data={portfolioSectionData} />
        <TechnologiesSection />
        <HowIWorksSection />
        <ContactSection />
      </main>
      <ScrollUpButton />
      <Footer />
      <CookieConsent hidden={cookieConsent} />
    </>
  );
}
