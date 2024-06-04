import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import QATechnologyCard from "../QATechnologyCard";

describe("QATechnologyCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<QATechnologyCard />);

    expect(container).toMatchSnapshot();
  });
});
