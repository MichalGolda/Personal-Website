import { StyledContainer, StyledArticle, StyledImage } from "./Start.styled";
import LinkButton from "../LinkButton/LinkButton";

export default function Start() {
  return (
    <StyledContainer id="start" as="section">
      <StyledArticle>
        <h1>
          Frontend <br /> Developer.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
          iure, optio modi.
        </p>
        <LinkButton href="#contact" variant="primary">
          Kontakt
        </LinkButton>
      </StyledArticle>
      <StyledImage src="illustration.svg" alt="illustration" fill />
    </StyledContainer>
  );
}
