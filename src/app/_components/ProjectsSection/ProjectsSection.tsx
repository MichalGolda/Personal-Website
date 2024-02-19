"use client";

import { fetchContent } from "@/app/_utils/fetchContent";
import { Project } from "@/app/_types/project";
import { SectionHeading, Container } from "@/app/_components";
import ProjectCard from "./ProjectCard";
import YourProjectCard from "./YourProjectCard";
import { useInViewSection } from "@/app/_context/inViewSectionContext";

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
                showUrl={project.showUrl}
              />
            );
          })}
          <YourProjectCard />
        </div>
      </Container>
    </div>
  );
}
