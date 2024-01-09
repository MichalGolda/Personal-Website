import Helmet from "@/components/Helmet/Helmet";
import Header from "@/components/Header/Header";
import Start from "@/components/Start/Start";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getProjects } from "@/lib/getProjects";
import type { Project } from "@/types";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <GoogleAnalytics gaId="G-5LGQ62V141" />
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
