import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import Project from "@/components/Project/Project";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 16px;
  padding-right: 16px;

  @media (${({ theme }) => theme.breakpoints.small}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (${({ theme }) => theme.breakpoints.md}) {
    margin: 0 auto;
    max-width: 1024px;
  }
`;

const StyledSectionTitle = styled.h2`
  font-size: 2.25rem;
  padding-top: 32px;
  font-weight: 900;
  padding-bottom: 32px;
  text-transform: uppercase;

  @media (${({ theme }) => theme.breakpoints.md}) {
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

  @media (${({ theme }) => theme.breakpoints.md}) {
    justify-content: left;
  }
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
  }
`;

export const StyledContactWrapper = styled.div``;

export default function Home() {
  return (
    <>
      <Head>
        <title>michalgolda</title>
        <meta name="description" content="My personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContainer id="home">
        <Header />
      </StyledContainer>
      <StyledContainer>
        <StyledSectionTitle id="projects">Projekty</StyledSectionTitle>
        <StyledProjects>
          <Project
            name="Cashly"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem odio, faucibus a magna non, ornare mattis erat. Vivamus cursus arcu ut magna suscipit, sit amet finibus libero facilisis. Vestibulum libero sem, porta malesuada posuere vel, consequat a tellus. Proin nec iaculis sapien, sit amet laoreet lacus.`}
            imageSrc="/cashly.jpg"
            githubLink="https://github.com/michalgolda/cashly"
            technologyStack={["Python", "Fast API", "JS", "NextJS", "Docker"]}
          />
          <Project
            name="Quizilla"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem odio, faucibus a magna non, ornare mattis erat. Vivamus cursus arcu ut magna suscipit, sit amet finibus libero facilisis. Vestibulum libero sem, porta malesuada posuere vel, consequat a tellus. Proin nec iaculis sapien, sit amet laoreet lacus.`}
            imageSrc="/cashly.jpg"
            githubLink="https://github.com/michalgolda/quizilla"
            technologyStack={["Python", "Fast API", "JS", "NextJS", "Docker"]}
          />
        </StyledProjects>
      </StyledContainer>
      <StyledContainer>
        <StyledSectionTitle id="contact">Kontakt</StyledSectionTitle>
        <StyledContact>
          <StyledContactWrapper>
            <p>
              Aenean interdum nulla sed massa sodales convallis. Quisque maximus
              eu ante quis scelerisque.
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
              <a href="#">
                <Image
                  src="/messenger.svg"
                  width={64}
                  height={64}
                  alt="messenger"
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
