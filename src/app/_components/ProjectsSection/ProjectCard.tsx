import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  description: string;
  showUrl?: string;
  githubUrl?: string;
  coverImageUrl: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  showUrl,
  githubUrl,
  coverImageUrl,
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-secondary font-bold text-3xl">{title}</h3>
      <div className="flex flex-row gap-x-4">
        {showUrl && (
          <a
            className="text-primary font-bold flex flex-row gap-x-4"
            href={showUrl}
          >
            Pokaż
            <Image src="/arrow.svg" alt="arrow" width={32} height={0} />
          </a>
        )}
        {githubUrl && (
          <a
            className="text-primary font-bold flex flex-row gap-x-4"
            href={githubUrl}
          >
            Github
            <Image src="/arrow.svg" alt="arrow" width={32} height={0} />
          </a>
        )}
      </div>
      <p className="text-body">{description}</p>
      <Image className="!relative" src={coverImageUrl} alt={title} fill />
    </div>
  );
};

export default ProjectCard;
