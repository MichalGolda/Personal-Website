import "@/app/_mocks/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AboutMeSection from "../AboutMeSection";

describe("AboutMeSection component", () => {
  it("renders unchanged", () => {
    const { container } = render(<AboutMeSection />);

    expect(container).toMatchSnapshot();
  });
});
