import Button from "../Button/Button";
import {
  StyledName,
  StyledProject,
  StyledDescription,
  StyledTechnologyStack,
  StyledCover,
  StyledCoverImage,
  StyledHeader,
  StyledTextContainer,
  StyledLinkInProject,
  StyledLinkInTextContainer,
} from "./Project.styled";

const TechnologyStack = ({ technologyStack }) => {
  const elements = [];
  const length = technologyStack.length;

  for (let i = 0; i < length - 2; i++) {
    elements.push(<p key={technologyStack[i]}>{technologyStack[i]}</p>);
    elements.push(<p key={i}>/</p>);
  }

  elements.push(
    <p key={technologyStack[length - 1]}>{technologyStack[length - 1]}</p>
  );

  return <StyledTechnologyStack>{elements}</StyledTechnologyStack>;
};

export default function Project({
  name,
  description,
  coverImageSrc,
  githubLink,
  technologyStack,
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
      <StyledCover>
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
