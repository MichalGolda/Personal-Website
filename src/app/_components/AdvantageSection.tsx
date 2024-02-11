import AdvantageCard from "./AdvantageCard";
import { SectionHeading } from "./SectionHeading";

export default function AdvantagesSection() {
  return (
    <section className="max-w-[1320px] mx-auto my-64">
      <SectionHeading headline="zalety" title="Dlaczego warto mi zaufać?" />
      <div className="my-16 flex flex-row gap-x-16 items-start">
        <AdvantageCard
          title="Rozwiązania dopasowane do oczekiwań klienta"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor."
          iconSrc="/measure.svg"
        />
        <AdvantageCard
          title="Przejrzyste rozliczenia"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor."
          iconSrc="/dollar.svg"
        />
        <AdvantageCard
          title="Realizacja w określonym terminie"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit justo sit amet orci interdum, facilisis commodo elit gravida. Suspendisse potenti. Cras non erat et magna aliquam convallis vel ac dolor."
          iconSrc="/calendar.svg"
        />
      </div>
    </section>
  );
}
