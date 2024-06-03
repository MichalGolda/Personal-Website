import Image from "next/image";

export type TechnologyIconProps = {
  src: string;
  alt: string;
};

const TechnologyIcon = ({ src, alt }: TechnologyIconProps) => {
  return (
    <Image
      key={src}
      className="max-w-8 max-h-8"
      src={src}
      alt={alt}
      width={32}
      height={32}
    />
  );
};

export const TypescriptIcon = () => (
  <TechnologyIcon src="/typescript.webp" alt="typescript" />
);

export const JavascriptIcon = () => (
  <TechnologyIcon src="/javascript.webp" alt="javascript" />
);

export const ReactIcon = () => <TechnologyIcon src="/react.webp" alt="react" />;

export const VueIcon = () => <TechnologyIcon src="/vue.webp" alt="vue" />;

export const NextJsIcon = () => (
  <TechnologyIcon src="/nextjs.webp" alt="nextjs" />
);

export const NuxtJsIcon = () => (
  <TechnologyIcon src="/nuxtjs.webp" alt="nuxtjs" />
);

export const SassIcon = () => <TechnologyIcon src="/sass.webp" alt="sass" />;

export const TailwindCssIcon = () => (
  <TechnologyIcon src="/tailwindcss.webp" alt="tailwindcss" />
);

export const DjangoIcon = () => (
  <TechnologyIcon src="/django.webp" alt="django" />
);

export const PHPIcon = () => <TechnologyIcon src="/php.webp" alt="php" />;

export const DockerIcon = () => (
  <TechnologyIcon src="/docker.webp" alt="docker" />
);

export const NodeJsIcon = () => (
  <TechnologyIcon src="/nodejs.webp" alt="nodejs" />
);

export const NestJsIcon = () => (
  <TechnologyIcon src="/nestjs.webp" alt="nestjs" />
);

export const PostgreSQLIcon = () => (
  <TechnologyIcon src="/postgresql.webp" alt="postgresql" />
);

export const AWSIcon = () => <TechnologyIcon src="/aws.webp" alt="aws" />;

export const GCPIcon = () => <TechnologyIcon src="/gcp.webp" alt="gcp" />;

export const AzureIcon = () => <TechnologyIcon src="/azure.webp" alt="azure" />;

export const PrettierIcon = () => (
  <TechnologyIcon src="/prettier.webp" alt="prettier" />
);

export const EslintIcon = () => (
  <TechnologyIcon src="/eslint.webp" alt="eslint" />
);

export const FigmaIcon = () => <TechnologyIcon src="/figma.webp" alt="figma" />;

export default TechnologyIcon;
