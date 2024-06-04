import Image from "next/image";

export type ProjectExternalLinkProps = {
  href: string;
  name: string;
};

const ProjectExternalLink = ({ href, name }: ProjectExternalLinkProps) => (
  <a
    className="text-primary text-sm md:text-base font-bold flex flex-row gap-x-4"
    href={href}
  >
    {name}
    <Image src="/arrow.webp" alt="arrow" width={32} height={0} />
  </a>
);

export default ProjectExternalLink;
