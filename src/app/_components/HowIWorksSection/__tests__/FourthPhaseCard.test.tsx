import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FourthPhaseCard from "../FourthPhaseCard";

describe("FourthPhaseCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<FourthPhaseCard />);

    expect(container).toMatchSnapshot();
  });
});
