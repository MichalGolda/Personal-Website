import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SecondPhaseCard from "../SecondPhaseCard";

describe("SecondPhaseCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<SecondPhaseCard />);

    expect(container).toMatchSnapshot();
  });
});
