import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ServiceCard from "../ServiceCard";

describe("ServiceCard component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <ServiceCard
        title="test title"
        content="test content"
        icon={<>test icon</>}
      />
    );

    const title = screen.getByText("test title");
    const content = screen.getByText("test content");
    const icon = screen.getByText("test icon");

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H4");

    expect(content).toBeInTheDocument();
    expect(content.tagName).toBe("P");

    expect(icon).toBeInTheDocument();
  });

  it("renders unchanged", () => {
    const { container } = render(
      <ServiceCard
        title="test title"
        content="test content"
        icon={<>test icon</>}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
