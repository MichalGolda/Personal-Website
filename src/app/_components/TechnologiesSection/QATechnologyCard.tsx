import TechnologyCard from "./TechnologyCard";
import { EslintIcon, PrettierIcon } from "./TechnologyIcon";

const Icons = () => {
  return (
    <>
      <PrettierIcon />
      <EslintIcon />
    </>
  );
};

const QATechnologyCard = () => {
  return (
    <TechnologyCard
      title="QA"
      content={() => (
        <>
          Jakość kodu i finalnego projektu zapewniam dzięki:{" "}
          <b className="text-primary">Clean Code</b>,{" "}
          <b className="text-primary">KISS</b>,{" "}
          <b className="text-primary">DRY</b>,{" "}
          <b className="text-primary">YAGNI</b>,{" "}
          <b className="text-primary">Testy jednostkowe</b>,{" "}
          <b className="text-primary">Testy integracyjne</b>,{" "}
          <b className="text-primary">prettier</b>,{" "}
          <b className="text-primary">eslint</b>.
        </>
      )}
      icons={<Icons />}
    />
  );
};

export default QATechnologyCard;
