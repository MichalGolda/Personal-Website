import AdvantageCard from "./AdvantageCard";
import AdvantageIcon from "./AdvantageIcon";

const DollarAdvantageIcon = () => (
  <AdvantageIcon src="/dollar.webp" alt="dollar" />
);

const ClearBillingsAdvantageCard = () => (
  <AdvantageCard
    title="Przejrzyste rozliczenia"
    content="Przed rozpoczęciem projektu dokonuje wyceny w której zawarte są wszystkie wykonywane usługi. Dzięki, temu wiesz za co płacisz."
    icon={<DollarAdvantageIcon />}
    data-aos="fade-right"
    data-aos-duration="1000"
  />
);

export default ClearBillingsAdvantageCard;
