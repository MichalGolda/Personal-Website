import Image from "next/image";
import { Project } from "@/app/_types/project";
import ProjectExternalLink from "./ProjectExternalLink";

export type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  previewUrl,
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
        {previewUrl && <ProjectExternalLink name="Podgląd" href={previewUrl} />}
        {githubUrl && <ProjectExternalLink name="Github" href={githubUrl} />}
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
