import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ThirdPhaseCard from "../ThirdPhaseCard";

describe("ThirdPhaseCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<ThirdPhaseCard />);

    expect(container).toMatchSnapshot();
  });
});
