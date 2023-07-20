import Image from "next/image";
import Container from "../Container";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm/ContactForm";
import {
  StyledWrapper,
  StyledAside,
  StyledList,
  StyledLink,
  StyledListItem,
} from "./Contact.styled";

export default function Contact() {
  return (
    <Container id="contact" as="section">
      <SectionTitle>Kontakt</SectionTitle>
      <StyledWrapper>
        <StyledAside>
          <p>
            Możesz mnie znaleźć w paru miejscach w sieci lub skorzystać z
            formularza i napisać wiadomość.
          </p>
          <StyledList>
            <StyledLink href="https://github.com/michalgolda">
              <StyledListItem>
                <Image src="/github.svg" width={64} height={64} alt="github" />
              </StyledListItem>
            </StyledLink>
            <StyledLink href="https://linkedin.com/in/michałgołda">
              <StyledListItem>
                <Image
                  src="/linkedin.svg"
                  width={64}
                  height={64}
                  alt="linkedin"
                />
              </StyledListItem>
            </StyledLink>
          </StyledList>
        </StyledAside>
        <ContactForm />
      </StyledWrapper>
    </Container>
  );
}
