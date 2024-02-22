import {
  Header,
  Footer,
  ScrollDown,
  ContactSection,
  AboutMeSection,
  Banner,
  FAQSection,
  AdvantagesSection,
  ServicesSection,
  TechnologiesSection,
  ProjectsSection,
  Container,
  HowIWorksSection,
} from "@/app/_components";
import ScrollUpBtn from "@/app/_components/ScrollUpButton";
import { fetchContent } from "@/app/_utils/fetchContent";
import { Project } from "@/app/_types/project";

const fetchProjects = (): Promise<Project[]> => fetchContent("projects.json");

export default async function Index() {
  const portfolioSectionData = await fetchProjects();

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
