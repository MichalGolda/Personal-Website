import "@/app/_mocks/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Banner from "../Banner";

describe("Banner component", () => {
  it("renders without erros", () => {
    render(<Banner />);
  });

  it("renders unchanged", () => {
    const { container } = render(<Banner />);

    expect(container).toMatchSnapshot();
  });
});
