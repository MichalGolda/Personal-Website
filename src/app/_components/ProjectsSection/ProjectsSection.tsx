"use client";

import { Project } from "@/app/_types/project";
import { SectionHeading, Container } from "@/app/_components";
import ProjectCard from "./ProjectCard";
import YourProjectCard from "./YourProjectCard";
import { useInViewSection } from "@/app/_hooks/useInViewSection";

export type ProjectsSectionProps = {
  data: Project[];
};

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const { ref } = useInViewSection("#portfolio");

  return (
    <div ref={ref} id="portfolio" className="my-64">
      <Container>
        <SectionHeading
          headline="portfolio"
          title="Ostatnio zrezlizowane projekty"
        />
        <div className="grid mt-16 grid-cols-1 auto-cols-fr auto-rows-fr lg:grid-cols-2 lg:grid-rows-2 gap-16">
          {data.map((project) => {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                githubUrl={project.githubUrl}
                coverImageSrc={project.coverImageSrc}
                previewUrl={project.previewUrl}
                data-aos="zoom-in"
                data-aos-duration="500"
              />
            );
          })}
          <YourProjectCard />
        </div>
      </Container>
    </div>
  );
}
