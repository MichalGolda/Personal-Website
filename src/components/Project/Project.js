import Button from "../Button/Button";
import TechnologyStack from "./TechnologyStack";
import {
  StyledName,
  StyledProject,
  StyledDescription,
  StyledCover,
  StyledCoverImage,
  StyledHeader,
  StyledTextContainer,
  StyledLinkInProject,
  StyledLinkInTextContainer,
} from "./Project.styled";

export default function Project({
  name,
  description,
  coverImageSrc,
  githubLink,
  technologyStack,
  changeCoverPosition,
}) {
  return (
    <StyledProject>
      <StyledTextContainer>
        <StyledHeader>
          <StyledName>{name}</StyledName>
          <TechnologyStack technologyStack={technologyStack} />
        </StyledHeader>
        <StyledDescription>{description}</StyledDescription>
        <StyledLinkInTextContainer href={githubLink}>
          <Button variant="outlined">Github</Button>
        </StyledLinkInTextContainer>
      </StyledTextContainer>
      <StyledCover changeCoverPosition={changeCoverPosition}>
        <StyledCoverImage
          src={coverImageSrc}
          alt={`Cover image of ${name} project`}
          fill
        />
      </StyledCover>
      <StyledLinkInProject href={githubLink}>
        <Button variant="outlined">Github</Button>
      </StyledLinkInProject>
    </StyledProject>
  );
}
