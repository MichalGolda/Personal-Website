import FAQStack from "./FAQStack";
import { SectionHeading, Container } from "@/app/_components";

export default function FAQSection() {
  return (
    <section id="faq" className="my-64">
      <Container>
        <SectionHeading headline="FAQ" title="Najczęściej zadawane pytania" />
        <FAQStack />
      </Container>
    </section>
  );
}
