import { SectionHeading, Container } from "@/app/_components";
import ProjectCard from "./ProjectCard";
import YourProjectCard from "./YourProjectCard";

export default function ProjectsSection() {
  return (
    <div id="portfolio" className="my-64">
      <Container>
        <SectionHeading
          headline="portfolio"
          title="Ostatnio zrezlizowane projekty"
        />
        <div className="grid mt-16 grid-cols-1 auto-cols-fr auto-rows-fr lg:grid-cols-2 lg:grid-rows-2 gap-16">
          <ProjectCard
            title="Pichkrakow.pl"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut purus congue, varius neque posuere, egestas magna. Vivamus lacinia urna sed sapien tincidunt, in feugiat libero auctor."
            showUrl="https://pichkrakow.pl/beta"
            coverImageUrl="/pichkrakow.jpg"
          />
          <ProjectCard
            title="Pichkrakow.pl"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut purus congue, varius neque posuere, egestas magna. Vivamus lacinia urna sed sapien tincidunt, in feugiat libero auctor."
            showUrl="https://pichkrakow.pl/beta"
            coverImageUrl="/pichkrakow.jpg"
          />
          <ProjectCard
            title="Pichkrakow.pl"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut purus congue, varius neque posuere, egestas magna. Vivamus lacinia urna sed sapien tincidunt, in feugiat libero auctor."
            showUrl="https://pichkrakow.pl/beta"
            coverImageUrl="/pichkrakow.jpg"
          />
          <YourProjectCard />
        </div>
      </Container>
    </div>
  );
}
