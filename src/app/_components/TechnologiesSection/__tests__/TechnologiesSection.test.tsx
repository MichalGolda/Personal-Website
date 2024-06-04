import "@/app/_mocks/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TechnologiesSection from "../TechnologiesSection";

describe("TechnologiesSection component", () => {
  it("renders unchanged", () => {
    const { container } = render(<TechnologiesSection />);

    expect(container).toMatchSnapshot();
  });
});
