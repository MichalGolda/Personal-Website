import AdvantageCard from "./AdvantageCard";
import AdvantageIcon from "./AdvantageIcon";

const MeasureAdvantageIcon = () => (
  <AdvantageIcon src="/measure.webp" alt="measure" />
);

const FittedSolutionsAdvantageCard = () => (
  <AdvantageCard
    title="Rozwiązania dopasowane do oczekiwań klienta"
    content="Każdy projekt rozpoczynam od zebrania szczegółowych informacji na temat tego jak ma wyglądać końcowe rozwiązanie. W trakcie realizacji konsultuje postępy po to żeby jak najlepiej wpasować się w twoje oczekiwania."
    icon={<MeasureAdvantageIcon />}
    data-aos="fade-right"
    data-aos-duration="1500"
  />
);

export default FittedSolutionsAdvantageCard;
