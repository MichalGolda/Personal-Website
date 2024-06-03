import TechnologyCard from "./TechnologyCard";
import {
  JavascriptIcon,
  NextJsIcon,
  NuxtJsIcon,
  ReactIcon,
  SassIcon,
  TailwindCssIcon,
  TypescriptIcon,
  VueIcon,
} from "./TechnologyIcon";

const Icons = () => {
  return (
    <>
      <TypescriptIcon />
      <JavascriptIcon />
      <ReactIcon />
      <VueIcon />
      <NextJsIcon />
      <NuxtJsIcon />
      <SassIcon />
      <TailwindCssIcon />
    </>
  );
};

const FrontendTechnologyCard = () => {
  return (
    <TechnologyCard
      title="Frontend"
      content={() => (
        <>
          Wykonany z dbałością o szczegóły, seo-friendly, spójny, działający na
          dowolnym urządzeniu: <b className="text-primary">Javascript</b>,{" "}
          <b className="text-primary">Typescript</b>,{" "}
          <b className="text-primary">React</b>,{" "}
          <b className="text-primary">Vue</b>,{" "}
          <b className="text-primary">Next.js</b>,{" "}
          <b className="text-primary">Nuxt.js</b>,{" "}
          <b className="text-primary">sass</b>,{" "}
          <b className="text-primary">tailwindcss</b>.
        </>
      )}
      icons={<Icons />}
    />
  );
};

export default FrontendTechnologyCard;
