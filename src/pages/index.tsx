import Helmet from "@/components/Helmet/Helmet";
import Header from "@/components/Header/Header";
import Start from "@/components/Start/Start";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getProjects } from "@/lib/getProjects";
import type { Project } from "@/types";

export type IndexProps = {
  projects: Project[];
};

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <Helmet />
      <Header />
      <main>
        <Start />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};
