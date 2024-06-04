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
import { useCookieConsent } from "./_hooks/useCookieConsent";
import { useFetchProjects } from "./_hooks/useFetchProjects";

export default async function Index() {
  const projectsSectionData = await useFetchProjects();
  const cookieConsent = useCookieConsent();

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
        <ProjectsSection data={projectsSectionData} />
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
