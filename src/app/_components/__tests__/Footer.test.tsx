import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from "../Footer/Footer";

describe("Footer component", () => {
  it("renders without errors", () => {
    render(<Footer />);
  });

  it("renders unchanged", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
