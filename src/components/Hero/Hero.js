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
        <StyledTitle>fullstack developer</StyledTitle>
        <StyledDescription>
          Vivamus posuere velit in ullamcorper rhoncus. Aenean odio eros,
          iaculis at tincidunt id, feugiat ac nisl. Pellentesque volutpat.
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
