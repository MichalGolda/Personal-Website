import { StyledContainer, StyledArticle, StyledImage } from "./Start.styled";
import LinkButton from "../LinkButton/LinkButton";

export default function Start() {
  return (
    <StyledContainer id="start" as="section">
      <StyledArticle>
        <h1>
          Fullstack <br /> Developer.
        </h1>
        <p>
          Koduję świat pełen możliwości - tworząc aplikacje webowe, wpisuję
          swoją pasję w cyfrową rzeczywistość.
        </p>
        <LinkButton href="#contact" variant="primary">
          Kontakt
        </LinkButton>
      </StyledArticle>
      <StyledImage src="illustration.svg" alt="illustration" fill />
    </StyledContainer>
  );
}
