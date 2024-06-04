import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FittedSolutionsAdvantageCard from "../FittedSolutionsAdvantageCard";

describe("FittedSolutionsAdvantageCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<FittedSolutionsAdvantageCard />);

    expect(container).toMatchSnapshot();
  });
});
