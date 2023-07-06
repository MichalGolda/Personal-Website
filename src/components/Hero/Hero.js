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
          Cześć! Mam na imię Michał, od kilku lat interesuje się programowaniem
          i tworzeniem stron internetowych. Do realizacji projektów wykorzystuje
          technologie oraz techniki, które pozwalają zachować najwyższą jakość
          świadczonych usług.
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
