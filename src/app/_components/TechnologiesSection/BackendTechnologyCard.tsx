import TechnologyCard from "./TechnologyCard";
import {
  AWSIcon,
  AzureIcon,
  DjangoIcon,
  DockerIcon,
  GCPIcon,
  JavascriptIcon,
  NestJsIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  TypescriptIcon,
} from "./TechnologyIcon";

const Icons = () => {
  return (
    <>
      <TypescriptIcon />
      <JavascriptIcon />
      <DjangoIcon />
      <DockerIcon />
      <NodeJsIcon />
      <NestJsIcon />
      <PostgreSQLIcon />
      <AWSIcon />
      <GCPIcon />
      <AzureIcon />
    </>
  );
};

const BackendTechnologyCard = () => {
  return (
    <TechnologyCard
      title="Backend"
      content={() => (
        <>
          Dostępność, skalowalność osiągam dzięki sprawdzonym rozwiązaniom:{" "}
          <b className="text-primary">Python</b>,{" "}
          <b className="text-primary">Django</b>,{" "}
          <b className="text-primary">PHP</b>,{" "}
          <b className="text-primary">Wordpress</b>,{" "}
          <b className="text-primary">Docker</b>,{" "}
          <b className="text-primary">NodeJs</b>,{" "}
          <b className="text-primary">Nest.js</b>,{" "}
          <b className="text-primary">PostgreSQL</b>,{" "}
          <b className="text-primary">AWS</b>,{" "}
          <b className="text-primary">GCP</b>,{" "}
          <b className="text-primary">Azure</b>.
        </>
      )}
      icons={<Icons />}
    />
  );
};

export default BackendTechnologyCard;
