import Image from "next/image";
import { Project } from "@/app/_types/project";

export type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  showUrl,
  githubUrl,
  coverImageSrc,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-4" {...props}>
      <h3 className="text-secondary font-bold text-xl md:text-2xl lg:text-3xl">
        {name}
      </h3>
      <div className="flex flex-row gap-x-4">
        {showUrl && (
          <a
            className="text-primary text-sm md:text-base font-bold flex flex-row gap-x-4"
            href={showUrl}
          >
            Pokaż
            <Image src="/arrow.png" alt="arrow" width={32} height={0} />
          </a>
        )}
        {githubUrl && (
          <a
            className="text-primary font-bold flex flex-row gap-x-4"
            href={githubUrl}
          >
            Github
            <Image src="/arrow.png" alt="arrow" width={32} height={0} />
          </a>
        )}
      </div>
      <p className="text-body">{description}</p>
      <Image
        className="!relative object-contain !h-fit"
        src={coverImageSrc}
        alt={name}
        fill
      />
    </div>
  );
};

export default ProjectCard;
