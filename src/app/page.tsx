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
  SuccessAlert,
  ErrorAlert,
} from "@/app/_components";

export default function Index() {
  return (
    <>
      <Header />
      <div className="max-w-[1320px] mx-auto">
        <ScrollDown />
      </div>
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
