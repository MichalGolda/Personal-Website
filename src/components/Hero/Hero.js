import {
  StyledHero,
  StyledTitle,
  StyledDescription,
  StyledTextContainer,
  StyledImage,
  StyledImageContainer,
} from "./Hero.styled";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <StyledHero>
      <StyledTextContainer>
        <StyledTitle>Fullstack Developer</StyledTitle>
        <StyledDescription>
          Moją pasją jest programowanie, od kilku lat rozwijam się w tym
          kierunku poprzez realizację projektów. Dostarczam oprogramowanie szyte
          na miarę.
        </StyledDescription>
        <a href="#contact">
          <Button variant="primary">Kontakt</Button>
        </a>
      </StyledTextContainer>
      <StyledImageContainer>
        <StyledImage src="hero-illustration.svg" alt="hero illustration" fill />
      </StyledImageContainer>
    </StyledHero>
  );
}
