import { Fragment } from "react";
import { StyledTechnologyStack } from "./TechnologyStack.styled";

export type TechnologyStackProps = {
  technologyStack: string[];
};

export default function TechnologyStack({
  technologyStack,
}: TechnologyStackProps) {
  return (
    <StyledTechnologyStack>
      {technologyStack.map((technology, index) => {
        const renderSlash = index !== technologyStack.length - 1;
        return (
          <Fragment key={index}>
            <p>{technology}</p>
            {renderSlash && <p>/</p>}
          </Fragment>
        );
      })}
    </StyledTechnologyStack>
  );
}
