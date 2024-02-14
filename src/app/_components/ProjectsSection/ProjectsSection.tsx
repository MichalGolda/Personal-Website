import { promises as fs } from "fs";
import { Project } from "@/app/_types/project";
import { SectionHeading, Container } from "@/app/_components";
import ProjectCard from "./ProjectCard";
import YourProjectCard from "./YourProjectCard";

const fetchProjects = (): Promise<Project[]> =>
  fs
    .readFile(`${process.env.contentFolderPath}/projects.json`, "utf-8")
    .then((value) => JSON.parse(value));

export default async function ProjectsSection() {
  const projects = await fetchProjects();

  return (
    <div id="portfolio" className="my-64">
      <Container>
        <SectionHeading
          headline="portfolio"
          title="Ostatnio zrezlizowane projekty"
        />
        <div className="grid mt-16 grid-cols-1 auto-cols-fr auto-rows-fr lg:grid-cols-2 lg:grid-rows-2 gap-16">
          {projects.map((project) => {
            return (
              <ProjectCard
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
