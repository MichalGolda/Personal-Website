import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Logo from "../Logo";

describe("Logo component", () => {
  it("renders without errors", () => {
    const { container } = render(<Logo />);

    const link = container.firstChild;
    const image = link?.firstChild;

    expect(link).toHaveAttribute("href", "#top");

    expect(image).toHaveAttribute("src", "/logo.svg");
    expect(image).toHaveAttribute("alt", "logo");
    expect(image).toHaveAttribute("width", "151");
    expect(image).toHaveAttribute("height", "29");
  });

  it("renders unchanged", () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
