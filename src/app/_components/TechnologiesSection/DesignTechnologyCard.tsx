import TechnologyCard from "./TechnologyCard";
import { FigmaIcon } from "./TechnologyIcon";

const DesignTechnologyCard = () => {
  return (
    <TechnologyCard
      title="Design UX/UI"
      content={
        <>
          Spójny i z dbałością o szczegóły projekt przygotowuję z pomocą:{" "}
          <b className="text-primary">Figma</b>
        </>
      }
      icons={<FigmaIcon />}
    />
  );
};

export default DesignTechnologyCard;
