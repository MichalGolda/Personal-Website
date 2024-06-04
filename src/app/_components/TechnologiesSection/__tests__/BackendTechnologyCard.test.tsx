import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BackendTechnologyCard from "../BackendTechnologyCard";

describe("BackendTechnologyCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<BackendTechnologyCard />);

    expect(container).toMatchSnapshot();
  });
});
