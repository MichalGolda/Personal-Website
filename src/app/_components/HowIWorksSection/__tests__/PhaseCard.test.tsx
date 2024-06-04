import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PhaseCard from "../PhaseCard";
import { PhaseCardColors } from "../constants";

describe("PhaseCard component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <PhaseCard
        title="test title"
        color={PhaseCardColors.PHASE_FIRST}
        headline="test headline"
        body="test body"
        className="test class"
      />
    );

    const title = screen.getByText("test title");
    const headline = screen.getByText("test headline");

    expect(container.firstChild).toHaveClass("test class");

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H4");

    expect(headline).toBeInTheDocument();
    expect(headline).toHaveClass("before:bg-[#30E6FF]");
    expect(headline).toHaveClass("text-[#30E6FF]");
    expect(headline.tagName).toBe("SPAN");
  });

  it("renders unchanged", () => {
    const { container } = render(
      <PhaseCard
        title="test title"
        color={PhaseCardColors.PHASE_FIRST}
        headline="test headline"
        body="test body"
        className="test class"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
