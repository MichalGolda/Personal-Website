import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProjectExternalLink from "../ProjectExternalLink";

describe("ProjectExternalLink component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <ProjectExternalLink href="https://test.pl" name="test name" />
    );

    const link = container.firstChild;
    const image = link?.lastChild;

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://test.pl");
    expect(link?.textContent).toBe("test name");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/arrow.svg");
    expect(image).toHaveAttribute("alt", "arrow");
    expect(image).toHaveAttribute("width", "32");
    expect(image).toHaveAttribute("height", "0");
  });

  it("renders unchanged", () => {
    const { container } = render(
      <ProjectExternalLink href="https://test.pl" name="test name" />
    );

    expect(container).toMatchSnapshot();
  });
});
