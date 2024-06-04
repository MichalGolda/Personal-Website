import "@/app/_mocks/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ServicesSection from "../ServicesSection";

describe("ServicesSection component", () => {
  it("renders unchanged", () => {
    const { container } = render(<ServicesSection />);

    expect(container).toMatchSnapshot();
  });
});
