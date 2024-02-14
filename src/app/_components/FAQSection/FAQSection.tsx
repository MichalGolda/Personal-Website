import { FAQ } from "@/app/_types/faq";
import FAQStack from "./FAQStack";
import { SectionHeading, Container } from "@/app/_components";
import { fetchContent } from "@/app/_utils/fetchContent";

const fetchFAQ = (): Promise<FAQ[]> => fetchContent("faq.json");

export default async function FAQSection() {
  const faqs = await fetchFAQ();

  return (
    <section id="faq" className="my-64">
      <Container>
        <SectionHeading headline="FAQ" title="Najczęściej zadawane pytania" />
        <FAQStack data={faqs} />
      </Container>
    </section>
  );
}
