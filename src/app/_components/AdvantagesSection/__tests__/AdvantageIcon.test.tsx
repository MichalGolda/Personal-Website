import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AdvantageIcon from "../AdvantageIcon";

describe("AdvantageIcon component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <AdvantageIcon src="/test.webp" alt="test alt" />
    );

    const image = container.firstChild;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Ftest.webp&w=128&q=75"
    );
    expect(image).toHaveAttribute("alt", "test alt");
    expect(image).toHaveAttribute("width", "64");
    expect(image).toHaveAttribute("height", "64");
  });

  it("renders unchanged", () => {
    const { container } = render(
      <AdvantageIcon src="/test.webp" alt="test alt" />
    );

    expect(container).toMatchSnapshot();
  });
});
