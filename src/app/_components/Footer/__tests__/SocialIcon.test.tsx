import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SocialIcon from "../SocialIcon";

describe("SocialIcon component", () => {
  it("renders without erros", () => {
    const { container } = render(
      <SocialIcon src="/test.webp" alt="test" href="https://test.pl" />
    );

    const icon = container.firstChild;
    const image = icon?.firstChild;

    expect(icon).toHaveAttribute("href", "https://test.pl");

    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Ftest.webp&w=48&q=75"
    );
    expect(image).toHaveAttribute("alt", "test");
    expect(image).toHaveAttribute("width", "24");
    expect(image).toHaveAttribute("height", "24");
  });

  it("renders unchanged", () => {
    const { container } = render(
      <SocialIcon src="/test.webp" alt="test" href="https://test.pl" />
    );

    expect(container).toMatchSnapshot();
  });
});
