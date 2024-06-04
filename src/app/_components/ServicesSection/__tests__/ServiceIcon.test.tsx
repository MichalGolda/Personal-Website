import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ServiceIcon from "../ServiceIcon";

describe("ServiceIcon component", () => {
  it("renders without errors", () => {
    const { container } = render(<ServiceIcon src="/test.webp" alt="test" />);

    const image = container.firstChild;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Ftest.webp&w=128&q=75"
    );
    expect(image).toHaveAttribute("alt", "test");
    expect(image).toHaveAttribute("width", "64");
    expect(image).toHaveAttribute("height", "64");
  });

  it("renders unchanged", () => {
    const { container } = render(<ServiceIcon src="/test.webp" alt="test" />);

    expect(container).toMatchSnapshot();
  });
});
