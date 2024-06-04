import PhaseCard from "./PhaseCard";
import { PhaseCardColors } from "./constants";

const FourthPhaseCard = () => (
  <PhaseCard
    className="w-full md:w-1/2 md:ml-[calc((50%/3)*3)]"
    headline="faza 4"
    title="Wdrożenie"
    color={PhaseCardColors.PHASE_FOURTH}
    body="Po zatwierdzeniu projektu przechodzę do wdrożenia na serwer produkcyjny. Dodatkowo integruję narzędzia takie jak Google Analytics, Sentry, Google Search Console. Przeprowadzam również kompleksową optymalizację SEO."
    data-aos="fade-right"
    data-aos-duration="2000"
  />
);

export default FourthPhaseCard;
