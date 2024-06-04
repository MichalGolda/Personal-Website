import PhaseCard from "./PhaseCard";
import { PhaseCardColors } from "./constants";

const ThirdPhaseCard = () => (
  <PhaseCard
    className="w-full md:w-1/2 md:ml-[calc((50%/3)*2)]"
    headline="faza 3"
    title="Budowa"
    color={PhaseCardColors.PHASE_THIRD}
    body="W trzeciej fazie przystępuję do budowy rozwiązania, począwszy od kodowania aż po testowanie. Zapewniam, że każdy element jest starannie sprawdzany i testowany."
    data-aos="fade-right"
    data-aos-duration="1500"
  />
);

export default ThirdPhaseCard;
