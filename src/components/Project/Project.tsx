import LinkButton from "../LinkButton/LinkButton";
import TechnologyStack from "./TechnologyStack";
import {
  StyledName,
  StyledProject,
  StyledDescription,
  StyledCover,
  StyledCoverImage,
  StyledHeader,
  StyledTextContainer,
} from "./Project.styled";
import { Project } from "@/types";

export type ProjectProps = Project & {
  changeCoverPosition?: boolean;
};

export default function Project({
  name,
  description,
  coverImageSrc,
  githubLink,
  technologyStack,
  changeCoverPosition,
}: ProjectProps) {
  return (
    <StyledProject>
      <StyledTextContainer>
        <StyledHeader>
          <StyledName>{name}</StyledName>
          <TechnologyStack technologyStack={technologyStack} />
        </StyledHeader>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledCover changeCoverPosition={changeCoverPosition}>
        <StyledCoverImage
          src={coverImageSrc}
          alt={`Cover image of ${name} project`}
          fill
        />
      </StyledCover>
      <LinkButton href={githubLink} variant="outlined">
        Github
      </LinkButton>
    </StyledProject>
  );
}
