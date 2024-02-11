import FaqStack from "./FaqStack";
import { SectionHeading } from "./SectionHeading";

export default function FaqSection() {
  return (
    <section className="max-w-[1320px] mx-auto my-64">
      <SectionHeading headline="FAQ" title="Najczęściej zadawane pytania" />
      <FaqStack />
    </section>
  );
}
