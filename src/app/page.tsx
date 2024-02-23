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
} from "@/app/_components";
import ScrollUpBtn from "@/app/_components/ScrollUpButton";
import { fetchContent } from "@/app/_utils/fetchContent";
import { Project } from "@/app/_types/project";
import { cookies } from "next/headers";

const fetchProjects = (): Promise<Project[]> => fetchContent("projects.json");

const getCookieConsentValue = () => {
  const cookiesStore = cookies();
  const cookieConsent = cookiesStore.get("cookieConsent");

  return cookieConsent ? JSON.parse(cookieConsent.value) : false;
};

export default async function Index() {
  const portfolioSectionData = await fetchProjects();
  const cookieConsent = getCookieConsentValue();

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
      <ScrollUpBtn />
      <Footer />
    </>
  );
}
