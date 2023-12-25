import { Fragment } from "react";
import LinkButton from "../LinkButton/LinkButton";
import {
  StyledName,
  StyledProject,
  StyledDescription,
  StyledCover,
  StyledCoverImage,
  StyledHeader,
  StyledTextContainer,
  StyledTechnologyStackList,
} from "./Project.styled";
import { Project } from "@/types";

export type ProjectProps = Project;

export default function Project({
  name,
  description,
  coverImageSrc,
  githubLink,
  technologyStack,
}: ProjectProps) {
  return (
    <StyledProject>
      <StyledTextContainer>
        <StyledHeader>
          <StyledName>{name}</StyledName>
          <StyledTechnologyStackList>
            {technologyStack.map((technology, index) => {
              const isNotLastElement = index !== technologyStack.length - 1;
              return (
                <Fragment key={index}>
                  <li>{technology}</li>
                  {isNotLastElement && <li>/</li>}
                </Fragment>
              );
            })}
          </StyledTechnologyStackList>
        </StyledHeader>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledCover>
        <StyledCoverImage
          src={coverImageSrc}
          alt={`Cover image of ${name} project`}
          fill
        />
      </StyledCover>
      {githubLink && (
        <LinkButton href={githubLink} variant="outlined">
          Github
        </LinkButton>
      )}
    </StyledProject>
  );
}
