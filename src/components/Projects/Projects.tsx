import Container from "@/components/Container";
import Project from "@/components/Project/Project";
import SectionTitle from "../SectionTitle";
import type { Project as ProjectType } from "@/types";
import { StyledProjectList } from "./Projects.styled";

export type ProjectsProps = {
  projects: ProjectType[];
};

export default function ProjectsProps({ projects }: ProjectsProps) {
  return (
    <Container id="projects" as="section">
      <SectionTitle>Projekty</SectionTitle>
      <StyledProjectList>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            coverImageSrc={project.coverImageSrc}
            githubLink={project.githubLink}
            technologyStack={project.technologyStack}
            changeCoverPosition={index % 2 !== 0}
          />
        ))}
      </StyledProjectList>
    </Container>
  );
}
