import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TechnologyCard from "../TechnologyCard";

describe("TechnologyCard component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <TechnologyCard
        title="test title"
        content="test content"
        icons={<>test icons</>}
      />
    );

    const title = screen.getByText("test title");
    const content = screen.getByText("test content");
    const icons = container.firstChild?.lastChild;

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H4");

    expect(content).toBeInTheDocument();
    expect(content.tagName).toBe("P");

    expect(icons).toBeInTheDocument();
    expect(icons?.textContent).toBe("test icons");
  });

  it("renders unchanged", () => {
    const { container } = render(
      <TechnologyCard
        title="test title"
        content="test content"
        icons={<>test icons</>}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
