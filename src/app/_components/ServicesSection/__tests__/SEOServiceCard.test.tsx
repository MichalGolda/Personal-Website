import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SEOServiceCard from "../SEOServiceCard";

describe("SEOServiceCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<SEOServiceCard />);

    expect(container).toMatchSnapshot();
  });
});
