import FAQStack from "./FAQStack";
import { SectionHeading } from "@/app/_components";

export default function FAQSection() {
  return (
    <section className="max-w-[1320px] mx-auto my-64">
      <SectionHeading headline="FAQ" title="Najczęściej zadawane pytania" />
      <FAQStack />
    </section>
  );
}
