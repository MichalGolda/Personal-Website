import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FirstPhaseCard from "../FirstPhaseCard";

describe("FirstPhaseCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<FirstPhaseCard />);

    expect(container).toMatchSnapshot();
  });
});
