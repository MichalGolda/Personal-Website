import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TechnologyIcon from "../TechnologyIcon";

describe("TechnologyIcon component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <TechnologyIcon src="/test.webp" alt="test" />
    );

    const image = container.firstChild;

    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Ftest.webp&w=64&q=75"
    );
    expect(image).toHaveAttribute("alt", "test");
    expect(image).toHaveAttribute("width", "32");
    expect(image).toHaveAttribute("height", "32");
  });

  it("renders unchanged", () => {
    const { container } = render(
      <TechnologyIcon src="/test.webp" alt="test" />
    );

    expect(container).toMatchSnapshot();
  });
});
