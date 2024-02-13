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
} from "@/app/_components";

export default function Index() {
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
        <ProjectsSection />
        <TechnologiesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
