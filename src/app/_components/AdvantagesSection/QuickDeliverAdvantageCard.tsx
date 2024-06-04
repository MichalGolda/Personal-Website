import AdvantageCard from "./AdvantageCard";
import AdvantageIcon from "./AdvantageIcon";

const CalendarAdvantageIcon = () => (
  <AdvantageIcon src="/calendar.webp" alt="calendar" />
);

const QuickDeliverAdvantageCard = () => (
  <AdvantageCard
    title="Realizacja w określonym terminie"
    content="Szczegółowo planuje etapy pracy dzięki czemu każde rozwiązanie jest gotowe na czas."
    icon={<CalendarAdvantageIcon />}
    data-aos="fade-right"
    data-aos-duration="2000"
  />
);

export default QuickDeliverAdvantageCard;
