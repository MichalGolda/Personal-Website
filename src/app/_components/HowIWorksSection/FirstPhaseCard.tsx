import PhaseCard from "./PhaseCard";
import { PhaseCardColors } from "./constants";

const FirstPhaseCard = () => (
  <PhaseCard
    className="w-full md:w-1/2"
    headline="faza 1"
    title="Określenie oczekiwań klienta"
    color={PhaseCardColors.PHASE_FIRST}
    body="W pierwszej fazie dokładnie analizuję oczekiwania klienta, te informacje stanowią fundament, na którym opiera się proces przygotowania ostatecznego rozwiązania."
    data-aos="fade-right"
    data-aos-duration="500"
  />
);

export default FirstPhaseCard;
