import "@/app/_mocks/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HowIWorksSection from "../HowIWorksSection";

describe("HowIWorksSection component", () => {
  it("renders unchanged", () => {
    const { container } = render(<HowIWorksSection />);

    expect(container).toMatchSnapshot();
  });
});
