import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AdvantageCard from "../AdvantageCard";

describe("AdvantageCard component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <AdvantageCard
        icon={<>test icon</>}
        title="test title"
        content="test content"
      />
    );

    const card = container.firstChild;
    const icon = screen.getByText("test icon");
    const title = screen.getByText("test title");
    const content = screen.getByText("test content");

    expect(card).toBeInTheDocument();

    expect(icon).toBeInTheDocument();

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H4");

    expect(content).toBeInTheDocument();
    expect(content.tagName).toBe("P");
  });

  it("renders unchanged", () => {
    const { container } = render(
      <AdvantageCard
        icon={<>test icon</>}
        title="test title"
        content="test content"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
