import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FrontendTechnologyCard from "../FrontendTechnologyCard";

describe("FrontendTechnologyCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<FrontendTechnologyCard />);

    expect(container).toMatchSnapshot();
  });
});
