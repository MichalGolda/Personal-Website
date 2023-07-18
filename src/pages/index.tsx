import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import Project from "@/components/Project/Project";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Container from "@/components/Container";
import { getProjects } from "@/lib/getProjects";
import type { Project as ProjectType } from "@/types";
import Helmet from "@/components/Helmet/Helmet";

const StyledContainer = styled(Container)`
  min-height: 100vh;
`;

const StyledSectionTitle = styled.h2`
  font-size: 2.25rem;
  padding-top: 32px;
  font-weight: 900;
  padding-bottom: 32px;
  text-transform: uppercase;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    font-size: 3rem;
  }
`;

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 128px;
  margin-bottom: 128px;
`;

const StyledContactLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 32px;
  margin-top: 64px;
  margin-bottom: 128px;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    justify-content: left;
  }
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.mediaQuery.md}) {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
  }
`;

export const StyledContactWrapper = styled.div``;

export type HomeProps = {
  projects: ProjectType[];
};

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Helmet />
      <StyledContainer id="home">
        <Header />
      </StyledContainer>
      <StyledContainer>
        <StyledSectionTitle id="projects">Projekty</StyledSectionTitle>
        <StyledProjects>
          {projects.map((project, index) => {
            return (
              <Project
                key={project.name}
                name={project.name}
                description={project.description}
                coverImageSrc={project.coverImageSrc}
                githubLink={project.githubLink}
                technologyStack={project.technologyStack}
                changeCoverPosition={index % 2 !== 0}
              />
            );
          })}
        </StyledProjects>
      </StyledContainer>
      <StyledContainer>
        <StyledSectionTitle id="contact">Kontakt</StyledSectionTitle>
        <StyledContact>
          <StyledContactWrapper>
            <p>
              Możesz mnie znaleźć w paru miejscach w sieci lub skorzystać z
              formularza i napisać wiadomość.
            </p>
            <StyledContactLinks>
              <a href="https://github.com/michalgolda">
                <Image src="/github.svg" width={64} height={64} alt="github" />
              </a>
              <a href="https://linkedin.com/in/michał-gołda-450b95209">
                <Image
                  src="/linkedin.svg"
                  width={64}
                  height={64}
                  alt="linkedin"
                />
              </a>
            </StyledContactLinks>
          </StyledContactWrapper>
          <ContactForm />
        </StyledContact>
        <Footer />
      </StyledContainer>
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
