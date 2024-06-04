import PhaseCard from "./PhaseCard";
import { PhaseCardColors } from "./constants";

const SecondPhaseCard = () => (
  <PhaseCard
    className="w-full md:w-1/2 md:ml-[calc(50%/3)]"
    headline="faza 2"
    title="Design UX/UI"
    color={PhaseCardColors.PHASE_SECOND}
    body="Na bazie zebranych informacji tworzę projekt graficzny. W trakcie projektowania regularnie konsultuję się z klientem, aby na bieżąco uwzględniać wprowadzane zmiany. Przechodzę do kolejnego etapu dopiero po uzyskaniu pełnej akceptacji."
    data-aos="fade-right"
    data-aos-duration="1000"
  />
);

export default SecondPhaseCard;
