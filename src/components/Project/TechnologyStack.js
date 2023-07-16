import { Fragment } from "react";
import { StyledTechnologyStack } from "./TechnologyStack.styled";

export default function TechnologyStack({ technologyStack }) {
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
